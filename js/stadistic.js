// Inicializar estadísticas globales
let correctas = parseInt(localStorage.getItem("correctas")) || 0;
let incorrectas = parseInt(localStorage.getItem("incorrectas")) || 0;

function actualizarEstadisticas(acierto){
  if(acierto){
    correctas++;
  } else {
    incorrectas++;
  }
  // Guardar en localStorage para que sea global
  localStorage.setItem("correctas", correctas);
  localStorage.setItem("incorrectas", incorrectas);
  mostrarEstadisticas();
}

function mostrarEstadisticas(){
  const statsDiv = document.getElementById("stats");
  if(!statsDiv) return;
  const total = correctas + incorrectas;
  const porcentaje = total === 0 ? 0 : Math.round((correctas/total)*100);
  statsDiv.innerHTML = `
    <p>Aciertos: ${correctas}</p>
    <p>Errores: ${incorrectas}</p>
    <p>Porcentaje de aciertos: ${porcentaje}%</p>
  `;
}

// Función para resetear estadísticas (opcional)
function resetEstadisticas(){
  correctas = 0;
  incorrectas = 0;
  localStorage.setItem("correctas", correctas);
  localStorage.setItem("incorrectas", incorrectas);
  mostrarEstadisticas();
}
