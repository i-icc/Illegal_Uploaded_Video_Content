let video = document.getElementsByClassName("video-stream")[0];
if (video != null) {
    video.classList.remove("html5-main-video");
}

// let videoFrame = document.getElementById("movie_player");
let videoFrame = document.getElementsByClassName("html5-video-container")[0];
if (videoFrame != null) {
    let img_elm = document.createElement("img");
    img_elm.src = "https://user-images.githubusercontent.com/52018660/202184627-e3718e58-26ec-4d25-b271-a1d7955ad50b.png";
    img_elm.id = "rufi";
    videoFrame.appendChild(img_elm);
}
