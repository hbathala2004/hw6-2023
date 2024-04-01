

var video = document.querySelector ("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.load ();
	video.pause ();
	video.loop = false; 
	video.volume = document.querySelector ("#slider").value /100;

});


document.querySelector("#pause").addEventListener("click", function() {
video.pause ();
console.log ("Pause video");
});
document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
console.log("Play Video");
video.play ();
document.querySelector ("#volume").textContent = Math.round (video.volume * 100) + "%";

document.querySelector("#slower").addEventListener("click", function() {
video.playbackRate -= 0.1; 
console.log ("Slow Down");
});



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

