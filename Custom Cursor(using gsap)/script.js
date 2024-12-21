let main = document.querySelector(".main")
let crsr = document.querySelector(".cursor")
let img = document.querySelector(".img")
main.addEventListener("mousemove",(dets)=>{
    gsap.to(crsr , {
        x: dets.x,
        y: dets.y,
        duration : 0.7,
        ease: "back.out(1.7)"
    })
})

img.addEventListener("mouseenter",(dets)=>{
    crsr.innerHTML = "View More"
      gsap.to(crsr,{
    scale:4,
  
   })
})
img.addEventListener("mouseleave",(dets)=>{
    crsr.innerHTML = ""
   gsap.to(crsr,{
    scale:1,
  
   })
})