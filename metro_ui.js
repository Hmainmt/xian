// ========== 多国语言字典 ==========
const LANG = {
    zh: {
        title: "🚇 西安地铁出行小助手",
        subtitle: "快速查询换乘方案 · 无障碍设计",
        startPlaceholder: "选择起点站",
        endPlaceholder: "选择终点站",
        swapBtn: "⇅ 交换起终点",
        modeLegend: "查询模式：",
        modeRecommend: "推荐方案",
        modeShortest: "最短时间",
        modeLeast: "最少换乘",
        btnQuery: "🔍 查询路线",
        btnReset: "🔄 重置",
        resultTitle: "📋 查询结果",
        resultPlaceholder: "💡 选择起点和终点后点击查询",
        navQuery: "🔍 查询",
        navMap: "🗺️ 线路图",
        navFav: "⭐ 收藏",
        navHistory: "🕐 历史",
        mapTitle: "🗺️ 西安地铁线路图",
        mapTip: "点击站点设为起点，再次点击设为终点",
        selectBoth: "请选择起点站和终点站",
        sameStation: "起点和终点相同，请重新选择",
        noRoute: "❌ 未找到可行路线",
        bestRoute: "⭐ 推荐方案",
        from: "从",
        to: "到",
        board: "上车",
        transfer: "换乘",
        stations: "站",
        estTime: "预计用时：约",
        min: "分钟",
        total: "📊 总计",
        totalStations: "· 乘坐",
        totalTransfers: "· 换乘",
        totalTime: "· 预计总用时：约",
        direct: "直达",
        transfer1: "换乘1次",
        bfs: "最短路径",
        crowdMorning: "🔴 当前早高峰，较拥挤",
        crowdEvening: "🟡 当前晚高峰，较拥挤",
        crowdNoon: "🟢 当前平峰，较舒适",
        crowdNight: "🔵 当前低峰，很宽松",
        favPrompt: "请输入路线名称（如：家到学校）：",
        favSuccess: "已收藏路线：",
        noFav: "暂无收藏路线",
        noHistory: "暂无历史记录",
        clearHistory: "🗑️ 清空历史",
        clearConfirm: "确定要清空所有历史记录吗？",
        historyCleared: "历史记录已清空",
        largeFont: "已切换为大字体模式",
        normalFont: "已切换为标准字体",
        highContrast: "已切换为高对比度模式",
        normalContrast: "已切换为标准对比度",
        bigBtn: "已切换为大按钮模式",
        normalBtn: "已切换为标准按钮",
        darkMode: "已切换为深色模式",
        lightMode: "已切换为浅色模式",
        reset: "已重置",
        swapped: "已交换起点和终点",
        startSet: "起点已设置为：",
        endSet: "终点已设置为：",
        routesFound: "共找到",
        routeItem: "条路线",
        switchTo: "已切换到",
        favAdded: "路线已收藏",
    },
    en: {
        title: "🚇 Xi'an Metro Assistant",
        subtitle: "Quick transfer query · Accessible",
        startPlaceholder: "Select start",
        endPlaceholder: "Select end",
        swapBtn: "⇅ Swap",
        modeLegend: "Mode:",
        modeRecommend: "Recommended",
        modeShortest: "Shortest",
        modeLeast: "Least Transfer",
        btnQuery: "🔍 Search",
        btnReset: "🔄 Reset",
        resultTitle: "📋 Results",
        resultPlaceholder: "💡 Select stations and click Search",
        navQuery: "🔍 Search",
        navMap: "🗺️ Map",
        navFav: "⭐ Fav",
        navHistory: "🕐 History",
        mapTitle: "🗺️ Xi'an Metro Map",
        mapTip: "Click station: 1st=Start, 2nd=End",
        selectBoth: "Please select both stations",
        sameStation: "Start and end are the same",
        noRoute: "❌ No route found",
        bestRoute: "⭐ Best Route",
        from: "From",
        to: "To",
        board: "Board",
        transfer: "Transfer",
        stations: "stations",
        estTime: "Est. time: ~",
        min: "min",
        total: "📊 Summary",
        totalStations: "· Total stations: ",
        totalTransfers: "· Transfers: ",
        totalTime: "· Est. total: ~",
        direct: "Direct",
        transfer1: "1 Transfer",
        bfs: "Shortest Path",
        crowdMorning: "🔴 Morning peak, crowded",
        crowdEvening: "🟡 Evening peak, crowded",
        crowdNoon: "🟢 Off-peak, comfortable",
        crowdNight: "🔵 Low peak, relaxed",
        favPrompt: "Enter route name:",
        favSuccess: "Route saved: ",
        noFav: "No favorites yet",
        noHistory: "No history yet",
        clearHistory: "🗑️ Clear History",
        clearConfirm: "Clear all history?",
        historyCleared: "History cleared",
        largeFont: "Large font mode on",
        normalFont: "Normal font restored",
        highContrast: "High contrast mode on",
        normalContrast: "Normal contrast restored",
        bigBtn: "Big button mode on",
        normalBtn: "Normal button restored",
        darkMode: "Dark mode on",
        lightMode: "Light mode on",
        reset: "Reset",
        swapped: "Stations swapped",
        startSet: "Start set to: ",
        endSet: "End set to: ",
        routesFound: "Found",
        routeItem: "routes",
        switchTo: "Switched to ",
        favAdded: "Route saved",
    },
    ja: {
        title: "🚇 西安地下鉄アシスタント",
        subtitle: "乗換案内 · アクセシブル",
        startPlaceholder: "出発駅を選択",
        endPlaceholder: "到着駅を選択",
        swapBtn: "⇅ 入替",
        modeLegend: "モード：",
        modeRecommend: "おすすめ",
        modeShortest: "最短時間",
        modeLeast: "最小乗換",
        btnQuery: "🔍 検索",
        btnReset: "🔄 リセット",
        resultTitle: "📋 結果",
        resultPlaceholder: "💡 駅を選択して検索",
        navQuery: "🔍 検索",
        navMap: "🗺️ 路線図",
        navFav: "⭐ お気に入り",
        navHistory: "🕐 履歴",
        mapTitle: "🗺️ 西安地下鉄路線図",
        mapTip: "駅クリック：1回目=出発、2回目=到着",
        selectBoth: "両方の駅を選択してください",
        sameStation: "出発と到着が同じです",
        noRoute: "❌ ルートが見つかりません",
        bestRoute: "⭐ おすすめ",
        from: "から",
        to: "まで",
        board: "乗車",
        transfer: "乗換",
        stations: "駅",
        estTime: "所要時間：約",
        min: "分",
        total: "📊 合計",
        totalStations: "· 駅数：",
        totalTransfers: "· 乗換：",
        totalTime: "· 合計時間：約",
        direct: "直通",
        transfer1: "1回乗換",
        bfs: "最短経路",
        crowdMorning: "🔴 朝ラッシュ、混雑",
        crowdEvening: "🟡 夕方ラッシュ、混雑",
        crowdNoon: "🟢 平常時、快適",
        crowdNight: "🔵 閑散時、余裕",
        favPrompt: "ルート名を入力：",
        favSuccess: "保存しました：",
        noFav: "お気に入りなし",
        noHistory: "履歴なし",
        clearHistory: "🗑️ 履歴消去",
        clearConfirm: "全て消去しますか？",
        historyCleared: "履歴を消去しました",
        largeFont: "大文字モード",
        normalFont: "標準文字",
        highContrast: "高コントラスト",
        normalContrast: "標準コントラスト",
        bigBtn: "大ボタンモード",
        normalBtn: "標準ボタン",
        darkMode: "ダークモード",
        lightMode: "ライトモード",
        reset: "リセット",
        swapped: "駅を入替",
        startSet: "出発駅：",
        endSet: "到着駅：",
        routesFound: "",
        routeItem: "件のルート",
        switchTo: "切替：",
        favAdded: "保存完了",
    }
};

// ========== 全局变量 ==========
let currentLang = 'zh';
let currentRoutes = [];
let currentStart = '';
let currentEnd = '';
let mapClickCount = 0;

// ========== 获取当前语言文本 ==========
function t(key) {
    return LANG[currentLang][key] || key;
}

// ========== 初始化 ==========
window.onload = function() {
    initStationSelects();
    setupKeyboardNav();
    updateAllText();
    applySavedTheme();
};

// ========== 语言切换 ==========
function switchLanguage(lang) {
    currentLang = lang;
    updateAllText();
    localStorage.setItem('metro_lang', lang);
    announceToScreenReader('Language: ' + lang);
    vibrate(30);
}

function updateAllText() {
    // 标题
    document.getElementById('appTitle').textContent = t('title');
    document.getElementById('appSubtitle').textContent = t('subtitle');
    
    // 下拉框占位
    document.getElementById('startPlaceholder').textContent = t('startPlaceholder');
    document.getElementById('endPlaceholder').textContent = t('endPlaceholder');
    
    // 按钮
    document.getElementById('swapBtn').textContent = t('swapBtn');
    document.getElementById('btnQuery').textContent = t('btnQuery');
    document.getElementById('btnReset').textContent = t('btnReset');
    
    // 模式
    document.getElementById('modeLegend').textContent = t('modeLegend');
    document.getElementById('modeRecommend').textContent = t('modeRecommend');
    document.getElementById('modeShortest').textContent = t('modeShortest');
    document.getElementById('modeLeast').textContent = t('modeLeast');
    
    // 结果
    document.getElementById('resultTitle').textContent = t('resultTitle');
    const placeholder = document.getElementById('resultPlaceholder');
    if (placeholder) placeholder.textContent = t('resultPlaceholder');
    
    // 导航
    document.getElementById('navQuery').textContent = t('navQuery');
    document.getElementById('navMap').textContent = t('navMap');
    document.getElementById('navFav').textContent = t('navFav');
    document.getElementById('navHistory').textContent = t('navHistory');
    
    // 高亮当前语言按钮
    ['btnZh', 'btnEn', 'btnJa'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.style.background = '#37474f';
    });
    if (currentLang === 'zh') document.getElementById('btnZh').style.background = '#1976D2';
    if (currentLang === 'en') document.getElementById('btnEn').style.background = '#1976D2';
    if (currentLang === 'ja') document.getElementById('btnJa').style.background = '#1976D2';
    
    // 如果已有查询结果，刷新显示
    if (currentRoutes.length > 0) {
        displayRoute(currentRoutes[0], document.getElementById('resultContent'));
    }
}

// ========== 深色模式 ==========
function toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        document.getElementById('btnDarkMode').textContent = '🌙';
        announceToScreenReader(t('lightMode'));
        localStorage.setItem('metro_dark', 'off');
    } else {
        body.classList.add('dark-mode');
        document.getElementById('btnDarkMode').textContent = '☀️';
        announceToScreenReader(t('darkMode'));
        localStorage.setItem('metro_dark', 'on');
    }
}

function applySavedTheme() {
    const saved = localStorage.getItem('metro_dark');
    if (saved === 'on') {
        document.body.classList.add('dark-mode');
        document.getElementById('btnDarkMode').textContent = '☀️';
    }
    const savedLang = localStorage.getItem('metro_lang');
    if (savedLang && LANG[savedLang]) {
        currentLang = savedLang;
        updateAllText();
    }
}

// ========== 无障碍功能 ==========
function toggleFontSize() {
    const body = document.body;
    if (body.classList.contains('large-font')) {
        body.classList.remove('large-font');
        announceToScreenReader(t('normalFont'));
    } else {
        body.classList.add('large-font');
        announceToScreenReader(t('largeFont'));
    }
}

function toggleContrast() {
    const body = document.body;
    if (body.classList.contains('high-contrast')) {
        body.classList.remove('high-contrast');
        announceToScreenReader(t('normalContrast'));
    } else {
        body.classList.add('high-contrast');
        announceToScreenReader(t('highContrast'));
    }
}

function toggleBigButtons() {
    const body = document.body;
    if (body.classList.contains('big-buttons')) {
        body.classList.remove('big-buttons');
        announceToScreenReader(t('normalBtn'));
    } else {
        body.classList.add('big-buttons');
        announceToScreenReader(t('bigBtn'));
    }
}

function speakResult() {
    const resultContent = document.getElementById('resultContent');
    const text = resultContent.textContent.trim();
    
    if (text.includes('选择') && text.includes('查询')) {
        announceToScreenReader(t('resultPlaceholder'));
        return;
    }
    
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = currentLang === 'ja' ? 'ja-JP' : currentLang === 'en' ? 'en-US' : 'zh-CN';
        speech.rate = 0.9;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(speech);
    }
}

function announceToScreenReader(message) {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'assertive');
    announcer.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);';
    announcer.textContent = message;
    document.body.appendChild(announcer);
    setTimeout(() => announcer.remove(), 3000);
}

function vibrate(pattern) {
    if (navigator.vibrate) navigator.vibrate(pattern);
}

// ========== 键盘导航 ==========
function setupKeyboardNav() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMap();
            closeList();
        }
    });
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
    vibrate(50);
    announceToScreenReader(t('swapped'));
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

function findConnectingLines(station1, station2) {
    const lines = [];
    for (let line in metroLines) {
        const stations = metroLines[line].stations;
        const idx1 = stations.indexOf(station1);
        const idx2 = stations.indexOf(station2);
        if (idx1 > -1 && idx2 > -1 && Math.abs(idx1 - idx2) === 1) lines.push(line);
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
        const chosenLine = currentLine && lines.includes(currentLine) ? currentLine : lines[0];
        if (currentLine && chosenLine !== currentLine) {
            segments.push({ line: currentLine, start: path[segmentStart], end: path[i], stations: i - segmentStart });
            segmentStart = i;
        }
        currentLine = chosenLine;
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
            type: t('direct'),
            segments: [{ line, start, end, stations: count }],
            totalStations: count, totalTransfers: 0, totalTime: count * 2.5
        });
    }
    
    for (let transfer in transferStations) {
        if (transfer === start || transfer === end) continue;
        const transferLines = transferStations[transfer];
        const commonStart = startLines.filter(l => transferLines.includes(l));
        const commonEnd = endLines.filter(l => transferLines.includes(l));
        if (commonStart.length > 0 && commonEnd.length > 0) {
            for (let line1 of commonStart) {
                for (let line2 of commonEnd) {
                    if (line1 !== line2) {
                        const s1 = metroLines[line1].stations;
                        const s2 = metroLines[line2].stations;
                        const c1 = Math.abs(s1.indexOf(transfer) - s1.indexOf(start));
                        const c2 = Math.abs(s2.indexOf(end) - s2.indexOf(transfer));
                        routes.push({
                            type: t('transfer1'),
                            segments: [
                                { line: line1, start, end: transfer, stations: c1 },
                                { line: line2, start: transfer, end, stations: c2 }
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
            const segments = pathToSegments(path);
            const totalStations = segments.reduce((s, seg) => s + seg.stations, 0);
            routes.push({
                type: t('bfs'),
                segments, totalStations, totalTransfers: segments.length - 1,
                totalTime: totalStations * 2.5 + (segments.length - 1) * 5
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
        alert(t('selectBoth'));
        return;
    }
    if (start === end) {
        alert(t('sameStation'));
        return;
    }
    
    vibrate([50, 30, 50]);
    saveHistory(start, end);
    
    const routes = findRoutes(start, end);
    currentRoutes = routes;
    currentStart = start;
    currentEnd = end;
    
    if (routes.length === 0) {
        resultDiv.innerHTML = '<p class="placeholder" role="alert">' + t('noRoute') + '</p>';
        announceToScreenReader(t('noRoute'));
        return;
    }
    
    displayRoute(routes[0], resultDiv);
    announceToScreenReader(t('routesFound') + ' ' + routes.length + ' ' + t('routeItem'));
}

function displayRoute(route, container) {
    let html = '';
    html += '<p style="color:#1976D2;font-weight:bold;font-size:16px;">' + t('bestRoute') + '：' + route.type + '</p>';
    html += '<p style="margin:8px 0;">' + t('from') + ' <b>' + currentStart + '</b> ' + t('to') + ' <b>' + currentEnd + '</b></p>';
    
    route.segments.forEach(function(seg, i) {
        const lineColor = metroLines[seg.line].color;
        const isTransfer = i > 0;
        
        html += '<div class="route-segment' + (isTransfer ? ' transfer' : '') + '">';
        if (isTransfer) {
            html += '<p style="color:#FF5722;">🔄 ' + t('transfer') + '：<b>' + seg.start + '</b></p>';
        } else {
            html += '<p>🚉 ' + t('board') + '：<b>' + seg.start + '</b></p>';
        }
        html += '<span class="line-badge" style="background:' + lineColor + ';">🚇 ' + seg.line + '</span>';
        html += '<p>' + seg.stations + ' ' + t('stations') + '</p>';
        html += '<p>' + seg.start + ' → ' + seg.end + '</p>';
        html += '<p>' + t('estTime') + ' <b>' + (seg.stations * 2.5).toFixed(0) + '</b> ' + t('min') + '</p>';
        html += '</div>';
    });
    
    html += '<div class="route-summary">';
    html += '<p style="font-weight:bold;">' + t('total') + '</p>';
    html += '<p>' + t('totalStations') + ' <b>' + route.totalStations + '</b> ' + t('stations') + '</p>';
    html += '<p>' + t('totalTransfers') + ' <b>' + route.totalTransfers + '</b></p>';
    html += '<p class="route-time">' + t('totalTime') + ' <b>' + route.totalTime.toFixed(0) + '</b> ' + t('min') + '</p>';
    html += '</div>';
    
    // 拥挤度
    const hour = new Date().getHours();
    let crowdText = '';
    if (hour >= 7 && hour < 9) crowdText = t('crowdMorning');
    else if (hour >= 17 && hour < 19) crowdText = t('crowdEvening');
    else if (hour >= 9 && hour < 17) crowdText = t('crowdNoon');
    else crowdText = t('crowdNight');
    html += '<p style="margin-top:10px;color:#FF9800;">' + crowdText + '</p>';
    
    // 方案切换
    if (currentRoutes.length > 1) {
        html += '<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;">';
        currentRoutes.forEach(function(r, i) {
            html += '<button onclick="switchRoute(' + i + ')" style="padding:8px 14px;background:#e3f2fd;border:2px solid #1976D2;border-radius:20px;font-size:13px;cursor:pointer;min-height:40px;">' + t('switchTo') + (i+1) + '</button>';
        });
        html += '</div>';
    }
    
    html += '<button onclick="quickFavorite()" style="margin-top:12px;padding:10px 20px;background:#4CAF50;color:white;border:none;border-radius:8px;font-size:14px;cursor:pointer;min-height:44px;">⭐ ' + t('navFav').replace('⭐ ', '') + '</button>';
    
    container.innerHTML = html;
    document.getElementById('resultCard').scrollIntoView({ behavior: 'smooth' });
}

function switchRoute(index) {
    displayRoute(currentRoutes[index], document.getElementById('resultContent'));
    vibrate(30);
    announceToScreenReader(t('switchTo') + (index+1));
}

function quickFavorite() {
    const name = prompt(t('favPrompt'));
    if (name) {
        saveFavorite(name, currentStart, currentEnd);
        alert(t('favSuccess') + name);
        announceToScreenReader(t('favAdded'));
        vibrate([50, 20, 50]);
    }
}

// ========== 重置 ==========
function resetQuery() {
    document.getElementById('startStation').value = '';
    document.getElementById('endStation').value = '';
    document.getElementById('resultContent').innerHTML = '<p class="placeholder">' + t('resultPlaceholder') + '</p>';
    currentRoutes = [];
    vibrate(30);
    announceToScreenReader(t('reset'));
}

// ========== 历史 & 收藏 ==========
function saveHistory(start, end) {
    let history = JSON.parse(localStorage.getItem('metro_history') || '[]');
    history.unshift({ start, end, time: new Date().toLocaleString(currentLang === 'ja' ? 'ja-JP' : currentLang === 'en' ? 'en-US' : 'zh-CN') });
    history = history.slice(0, 20);
    localStorage.setItem('metro_history', JSON.stringify(history));
}

function saveFavorite(name, start, end) {
    let favs = JSON.parse(localStorage.getItem('metro_favorites') || '[]');
    favs.push({ name, start, end });
    localStorage.setItem('metro_favorites', JSON.stringify(favs));
}

// ========== 底部导航 ==========
function showTab(tab) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const buttons = document.querySelectorAll('.nav-btn');
    if (tab === 'query') buttons[0].classList.add('active');
    if (tab === 'map') { buttons[1].classList.add('active'); showMap(); }
    if (tab === 'fav') { buttons[2].classList.add('active'); showFavList(); }
    if (tab === 'history') { buttons[3].classList.add('active'); showHistoryList(); }
    vibrate(30);
}

// ========== 线路图 ==========
function showMap() {
    const modal = document.getElementById('mapModal');
    const canvas = document.getElementById('mapCanvas');
    mapClickCount = 0;
    document.getElementById('mapTitle').textContent = t('mapTitle');
    document.getElementById('mapTip').textContent = t('mapTip');
    
    let html = '';
    for (let line in metroLines) {
        const data = metroLines[line];
        html += '<div class="map-line" style="border-left:5px solid ' + data.color + ';padding-left:10px;margin:12px 0;">';
        html += '<b style="color:' + data.color + ';">' + line + '</b><br>';
        data.stations.forEach(function(station) {
            const isTransfer = station in transferStations;
            html += '<span class="map-station' + (isTransfer ? ' transfer-station' : '') + '" ';
            html += 'style="border-color:' + data.color + ';' + (isTransfer ? 'background:#fff3e0;' : '') + '" ';
            html += 'onclick="setStationFromMap(\'' + station + '\')" tabindex="0" role="button" ';
            html += 'onkeydown="if(event.key===\'Enter\')setStationFromMap(\'' + station + '\')">';
            html += station + '</span>';
        });
        html += '</div>';
    }
    
    canvas.innerHTML = html;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

function closeMap() {
    document.getElementById('mapModal').style.display = 'none';
    document.getElementById('mapModal').setAttribute('aria-hidden', 'true');
    mapClickCount = 0;
}

function setStationFromMap(station) {
    mapClickCount++;
    if (mapClickCount === 1) {
        document.getElementById('startStation').value = station;
        announceToScreenReader(t('startSet') + station);
        vibrate(50);
    } else {
        document.getElementById('endStation').value = station;
        announceToScreenReader(t('endSet') + station);
        vibrate([50, 30, 50]);
        closeMap();
    }
}

// ========== 收藏列表 ==========
function showFavList() {
    const modal = document.getElementById('listModal');
    const title = document.getElementById('listModalTitle');
    const content = document.getElementById('listContent');
    const favs = JSON.parse(localStorage.getItem('metro_favorites') || '[]');
    
    title.textContent = '⭐ ' + t('navFav').replace('⭐ ', '');
    
    if (favs.length === 0) {
        content.innerHTML = '<p style="color:#999;text-align:center;padding:30px;">' + t('noFav') + '</p>';
    } else {
        let html = '';
        favs.forEach(function(fav) {
            html += '<div style="padding:12px;margin:8px 0;background:var(--card-bg);border-radius:8px;cursor:pointer;min-height:44px;box-shadow:0 1px 3px rgba(0,0,0,0.1);" ';
            html += 'onclick="useFavorite(\'' + fav.start + '\',\'' + fav.end + '\')" tabindex="0" role="button">';
            html += '<b>' + fav.name + '</b><br>' + fav.start + ' → ' + fav.end;
            html += '</div>';
        });
        content.innerHTML = html;
    }
    
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

function useFavorite(start, end) {
    document.getElementById('startStation').value = start;
    document.getElementById('endStation').value = end;
    closeList();
    queryRoute();
}

// ========== 历史列表 ==========
function showHistoryList() {
    const modal = document.getElementById('listModal');
    const title = document.getElementById('listModalTitle');
    const content = document.getElementById('listContent');
    const history = JSON.parse(localStorage.getItem('metro_history') || '[]');
    
    title.textContent = '🕐 ' + t('navHistory').replace('🕐 ', '');
    
    if (history.length === 0) {
        content.innerHTML = '<p style="color:#999;text-align:center;padding:30px;">' + t('noHistory') + '</p>';
    } else {
        let html = '';
        history.forEach(function(h) {
            html += '<div style="padding:12px;margin:8px 0;background:var(--card-bg);border-radius:8px;cursor:pointer;min-height:44px;box-shadow:0 1px 3px rgba(0,0,0,0.1);" ';
            html += 'onclick="useFavorite(\'' + h.start + '\',\'' + h.end + '\')" tabindex="0" role="button">';
            html += h.start + ' → ' + h.end + '<br><small style="color:#999;">' + h.time + '</small>';
            html += '</div>';
        });
        html += '<button onclick="clearHistory()" style="margin-top:10px;padding:10px;background:#f44336;color:white;border:none;border-radius:8px;width:100%;font-size:14px;cursor:pointer;min-height:44px;">' + t('clearHistory') + '</button>';
        content.innerHTML = html;
    }
    
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
}

function clearHistory() {
    if (confirm(t('clearConfirm'))) {
        localStorage.removeItem('metro_history');
        closeList();
        announceToScreenReader(t('historyCleared'));
        vibrate([50, 20, 50]);
    }
}

function closeList() {
    document.getElementById('listModal').style.display = 'none';
    document.getElementById('listModal').setAttribute('aria-hidden', 'true');
}