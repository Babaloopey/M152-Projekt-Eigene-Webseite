let layers;
window.addEventListener('scroll', () => {
  if (!layers) {
    layers = document.querySelectorAll(".layer");
  }

  const yOffset = window.pageYOffset;
  layers.forEach((layer, index) => {
    const speed = layer.getAttribute('data-speed');
    layer.style.transform = `translateY(${yOffset * speed}px)`;
  });
});