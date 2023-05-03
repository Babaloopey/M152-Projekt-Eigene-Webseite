let layers;
window.addEventListener('scroll', () => {
 if(!layers){
    layers = document.querySelectorAll(".layer");
 }

  const yOffset = window.pageYOffset;
  console.log(layers);
  layers.forEach((layer, index) => {
    const speed = layer.getAttribute('data-speed');
    console.log(speed);
    layer.style.transform = `translateY(${yOffset * speed}px)`;
  });
});