function init() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
init();

let tl1 = gsap.timeline();
tl1.from("#front h1", {
  y: 20,
  opacity: 0,
  stagger: 0.2,
});
tl1.from("#page1 #ab h3", {
  y: 20,
  opacity: 0,
  stagger: 0.2
});
tl1.from("#page2 video", {
  opacity: 1,
  y: 20,
});

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 #front",
    scroller: "#main",
    start: "top 20%",
    end: "top 0%",
    scrub: 2
  }
});
t3.to("#front #t2", { x: 100 }, "anim");
t3.to("#front #t1", { x: "-100" }, "anim");
t3.to("#front #t3", { x: "-100" }, "anim");

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 #ab",
    scroller: "#main",
    start: "top 20%",
    end: "top 0%",
    scrub: 2
  }
});
tl2.to("#page2 video", { width: "90%" });

var t1Anim = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top 10%",
    end: "bottom -3000",
    scrub: 2,
    pin: true,
    pinSpacing: true,
  }
});
t1Anim
  .to(".text", { top: "-7%" }, "a")
  .to("#card-one", { top: "35%" }, "a")
  .to("#card-two", { top: "130%" }, "a")
  .to("#card-two", { top: "42%" }, "b")
  .to("#card-one", { width: "65%", height: "65vh" }, "b")
  .to("#card-three", { top: "130%" }, "b")
  .to("#card-three", { top: "50%" }, "c")
  .to("#card-two", { width: "70%", height: "70vh" }, "c")
  .to(".text h1",{opacity:0},"-=0.2");

gsap.set(".page4-cards-container", { x: "100vw" });

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top top",
    end: "+=800%",  
    scrub: 2,
    pin: true,
    pinSpacing: true,
    anticipatePin: 1,
  }
});
tl4.to(".page4-cards-container", { x: "-240vw", duration: 3 });
tl4.to(".page4-heading",{opacity:0},"-=3")


document.getElementById("newsletter-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let message = document.getElementById("message");

  if (email.includes("@") && email.includes(".")) {
      message.style.color = "green";
      message.innerText = "Thank you for subscribing!";
  } else {
      message.style.color = "red";
      message.innerText = "Please enter a valid email!";
  }
});
