

document.addEventListener('DOMContentLoaded', function() {
    const allowedDomain = 'novodestino.online';
    if (window.location.hostname !== allowedDomain) {
        document.body.innerHTML = '<h1>Acesso não autorizado</h1>';
        setTimeout(function() {
            top.location.href = 'plug-de-copia-de%20dados-invas.html';
        }, 2000); // Redireciona após 2 segundos (2000 milissegundos)
    }
});
