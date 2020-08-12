
console.log("drawsvg-working");

gsap.registerPlugin(DrawSVGPlugin);

var svgGuyTimeLine = gsap.timeline({
});

svgGuyTimeLine.from(".yellow-guy",{duration:5, drawSVG:"0%", opacity: 0});

ScrollTrigger.create({
    animation: svgGuyTimeLine,
    toggleActions: "restart complete none none",
    trigger: ".yellow-guy",
    start: "top 60%",
    //end: "bottom 40%",
    //markers: true, 
    id: "card",
    scrub: 1
});