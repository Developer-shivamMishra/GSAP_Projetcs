let intialPath = `M 10 100 Q 250 100 990 100`
let finallPath = `M 10 100 Q 250 100 990 100`

let string = document.querySelector(".string");
string.addEventListener("mousemove",(dets)=>{
    Path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    
    gsap.to("svg path",{
        attr:{d : Path},
        duration:0.2
    })
})

string.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:finallPath},
        ease: "elastic.out(1,0.3)",
        duration:0.8
    })
})