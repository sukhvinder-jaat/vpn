gsap.from("#show li,#btns li, .logo", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.5,
});
gsap.from(".heroPara #heroParaAnimation", {
  x: -50,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.5,
});
gsap.from("#heroImage #imageHero", {
  opacity: 0,
  x: 100,
  delay: 0.5,
  duration: 0.5,
});
gsap.from(".section_1_box #animationBox , .section_1_box", {
  x: -400,
  y: 10,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".section_1_box",
    scroller: "body",
    // // markers: true,
    start: "top 70%",
    end: "top 30%",
    scrub: true,
  },
});
// we provide
gsap.from("#provideContainer #provideImage", {
  x: -400,
  y: 10,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".section_1_box",
    scroller: "body",
    // // markers: true,
    start: "top 40%",
    end: "top 10%",
    scrub: true,
  },
});
gsap.from("#provideContainer #provideData #provideText", {
  x: 0,
  y: 50,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".section_1_box",
    scroller: "body",
    // // markers: true,
    start: "top 20%",
    end: "top 1%",
    scrub: true,
  },
});
// plan section
gsap.from("#plan #planeBox1,#plan #planeBox2,#plan #planeBox3", {
  x: -500,
  y: 50,
  rotate: 30,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#plan",
    scroller: "body",
    // markers: true,
    start: "top 40%",
    end: "top 1%",
    scrub: true,
  },
});
gsap.from("#plan .planeHeading", {
  y: 10,
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: "#plan",
    scroller: "body",
    // markers: true,
    start: "top 40%",
    end: "top 1%",
    scrub: true,
  },
});
