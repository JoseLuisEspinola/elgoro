const videoModal = document.getElementById("video-modal");
const videoModalPlayer = videoModal.querySelector(".video-modal-player");
const videoModalClose = videoModal.querySelector(".video-modal-close");

document.querySelectorAll(".video-preview").forEach((preview) => {
    preview.addEventListener("click", () => {
        videoModalPlayer.src = preview.dataset.videoSrc;
        videoModalPlayer.setAttribute("aria-label", preview.dataset.videoLabel);
        videoModal.showModal();
    });
});

videoModalClose.addEventListener("click", () => {
    videoModal.close();
});

videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
        videoModal.close();
    }
});

videoModal.addEventListener("close", () => {
    videoModalPlayer.pause();
    videoModalPlayer.removeAttribute("src");
    videoModalPlayer.load();
});
