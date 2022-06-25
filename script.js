//change names from link var

let params = new URL(document.location).searchParams;

let name = params.get("name");
document.getElementById("h1").innerHTML = name;

//TEXT morphing on spoiler
const morphTime = 1;
const cooldownTime = 0.8;
let texts1;
var r = document.querySelector(":root");

console.log('"' + name + '"');
if (name == null) {
  texts1 = ["دعوة خاصة", "٣ يوليو", "المس لفتح الدعوة"];

  r.style.setProperty("--n1", "'دعوة خاصة'");
  r.style.setProperty("--n2", "'يوم الأحد 3 يوليو'");
  r.style.setProperty("--n3", "'المس لفتح الدعوة'");

  // document.getElementById("changeInnerHTML").innerHTML = '';
  document.getElementById("smlfont").style = "font-size: larger; ";
} else {
  texts1 = ["دعوة إلى", name, "المس لفتح الدعوة"];

  r.style.setProperty("--n1", "'دعوة خاصة إلى'");
  r.style.setProperty("--n2", '"' + name + '"');
  r.style.setProperty("--n3", "'المس لفتح الدعوة'");
}

const texts = texts1;

const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2"),
};

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

//Toast TOASTY notfication
var option = {
  animation: true,
  delay: 5000,
};

function Toasty() {
  var toastHTMLElement = document.getElementById("EpicToast");

  var toastElement = new bootstrap.Toast(toastHTMLElement, option);

  toastElement.show();
}

//Scroll go down
document
  .getElementById("scrollDown")
  .addEventListener("click", scrollFunction1);

function scrollFunction1() {
  let e = document.getElementById("el1");
  e.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

// Loading loader

// window.addEventListener("load", function () {
//   document.querySelector(".loader-wrapper").classList.add("fadeOut");

// });
var audio = document.getElementById("audio_playo24");
const nmuteic = document.getElementById("nmuteic");
const muteic = document.getElementById("muteic");
var myAudio = document.getElementById("audio_playo24");

// SPOILER
document.body.addEventListener("click", spoiler);

let spoilerCounter = 0;
function spoiler() {
  spoilerCounter++;
  if (spoilerCounter === 1) {
    let rmvMe_circles = document.getElementById("rmvMe_circles");
    rmvMe_circles.classList.remove();
    document.getElementById("getMe_element1").classList.add("element1");
    document.getElementById("getMe_element2").classList.add("element2");
    document.getElementsByClassName("loader-wrapper");
    document.getElementById("spoilerDiv").remove();
    document.getElementById("getMe_bsmllah").classList.add("bsmllah");

    if (audio.muted) {
      nmuteic.style.display = "none";
      muteic.style.display = "block";
    } else {
      nmuteic.style.display = "block";
      muteic.style.display = "none";
    }
    audio.play();
    // document.getElementById("loader-wrapper").remove();

    // document.getElementById("getMe_w3-animate-fading").classList.add('w3-animate-fading')
  }
}

// toast popup
function launch_toast() {
  var x = document.getElementById("toast");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 5000);
}

// Copy to clipboard

document.getElementById("copyBtn").addEventListener("click", function () {
  let copyText = document.getElementById("textValueCopy");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
});
var cm = false;
function toggleMute() {

  cm =!cm
  console.log("Sound is " +cm)
  if (audio.muted) {
    nmuteic.style.display = "block";
    muteic.style.display = "none";
  } else {
    nmuteic.style.display = "none";
    muteic.style.display = "block";
  }
  myAudio.muted = !myAudio.muted;
}

window.addEventListener("focus", (event) => {
  if (myAudio.muted && cm > 0) {
    myAudio.muted = !myAudio.muted;
    if (audio.muted) {
      nmuteic.style.display = "none";
      muteic.style.display = "block";
    } else {
      nmuteic.style.display = "block";
      muteic.style.display = "none";
    }
  }
});
window.addEventListener("blur", (event) => {
  if (!myAudio.muted && cm > 0) {
    myAudio.muted = !myAudio.muted;
    if (audio.muted) {
      nmuteic.style.display = "none";
      muteic.style.display = "block";
    } else {
      nmuteic.style.display = "block";
      muteic.style.display = "none";
    }
  }
});
