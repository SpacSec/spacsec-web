const revealCards = {
  easing: "ease-in",
  delay: 10,
  reset: false,
  interval: 20,
};>
const reveal = {
  easing: "ease-in",
  delay: 200,
  reset: false,
  interval: 200,
};

const slideUp = {
  distance: "5%",
  delay: 200,
  duration: 500,
  origin: "top",
  // opacity: 0,
  reset: false,
};
ScrollReveal().reveal("section", reveal);
ScrollReveal().reveal(".home-header, header", slideUp);
ScrollReveal().reveal(".tracks, .home-about", reveal);
ScrollReveal().reveal(".card, .member,", revealCards);
ScrollReveal().reveal(".timeline-row,.img", reveal);
ScrollReveal().reveal(".timeline-point, .roadmap-path", reveal);
