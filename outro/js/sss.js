document.addEventListener('DOMContentLoaded', function() {
    const allowedDomain = 'seu-dominio.com';
    if (window.location.hostname !== allowedDomain) {
        document.body.innerHTML = '<h1>Acesso não autorizado</h1>';
    }
});
