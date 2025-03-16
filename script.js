function init(){
    gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  
  }
  
  init();
  
  let tl1=gsap.timeline();
  
  tl1.from("#front h1",{
    y:20,
    opacity:0,
    stagger:0.2,
  })
  tl1.from("#page1 #ab h3",{
    y:20,
    opacity:0,
    stagger:0.2
  })
  tl1.from("#page2 video",{
    opacity:1,
    y:20,
  })
  
  let t3 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page1 #front",
      scroller:"#main",
      start:"top 20%",
      end:"top 0%",
      scrub:2
  }
  });
  
  t3.to("#front #t2",{
    x:100,
  },"anim")
  t3.to("#front #t1",{
    x:"-100"
  },"anim")
  t3.to("#front #t3",{
    x:"-100"
  },"anim")
  
  
  let tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page1 #ab",
      scroller:"#main",
      start:"top 20%",
      end:"top 0%",
      scrub:2
  }
  });
  tl2.to("#page2 video",{
    width:"90%"
  })


  var t1 = gsap.timeline({scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"38% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true,
    pinSpacing:false,
}});
t1
.to(".text",{
    top: "-7%",
},'a')
.to("#card-one",{
    top: "35%",
},'a')
.to("#card-two",{
    top: "130%"
},'a')
.to("#card-two",{
    top: "42%"
},'b')
.to("#card-one",{
    width: "65%",
    height: "65vh"
},'b')
.to("#card-three",{
    top: "130%"
}, 'b')
.to("#card-three",{
    top: "50%"
}, 'c')
.to("#card-two",{
    width: "70%",
    height: "70vh"
},'c')