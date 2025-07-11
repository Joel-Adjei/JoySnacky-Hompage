let t1 = gsap.timeline({scrollTrigger :{
    trigger : ".Hero",
    start : "0% 95%",
    end : "70% 50%",
    srcub : true
}})

t1.to(".head",{
    top: "90%"
})