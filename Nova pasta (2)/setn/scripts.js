document.addEventListener("DOMContentLoaded", () => {
    // Carregar o vídeo de outro arquivo HTML e inseri-lo no contêiner
    fetch('video.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('video-container').innerHTML = data;
            addStickyVideoFunctionality();
        });

    function addStickyVideoFunctionality() {
        var scrollThreshold = 1000; // Altere este valor para a quantidade de pixels desejada

        var videoContainer = document.querySelector('.video-container');
        var video = document.querySelector('#sticky-video');
        var closeButton = document.querySelector('.close-sticky');

        var isVideoStickyDisabled = false;

        window.addEventListener('scroll', function() {
            if (!isVideoStickyDisabled) {
                var scrollTop = window.scrollY;
                if (scrollTop >= scrollThreshold) { // Define a posição em que o vídeo se torna sticky
                    videoContainer.classList.add('fixed-video');
                    video.classList.add('small-video');
                    closeButton.classList.remove('d-none');
                } else {
                    videoContainer.classList.remove('fixed-video');
                    video.classList.remove('small-video');
                    closeButton.classList.add('d-none');
                }
            }
        });

        closeButton.addEventListener('click', function() {
            isVideoStickyDisabled = true;
            videoContainer.classList.remove('fixed-video');
            video.classList.remove('small-video');
            closeButton.remove();
        });
    }
});
