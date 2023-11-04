gsap.from("#show li,#btns li, .logo", {
  // y: 50,
  opacity: 0,
  // duration: 0.5,
  delay: 0.5,
  stagger: 0.5,
  duration: 0.5,
  // ease: "bounce(0.5)",
  // ease: "myWiggle",
  y: 100,
  x: 100,
  // wiggles: 10,
  // type: "anticipate",
});
// hero
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
gsap.to("#heroBg #heroAll .heroPara ", {
  stagger: 0.5,
  opacity: 0,
  xPercent: -100,
  yPercent: 300,
  rotate: 20,
  scrollTrigger: {
    trigger: ".section_1_box",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 30%",
    scrub: true,
  },
});
gsap.to("#heroBg #heroAll #heroImage ", {
  stagger: 0.5,
  opacity: 0,
  xPercent: 100,
  yPercent: 300,
  rotate: -20,
  scrollTrigger: {
    trigger: ".section_1_box",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 30%",
    scrub: true,
  },
});
gsap.from(".section_1_box #animationBox , .section_1_box", {
  x: -400,
  y: 10,
  rotate: 20,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".section_1_box",
    scroller: "body",
    // markers: true,
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
  rotate: 20,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".section_1_box",
    scroller: "body",
    // markers: true,
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
  rotate: 20,
  scrollTrigger: {
    trigger: ".section_1_box",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "top 1%",
    scrub: true,
  },
});
// plan section
gsap.from("#plan #planeBox1,#plan #planeBox2,#plan #planeBox3", {
  x: -500,
  y: 50,
  rotate: 50,
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
  rotate: 20,
  scrollTrigger: {
    trigger: "#plan",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "top 1%",
    scrub: true,
  },
});
