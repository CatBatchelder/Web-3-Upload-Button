
console.log("drawsvg-working");

$("#spiral").on("click", playUploadAnimation);

//create the variable to make the click work
var uploadIsPlaying = false;

//register plugin
gsap.registerPlugin(DrawSVGPlugin);

//define the timeline
var uploadAnimationTimeLine = gsap.timeline({
    paused: true
});

//draw svg timeline
uploadAnimationTimeLine.from("#spiral",{duration:5, drawSVG:"0%"});
                        .to("checkmark", {opacity:1});




//play the draw svg timeline
if (uploadIsPlaying === false) {

    uploadAnimationTimeLine.play();

} else{

    uploadIsPlaying = false

}