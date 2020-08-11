
//console.log("drawsvg-working");

//register plugin
gsap.registerPlugin(DrawSVGPlugin);

//$("#spiral").on("click", uploadAnimationTimeLine.play());

//define the timeline
var uploadAnimationTimeLine = gsap.timeline({
    paused: true
});

//draw svg timeline
uploadAnimationTimeLine.addLabel("spiralFillsIn")
                        .from("#spiral",{duration:5, drawSVG:"0%"}, "playsvg")
                        .to("#check", {opacity:1}, "playsvg")
                        .addPause()
                        .addLabel("fancyBoxUploadCompletePopsUp")
                        .to("button", {duration: 1, opacity:1}, "playUpload");

//$("#spiral-animation").on("click", uploadAnimationTimeLine.play());


//create the variable to make the click work
// var uploadIsPlaying = false;

//play the draw svg timeline

// function playUploadAnimation(){
// if (uploadIsPlaying === false) {

//     uploadAnimationTimeLine.play();

// } else{

//     uploadIsPlaying = false

// }
// }

//$("#spiral").on("click", playUploadAnimation);

$("spiral-animation").click(function(){
    //if an animation is currently running reverse it.
    if(uploadAnimationTimeLine) {
        uploadAnimationTimeLine.play();
    }
    
    //set the currentAnimation to whatever this button's assigned animation is
    uploadAnimationTimeLine = this.animation;
    //play the animation
    this.animation.play(0)
  })