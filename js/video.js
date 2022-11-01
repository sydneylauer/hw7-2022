var video;
video = document.querySelector("#player1");

//Page load - Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log('Good job opening the window')
	video.autoplay = false
	video.loop = false
	console.log("auto play is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)
});

// Play Button - Play the video and update the volume information.  
document.querySelector("#play").addEventListener("click", function(){
	console.log('Play video')
	video.play()
	volume = document.querySelector("#slider").value
	document.querySelector("#volume").innerHTML = volume + "%" 
})

// Pause Button - Pause the video.
document.querySelector("#pause").addEventListener("click", function(){
	console.log('Pause video')
	video.pause()
})

// Slow Down - Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
document.querySelector("#slower").addEventListener("click", function(){
	console.log('Slow down video')
	video.playbackRate *= 0.9
	console.log("New speed: " + video.playbackRate)
})

// Speed Up - Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function(){
	console.log('Speed up video')
	video.playbackRate *= 1/0.9
	console.log("New speed: " + video.playbackRate)
})

// Skip Ahead - Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function(){
	console.log('Skip ahead')
	if (video.currentTime + 10 >= 67.403333){
		video.currentTime = 0
	} else{
		video.currentTime += 10
	}
	console.log("Current time: " + video.currentTime)
})

// Mute - Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == true){
		console.log("Unmute")
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	} else {
		console.log("Mute")
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
})

// Volume Slider - Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("input", function(){
	volume = document.querySelector("#slider").value
	video.volume = volume * (0.01)
	console.log("The current volume is: " + volume/100)
	document.querySelector("#volume").innerHTML = volume + "%" 
})

// Styled - Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function(){
	video.className = "oldSchool" 
})

// Original - Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function(){
	video.className = "video"
})

