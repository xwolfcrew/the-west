const parallaxSection = document.querySelector("#section1");
const imageContainer = document.querySelector(".image-container");
const containerImage = document.querySelector("#parallaxImage");

gsap.registerPlugin(ScrollTrigger);

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-1",
    start: "top top",
    end: "=+3000",
    scrub: 1,
    pin: ".section-1-interior",
  },
});

tl1
  .to("#parallaxImage", {
    y: 0,
    ease: "none",
  })
  .from(
    ".section-1-interior h1",
    {
      y: 30,
      opacity: 0,
      ease: "none",
    },
    "<0.74",
  )
  .to(
    ".image-container",
    {
      width: "100vw",
      height: "100vh",
      ease: "none",
    },
    ">",
  )
  .to(
    ".section-1-interior h1",
    {
      y: -40,
      opacity: 0,
      ease: "power2.out",
    },
    ">-=0.5",
  );

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-update",
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
  },
});

tl2.to([".text-left h1", ".text-right h1"], {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  ease: "power3.inOut",
  stagger: 0.08,
});
