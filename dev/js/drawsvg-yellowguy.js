
console.log("drawsvg-working");

gsap.registerPlugin(DrawSVGPlugin);

gsap.from(".yellow-guy",{duration:5, drawSVG:"0%", opacity: 0});

// ScrollTrigger.create({
//     animation: gsap,
//     toggleActions: "restart none none none",
//     trigger: ".yellow-guy",
//     start: "top 60%",
//     end: "bottom 60%",
//     markers: true,
//     id: "card",
//     scrub: 1
// });