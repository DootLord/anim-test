var anim = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'canvas',
  loop: true,
  autoplay: true,
  path: "intro.json",
  rendererSettings: {
    preserveAspectRatio: 'none'
  }
});

// anim.addEventListener("data_ready", complete);

// //set the attribute manually after the svg is loaded.
// function complete() {
//   $('#sec svg').attr('preserveAspectRatio', 'xMidYMax slice');
// }