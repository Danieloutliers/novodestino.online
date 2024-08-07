document.addEventListener('DOMContentLoaded', function() {
    const allowedDomain = 'fronteditor.dev';
    if (window.location.hostname !== allowedDomain) {
        document.body.innerHTML = '<h1>Acesso não autorizado</h1>';
    }
});
