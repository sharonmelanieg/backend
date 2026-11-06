
// ============================================
// CHALLENGE: “Mini Dashboard”
// ============================================
// Simulá un sistema que cargue *dos recursos* en orden usando async/await:
// loadUser() → devuelve "👤 Usuario conectado"
// loadNotifications() → devuelve ["🔔 Notificación 1", "🔔 Notificación 2"]
//
// Mostrá los datos en consola en orden, con un mensaje final "✅ Dashboard listo!"
// (Pista: usá `await` para esperar cada promesa antes de continuar.)

function loadUser() {
        return new Promise((resolve) => {
        setTimeout(() => resolve("👤 Usuario conectado"), 1000);
    });
}
function loadNotifications() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["🔔 Notificación 1", "🔔 Notificación 2"]), 1000);
    });
    
}
async function miniDashboard() {
    const cargar= await loadUser();
    console.log(cargar);
    const notificaciones=await loadNotifications();
    console.log(notificaciones)
    console.log("✅ Dashboard listo!");
}


miniDashboard()
