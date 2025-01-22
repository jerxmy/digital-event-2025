gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2",
    snap: 3,
    start: "top 0px",
    end: "+=30000px",
    pin: true,
    scrub: 4,
    snap: {
      snapTo: "labels", // S'aligne aux labels de la timeline
      duration: 1, // Durée de l'animation du snap
      ease: "power1.inOut", // Animation douce
    },
    markers: true,
    toggleActions: "play none reverse reset",
  },
});

tl.to("#vinyl-1", {
  y: "400px",
  scale: "2",
  rotationX: 60,
  duration: 1,
})
  .to("#vinyl-2", {
    y: "400px",
    scale: "2",
    rotationX: 60,
    duration: 1,
  })
  .to("#vinyl-3", {
    y: "400px",
    scale: "2",
    rotationX: 60,
    duration: 1,
  })
  .to("#vinyl-4", {
    y: "400px",
    scale: "2",
    rotationX: 60,
    duration: 1,
  });
