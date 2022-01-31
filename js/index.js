var text =
  "Accessing Porter Services \n" +
  "Attempting to connect... \n" +
  "User: epic.gamer420 \n" +
  "Password: ************ \n";
var grantedText = "ACCESS GRANTED";
var i = 0;
var typer = setInterval(() => {
  if (i !== text.length) {
    i++;
    document.getElementById("console-text").innerText = text.substring(0, i);
  } else {
    clearInterval(typer);
    playTextFlash();
  }
}, 50);

function playTextFlash() {
  var i = 0;
  var flasher = setInterval(() => {
    if (i !== 10) {
      i++;
      if (i % 2 === 0) {
        document.getElementById("console-text").innerText = text;
      } else {
        document.getElementById("console-text").innerText = text + grantedText;
      }
    } else {
      document.getElementById("console-text").style.display = "none";
      clearInterval(flasher);
      playAnim();
    }
  }, 100);
}

function playAnim() {
  var anim = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'canvas',
    loop: false,
    autoplay: true,
    path: "./intro.json",
    rendererSettings: {
      preserveAspectRatio: 'none'
    }
  });

  anim.addEventListener("complete", handlePostAnimation);

  function handlePostAnimation() {
    var bm = document.getElementById("bm");
    bm.style.display = "none";

    // Fadein Title
    setTimeout(() => {
      var title = document.getElementById("header-title");
      title.style.display = "block";
      title.classList.add("animate__fadeInDown");
      setTimeout(() => {
        var subtitle = document.getElementById("header-subtitle");
        subtitle.style.display = "block";
        subtitle.classList.add("animate__fadeInDown");
        setTimeout(() => {
          var img = document.getElementById("header-img");
          img.style.display = "block";
          img.classList.add("animate__fadeInDown");
        }, 500)
      }, 500)
    }, 500)
  }
}

