let tl = gsap.timeline();

tl.from(".nav h1",{
    y:-30,
    opacity : 0,
    duration : 1,
    delay :0.5
})
tl.from(".nav h2",{
    y:-30,
    opacity : 0,
    duration : 1,
    delay :0.5,
    stagger : 0.4
})

tl.from("h1",{
    y:20,
    duration:1,
    scale:0.4,
    opacity : 0
})
