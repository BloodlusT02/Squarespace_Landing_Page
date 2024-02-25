let tl = gsap.timeline();

tl.from("#nav img, #nav-part2, #nav-part3", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3
});

tl.from("#main h1", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3
});

tl.from("#main>img", {
    scale: 0,
    opacity: 0,
    stagger: 0.3
});

tl.from("#scroll-btn, #icons", {
    y: 50,
    opacity: 0,
    duration: 1,
});