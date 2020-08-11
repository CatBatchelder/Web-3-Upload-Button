gsap.registerPlugin(ScrollTrigger);

gsap.from("#artist-arrow", {duration:2, alpha:0, yPercent:-100,

    scrollTrigger:{
        trigger:"#artists",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "restart none none none"
        //markers:true,
        //id:"portfolio"
    }})

    var pictureTimelineG1 = gsap.timeline({});

    pictureTimelineG1.from("#g1-img",{duration:2, alpha:0, xPercent: -200}, "start")
                    .from("#g1-text",{duration:2, alpha:0}, "start");
    
    ScrollTrigger.create({
        animation: pictureTimelineG1,
        //markers: true,
        trigger: "#g1-img",
        toggleActions: "restart none none none",
        //id: "logos",
        start: "top 70%",
        end: "bottom 70%"
    })

    var pictureTimelineG2 = gsap.timeline({});

    pictureTimelineG2.from("#g2-img",{duration:2, alpha:0, xPercent: 200}, "start")
                    .from("#g2-text",{duration:2, alpha:0}, "start");
    
    ScrollTrigger.create({
        animation: pictureTimelineG2,
        //markers: true,
        trigger: "#g2-img",
        toggleActions: "restart none none none",
        //id: "logos",
        start: "top 70%",
        end: "bottom 70%"
    })


    var pictureTimelineG3 = gsap.timeline({});

    pictureTimelineG3.from("#g3-img",{duration:2, alpha:0, xPercent: -200}, "start")
                    .from("#g3-text",{duration:2, alpha:0}, "start");
    
    ScrollTrigger.create({
        animation: pictureTimelineG3,
        //markers: true,
        trigger: "#g3-img",
        toggleActions: "restart none none none",
        //id: "logos",
        start: "top 70%",
        end: "bottom 70%"
    })

