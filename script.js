var tl = gsap.timeline()
tl.to(".heading",{
    transform:"translateX(-120%)",
    scrollTrigger:{
        triggier:".page",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        scrub:5,
        // pin: true
    }
})

tl.from("#download h2",{
    transform:"translateX(-300px)",
    scrollTrigger:{
        triggier:"#download h2",
        scroller:"body",
        scrub:5,
        pin: true
    }
})
tl.from("#download a",{
    transform:"translateY(100px)",
    scrollTrigger:{
        triggier:"#download h2",
        scroller:"body",
        scrub:5,
        pin: true
    }
})
tl.to(".wwch h3",{
        transform:"translateX(-380%)",
        scrollTrigger:{
            triggier:".wwch",
            scroller:"body",
            start:"bottom 130%",
            end:"bottom 1px",
            scrub:1,
            pin:true
        }
    })