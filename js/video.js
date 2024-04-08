var video = document.querySelector("#player1");
var volumeslider = document.querySelector("#slider");

document.querySelector("change", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
    console.log("Auto play is set to " + video.autoplay);
    console.log("loop is set to " + video.loop);
});

document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("pause video");
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("play video");
    video.play();
    document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate -= 0.10;
    console.log("slow down");
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate += 0.10;
    console.log("go faster");
});

document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    console.log("New Time " + video.currentTime);
});

document.querySelector("#slider").addEventListener("input", function(){
	console.log("sliderrr");
	video.volume=this.value/100;//slider
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});

document.querySelector("#mute").addEventListener("click", function() {
    if (!video.muted) {
        video.muted = true;
        document.getElementById('mute').innerHTML = 'Unmute';
    } else {
        video.muted = false;
        document.getElementById('mute').innerHTML = 'Mute';
    }
});

document.querySelector("#vintage").addEventListener("click", function() {
    var video = document.querySelector("video");
    video.classList.add("oldSchool");
    console.log("video is in old school mode");
});

document.querySelector("#orig").addEventListener("click", function() {
    var video = document.querySelector("video");
    video.classList.remove("oldSchool");
    console.log("The video not in oldSchool mode anymore");


});