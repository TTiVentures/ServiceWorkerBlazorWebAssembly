window.onLoadvideoPage = () => {
    let videoTag = document.getElementById("videoTag");
    let videoSource = document.getElementById("VideoSource");
    videoSource.src = "video/big-buck-bunny_trailer.webm?t=".concat(Date.now());
    videoTag.load();
    videoTag.play();
};
