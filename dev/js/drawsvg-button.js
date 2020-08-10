
console.log("drawsvg-working");

gsap.registerPlugin(DrawSVGPlugin);

gsap.from("#spiral",{duration:5, drawSVG:"0%"});
    .to("checkmark", {opacity:1});