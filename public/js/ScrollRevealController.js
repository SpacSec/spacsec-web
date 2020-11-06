
ScrollReveal().reveal('section',{ delay: 375, reset: false });
const revealCards = {
    easing: 'ease-in',
    delay: 375,
    reset: false,
    interval: 100
}
const reveal = {
    easing: 'ease-in',
    delay: 375,
    reset: false,
    interval: 200
}
var slideUp = {
    distance: '5%',
    delay: 375,
    duration: 500,
    origin: 'top',
    // opacity: 0,
    reset: false,
};
ScrollReveal().reveal('.home-header, header', slideUp);
ScrollReveal().reveal('.tracks, .home-about', reveal);
ScrollReveal().reveal('.card, .member', revealCards);
ScrollReveal().reveal('.timeline-row', reveal);
ScrollReveal().reveal('.timeline-point, .roadmap-path',reveal);
    // ScrollReveal().reveal('.timeline-path', {
    // delay: 2000, reset: false  });