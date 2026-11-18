const videosFondo = Array.from(document.querySelectorAll('.video-fondo'));

if (videosFondo.length) {
    let indiceActivo = 0;

    function reproducir(video) {
        const resultado = video.play();

        if (resultado && typeof resultado.catch === 'function') {
            resultado.catch(function (error) {
                console.error(`No se pudo reproducir el video de fondo: ${video.currentSrc}`, error);
            });
        }
    }

    videosFondo.forEach(function (video, indice) {
        video.addEventListener('error', function () {
            console.error(`No se pudo cargar el video de fondo: ${video.currentSrc || video.src}`);
        });

        video.addEventListener('ended', function () {
            if (indice !== indiceActivo) return;

            const siguienteIndice = (indiceActivo + 1) % videosFondo.length;
            const videoSiguiente = videosFondo[siguienteIndice];

            videoSiguiente.currentTime = 0;
            videoSiguiente.classList.add('video-fondo--activo');
            video.classList.remove('video-fondo--activo');
            indiceActivo = siguienteIndice;
            reproducir(videoSiguiente);
        });
    });

    reproducir(videosFondo[indiceActivo]);
}
