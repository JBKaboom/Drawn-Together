function refreshContent() { location.reload(); }
async function loadLogs() { const res = await fetch('logs.md'); const text = await res.text(); document.getElementById('devLogs').innerText = text; }
loadLogs(); setInterval(loadLogs, 1800000);