// ========== 全局变量 ==========
let currentRoutes = [];
let currentStart = '';
let currentEnd = '';
let mapClickCount = 0;

// ========== 初始化 ==========
window.onload = function() {
    initStationSelects();
};

// ========== 页面切换 ==========
function goToPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // 显示目标页面
    document.getElementById(pageId).classList.add('active');
    // 更新底部导航
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    const navMap = {
        'pageHome': 0,
        'pageMap': 1,
        'pageFav': 2,
        'pageHistory': 3
    };
    const idx = navMap[pageId];
    if (idx !== undefined) {
        document.querySelectorAll('.nav-item')[idx].classList.add('active');
    }
    
    // 加载对应内容
    if (pageId === 'pageMap') loadMap();
    if (pageId === 'pageFav') loadFavorites();
    if (pageId === 'pageHistory') loadHistory();
    
    window.scrollTo(0, 0);
}

// ========== 弹窗 ==========
function showModal(modalId) {
    document.getElementById(modalId).classList.add('show');
}
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// ========== 下拉列表 ==========
function initStationSelects() {
    const stations = getAllStations();
    const startSelect = document.getElementById('startStation');
    const endSelect = document.getElementById('endStation');
    
    stations.forEach(function(station) {
        const opt1 = document.createElement('option');
        opt1.value = station;
        opt1.textContent = station;
        startSelect.appendChild(opt1);
        
        const opt2 = document.createElement('option');
        opt2.value = station;
        opt2.textContent = station;
        endSelect.appendChild(opt2);
    });
}

// ========== 交换 ==========
function swapStations() {
    const start = document.getElementById('startStation');
    const end = document.getElementById('endStation');
    const temp = start.value;
    start.value = end.value;
    end.value = temp;
}

// ========== 路线算法 ==========
function getStationLines(station) {
    const lines = [];
    for (let line in metroLines) {
        if (metroLines[line].stations.includes(station)) lines.push(line);
    }
    return lines;
}

function getNeighbors(station) {
    const neighbors = new Set();
    for (let line in metroLines) {
        const stations = metroLines[line].stations;
        const idx = stations.indexOf(station);
        if (idx > -1) {
            if (idx > 0) neighbors.add(stations[idx - 1]);
            if (idx < stations.length - 1) neighbors.add(stations[idx + 1]);
        }
    }
    return neighbors;
}

function bfs(start, end) {
    if (start === end) return [start];
    const queue = [[start]];
    const visited = new Set([start]);
    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length - 1];
        for (let neighbor of getNeighbors(current)) {
            if (neighbor === end) return [...path, neighbor];
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }
    return null;
}

function findConnectingLines(s1, s2) {
    const lines = [];
    for (let line in metroLines) {
        const stations = metroLines[line].stations;
        const i1 = stations.indexOf(s1);
        const i2 = stations.indexOf(s2);
        if (i1 > -1 && i2 > -1 && Math.abs(i1 - i2) === 1) lines.push(line);
    }
    return lines;
}

function pathToSegments(path) {
    const segments = [];
    let currentLine = null;
    let segmentStart = 0;
    for (let i = 0; i < path.length - 1; i++) {
        const lines = findConnectingLines(path[i], path[i + 1]);
        if (lines.length === 0) continue;
        const chosen = currentLine && lines.includes(currentLine) ? currentLine : lines[0];
        if (currentLine && chosen !== currentLine) {
            segments.push({ line: currentLine, start: path[segmentStart], end: path[i], stations: i - segmentStart });
            segmentStart = i;
        }
        currentLine = chosen;
    }
    if (currentLine) {
        segments.push({ line: currentLine, start: path[segmentStart], end: path[path.length - 1], stations: path.length - 1 - segmentStart });
    }
    return segments;
}

function findRoutes(start, end) {
    const routes = [];
    const startLines = getStationLines(start);
    const endLines = getStationLines(end);
    
    const directLines = startLines.filter(l => endLines.includes(l));
    for (let line of directLines) {
        const stations = metroLines[line].stations;
        const count = Math.abs(stations.indexOf(end) - stations.indexOf(start));
        routes.push({
            type: '直达', segments: [{ line, start, end, stations: count }],
            totalStations: count, totalTransfers: 0, totalTime: count * 2.5
        });
    }
    
    for (let transfer in transferStations) {
        if (transfer === start || transfer === end) continue;
        const tLines = transferStations[transfer];
        const commonS = startLines.filter(l => tLines.includes(l));
        const commonE = endLines.filter(l => tLines.includes(l));
        if (commonS.length > 0 && commonE.length > 0) {
            for (let l1 of commonS) {
                for (let l2 of commonE) {
                    if (l1 !== l2) {
                        const s1 = metroLines[l1].stations;
                        const s2 = metroLines[l2].stations;
                        const c1 = Math.abs(s1.indexOf(transfer) - s1.indexOf(start));
                        const c2 = Math.abs(s2.indexOf(end) - s2.indexOf(transfer));
                        routes.push({
                            type: '换乘1次', segments: [
                                { line: l1, start, end: transfer, stations: c1 },
                                { line: l2, start: transfer, end, stations: c2 }
                            ],
                            totalStations: c1 + c2, totalTransfers: 1, totalTime: (c1 + c2) * 2.5 + 5
                        });
                    }
                }
            }
        }
    }
    
    if (routes.length === 0) {
        const path = bfs(start, end);
        if (path && path.length > 1) {
            const segs = pathToSegments(path);
            const total = segs.reduce((s, seg) => s + seg.stations, 0);
            routes.push({
                type: '最短路径', segments: segs,
                totalStations: total, totalTransfers: segs.length - 1,
                totalTime: total * 2.5 + (segs.length - 1) * 5
            });
        }
    }
    return routes.sort((a, b) => a.totalTime - b.totalTime);
}

// ========== 查询路线 ==========
function queryRoute() {
    const start = document.getElementById('startStation').value;
    const end = document.getElementById('endStation').value;
    const resultDiv = document.getElementById('resultContent');
    
    if (!start || !end) {
        alert('请选择起点站和终点站');
        return;
    }
    if (start === end) {
        alert('起点和终点相同');
        return;
    }
    
    saveHistory(start, end);
    const routes = findRoutes(start, end);
    currentRoutes = routes;
    currentStart = start;
    currentEnd = end;
    
    if (routes.length === 0) {
        resultDiv.innerHTML = '<p class="placeholder">❌ 未找到可行路线</p>';
        return;
    }
    
    displayRoute(routes[0], resultDiv);
    document.getElementById('resultCard').scrollIntoView({ behavior: 'smooth' });
}

function displayRoute(route, container) {
    let html = '';
    html += '<p style="font-weight:700;font-size:16px;color:#6750A4;">⭐ 推荐方案：' + route.type + '</p>';
    html += '<p style="margin:8px 0;">从 <b>' + currentStart + '</b> 到 <b>' + currentEnd + '</b></p>';
    
    route.segments.forEach(function(seg, i) {
        const color = metroLines[seg.line].color;
        html += '<div class="route-segment' + (i > 0 ? ' transfer' : '') + '">';
        if (i > 0) {
            html += '<p style="color:#FF5722;">🔄 在<b>' + seg.start + '</b>换乘</p>';
        } else {
            html += '<p>🚉 在<b>' + seg.start + '</b>上车</p>';
        }
        html += '<span class="line-badge" style="background:' + color + ';">🚇 ' + seg.line + '</span>';
        html += '<p>乘坐 <b>' + seg.stations + '</b> 站</p>';
        html += '<p>' + seg.start + ' → ' + seg.end + '</p>';
        html += '<p>预计用时：约 <b>' + (seg.stations * 2.5).toFixed(0) + '</b> 分钟</p>';
        html += '</div>';
    });
    
    html += '<div class="route-summary">';
    html += '<p style="font-weight:700;">📊 总计</p>';
    html += '<p>· 乘坐 <b>' + route.totalStations + '</b> 站</p>';
    html += '<p>· 换乘 <b>' + route.totalTransfers + '</b> 次</p>';
    html += '<p class="route-time">· 预计总用时：约 <b>' + route.totalTime.toFixed(0) + '</b> 分钟</p>';
    html += '</div>';
    
    if (currentRoutes.length > 1) {
        html += '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">';
        currentRoutes.forEach(function(r, i) {
            html += '<button onclick="switchRoute(' + i + ')" style="padding:8px 14px;border:2px solid #6750A4;border-radius:20px;background:transparent;color:#6750A4;font-size:13px;cursor:pointer;">方案' + (i+1) + '</button>';
        });
        html += '</div>';
    }
    
    container.innerHTML = html;
}

function switchRoute(index) {
    displayRoute(currentRoutes[index], document.getElementById('resultContent'));
}

function resetQuery() {
    document.getElementById('startStation').value = '';
    document.getElementById('endStation').value = '';
    document.getElementById('resultContent').innerHTML = '<p class="placeholder">💡 选择起点和终点后点击查询</p>';
    currentRoutes = [];
}

// ========== 线路图 ==========
function loadMap() {
    const canvas = document.getElementById('mapCanvas');
    mapClickCount = 0;
    
    let html = '';
    for (let line in metroLines) {
        const data = metroLines[line];
        html += '<div class="map-line" style="border-left:4px solid ' + data.color + ';padding-left:8px;margin:10px 0;">';
        html += '<b style="color:' + data.color + ';">' + line + '</b><br>';
        data.stations.forEach(function(station) {
            const isTransfer = station in transferStations;
            html += '<span class="map-station' + (isTransfer ? ' transfer-station' : '') + '" ';
            html += 'style="border-color:' + data.color + ';' + (isTransfer ? 'background:#FFF3E0;' : '') + '" ';
            html += 'onclick="setStationFromMap(\'' + station + '\')">' + station + '</span>';
        });
        html += '</div>';
    }
    canvas.innerHTML = html;
}

function setStationFromMap(station) {
    mapClickCount++;
    if (mapClickCount === 1) {
        document.getElementById('startStation').value = station;
    } else {
        document.getElementById('endStation').value = station;
        goToPage('pageHome');
        queryRoute();
    }
}

// ========== 收藏 ==========
function loadFavorites() {
    const container = document.getElementById('favContent');
    const favs = JSON.parse(localStorage.getItem('metro_favorites') || '[]');
    
    if (favs.length === 0) {
        container.innerHTML = '<p class="placeholder">暂无收藏路线</p>';
        return;
    }
    
    let html = '';
    favs.forEach(function(fav) {
        html += '<div class="list-item" onclick="useFavorite(\'' + fav.start + '\',\'' + fav.end + '\')" style="padding:12px;margin:4px 0;background:#FFF;border-radius:12px;cursor:pointer;">';
        html += '<b>' + fav.name + '</b><br>' + fav.start + ' → ' + fav.end;
        html += '</div>';
    });
    container.innerHTML = html;
}

function useFavorite(start, end) {
    document.getElementById('startStation').value = start;
    document.getElementById('endStation').value = end;
    goToPage('pageHome');
    queryRoute();
}

function saveFavorite(name, start, end) {
    let favs = JSON.parse(localStorage.getItem('metro_favorites') || '[]');
    favs.push({ name, start, end });
    localStorage.setItem('metro_favorites', JSON.stringify(favs));
}

// ========== 历史记录 ==========
function loadHistory() {
    const container = document.getElementById('historyContent');
    const history = JSON.parse(localStorage.getItem('metro_history') || '[]');
    
    if (history.length === 0) {
        container.innerHTML = '<p class="placeholder">暂无历史记录</p>';
        return;
    }
    
    let html = '';
    history.forEach(function(h) {
        html += '<div class="list-item" onclick="useFavorite(\'' + h.start + '\',\'' + h.end + '\')" style="padding:12px;margin:4px 0;background:#FFF;border-radius:12px;cursor:pointer;">';
        html += h.start + ' → ' + h.end + '<br><small style="color:#999;">' + h.time + '</small>';
        html += '</div>';
    });
    container.innerHTML = html;
}

function saveHistory(start, end) {
    let history = JSON.parse(localStorage.getItem('metro_history') || '[]');
    history.unshift({ start, end, time: new Date().toLocaleString('zh-CN') });
    history = history.slice(0, 20);
    localStorage.setItem('metro_history', JSON.stringify(history));
}

function clearHistory() {
    if (confirm('确定清空所有历史记录？')) {
        localStorage.removeItem('metro_history');
        loadHistory();
    }
}
