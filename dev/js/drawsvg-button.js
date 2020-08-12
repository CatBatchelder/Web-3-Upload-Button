
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
                        // .from("#arrow-line, #left-arrow, #right-arrow", {duration:1, opacity:0}, "playUpload")
                        .from("#spiral",{duration:5, drawSVG:"0%"}, "playsvg")
                        .from("#check", {duration:1, opacity:0}, "playUpload")
                        //.from(".done", {duration:1, rgb('107, 185, 25')}, "playUpload")
                        // .addPause()
                        // .addLabel("fancyBoxUploadCompletePopsUp")
                        //.to("button", {duration: 1, opacity:1, display:'block', autoAlpha: 1}, "playUpload");
                        //.to("button h2", {duration: 1, opacity:1, autoAlpha: 1}, "playUpload");
                        .to("#button h2", {duration: 1, display:'block'}, "playUpload")
                        .to("#spiral", {duration:1, stroke: "#32CD32"}, "playUpload")
                        .to("#circle", {duration:1, stroke: "#32CD32"}, "playUpload");

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

$("#spiral-animation").click(function(){
    //if an animation is currently running reverse it.
    if(uploadAnimationTimeLine) {
        uploadAnimationTimeLine.play();
    }else{
        uploadAnimationTimeLine.play();
    }
    
    //set the currentAnimation to whatever this button's assigned animation is
    uploadAnimationTimeLine = this.animation;
    //play the animation
    this.animation.play(0)
  })

  //$("#index-content #button").on("click", hideShowPopup);

  var arrowMovingTimeLine = gsap.timeline({
    paused: true
});

// gsap.set("right-arrow", {
//     transformOrigin: "center right"
// });

//draw svg timeline
arrowMovingTimeLine.to("#arrow",{transformOrigin:"center", duration:.5, rotation: 360}, "start")
                    



  $("#spiral-animation").on("mouseenter", function(){
    //console.log("mouse enter");
    //console.log(canYouSeeTheMenu + " menu visible");
    if(arrowMovingTimeLine){
        //console.log("burger to arrow");
        arrowMovingTimeLine.play();
    }else(
        arrowMovingTimeLine.reverse()
    )
})

$("#spiral-animation").on("mouseleave", function(){
    if(arrowMovingTimeLine){
        //console.log("arrow to burger");
        arrowMovingTimeLine.reverse();
        
    }
})