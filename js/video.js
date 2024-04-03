

var video = document.querySelector ("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false; 
	console.log("Auto play is set to "+ video.autoplay)
	console.log("loop is set to"+ video.loop)
	video.volume = document.querySelector ("#slider").value /100;

});


document.querySelector("#pause").addEventListener("click", function() {
video.pause ();
console.log ("pause video");
});
document.querySelector("#play").addEventListener("click", function() {
console.log("play video");
video.play ();
document.querySelector ("#volume").textContent = Math.round (video.volume * 100) + "%";

document.querySelector("#slower").addEventListener("click", function() {
video.playbackRate -= 0.10; 
console.log ("slow down");
});


document.querySelector("#play").addEventListener("click", function() {
	video.play()
	video.volume = (document.querySelector("#slider").value/100)
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"

	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate += .10
		console.log("go faster")

	document.querySelector("#skip").addEventListener("click", function() {
		video.currentTime += 0.1; 
		if (video.currentTime < video.duration) {
		video.currentTime = 0; 
			}
			console.log ("Skip Ahead");
			console.log("New Time " + video.currentTime);
});




