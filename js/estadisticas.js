// Nombre del juego (definir antes de usar funciones)
let gameName = ''; // ej: 'presente', 'imperfecto', 'mega'

// Guardar aciertos por pregunta
function saveStats(correct){
    if(!gameName) return; // prevenir error si no se define gameName
    const key = 'stats_'+gameName;
    let stats = JSON.parse(localStorage.getItem(key)) || {correct:0,total:0};
    stats.total++;
    if(correct) stats.correct++;
    localStorage.setItem(key, JSON.stringify(stats));
}

// Obtener estadísticas de un juego
function getStats(name){
    const key = 'stats_'+name;
    return JSON.parse(localStorage.getItem(key)) || {correct:0,total:0};
}

// Obtener estadísticas globales
function getGlobalStats(){
    const games = ['presente','imperfecto','futuro','aoristo','perfecto','mega'];
    let total = 0, correct = 0;
    games.forEach(g=>{
        let stats = getStats(g);
        total += stats.total;
        correct += stats.correct;
    });
    return {correct,total};
}

// Mostrar estadísticas en cualquier elemento
function showStats(elementId, name){
    const el = document.getElementById(elementId);
    if(!el) return;
    const s = getStats(name);
    let pct = s.total>0 ? Math.round(s.correct/s.total*100) : 0;
    el.textContent = `Aciertos: ${s.correct} de ${s.total} (${pct}%)`;
}

// Mostrar estadísticas globales
function showGlobalStats(elementId){
    const el = document.getElementById(elementId);
    if(!el) return;
    const g = getGlobalStats();
    let pct = g.total>0 ? Math.round(g.correct/g.total*100) : 0;
    el.textContent = `Global: ${g.correct} de ${g.total} (${pct}%)`;
}
