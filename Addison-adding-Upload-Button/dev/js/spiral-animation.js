var shapes = "path",
        tl = gsap.timeline({repeat:1, yoyo:false});

tl.fromTo(shapes, {drawSVG:"true"}, {duration: 1, drawSVG:"50% 50%", stagger: 0.1})
  .fromTo(shapes, {drawSVG:"0%"}, {duration: 0.1, drawSVG:"10%", immediateRender:false}, "+=0.1")
  .to(shapes, {duration: 1, drawSVG:"90% 100%", stagger: 0.5})
  .to(shapes, {duration: 1, scale:0.5, drawSVG:"100%", stroke:"white", strokeWidth:6, transformOrigin:"50% 50%"})
  .to(shapes, {duration: 0.5, scale:1.5, opacity:0, stagger: 0.2})

  
/* --- controls --- */
//GSDevTools.create({minimal: true});
