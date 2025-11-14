// Este código se ejecutará una vez que el HTML y SVG.js estén cargados.

// 1. Obtener el elemento SVG existente por su ID ('mi_estrella')
// SVG.js 'envuelve' este elemento para facilitar su manipulación.
const estrella = SVG('#mi_estrella');

// 2. Obtener el elemento interno específico que queremos manipular ('estrella_path')
// Es el 'path' que forma la estrella.
const path = estrella.findOne('#estrella_path');

// Definimos los colores para alternar
const colorNaranja = '#FFA500';
const colorAzul = '#00BFFF';

// 3. Añadir interactividad: Evento de clic
path.on('click', function() {
  // Comprobar el color actual para alternar el estado
  const colorActual = path.attr('fill');

  if (colorActual === colorNaranja) { // Si es naranja...
    // Animar para cambiar a color azul
    path.animate(500).fill(colorAzul);
    console.log('Estrella cambiada a azul.');
  } else { // Si es azul...
    // Animar para volver a color naranja
    path.animate(500).fill(colorNaranja);
    console.log('Estrella cambiada a naranja.');
  }
});

console.log("Script 'app.js' cargado y listo para interactuar.");