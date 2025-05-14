
function confiReloj() {
    const now = new Date();
    
    // Formatear hora
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const segundo = now.getSeconds().toString().padStart(2,0);
    document.getElementById('clock-text').textContent = `${hours}:${minutes}:${segundo}`;
    
    // Formatear fecha (ejemplo: "Lun 25 Dic")
    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long',
        year: 'numeric'
        // Para mostrar en español:
        // month: 'long' (mostraría "diciembre")
    };
    const dateString = now.toLocaleDateString('es-ES', options);
    document.getElementById('date-text').textContent = dateString;
}

setInterval(confiReloj, 1000);
confiReloj(); // Ejecutar inmediatamente