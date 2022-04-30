

gsap.from(".gs", {
    scrollTrigger:{
        trigger: "#one",
        scrub: 3,
        start: "22% 40%",
        end: "60% 60%",
        // markers: true,
    },
    duration: 15,
    opacity:0,
    y: 200
  });


  gsap.from(".gs1", {
    scrollTrigger:{
        trigger: "#three",
        scrub: 3,
        start: "20% 50%",
        end: "40% 60%",
        // markers: true,
    },
    duration: 5,
    opacity: 0,
    y: 20
  });


  gsap.from(".gs2", {
    scrollTrigger:{
        trigger: "#four",
        scrub: 3,
        start: "-15% 30%",
        end: "50% 60%",
        // markers: true,
    },
    duration: 15,
    opacity:0,
    y: 200
  });

  gsap.from(".gs3", {
    scrollTrigger:{
        trigger: "#five",
        scrub: 3,
        start: "-15% 30%",
        end: "50% 60%",
        // markers: true,
    },
    duration: 15,
    opacity:0,
    y: 200
  });