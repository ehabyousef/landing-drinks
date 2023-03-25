var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  speed: 1800,
  mousewheelControl: true,
  keyboard: {
    enabled: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  allowTouchMove: false,
});

let landing = document.getElementById("landing");

let current = document.querySelector(
  "#targrt > span.swiper-pagination-current"
);
// #swiper-wrapper-c107a1ede12710dc0d
let leaf1 = document.getElementById("img-4");
let leaf2 = document.getElementById("img-5");
let leaf3 = document.getElementById("img-6");
let leaf4 = document.getElementById("img-7");
let leaf5 = document.getElementById("img-8");
document.addEventListener("keyup", (e) => {
  if (e.key == "ArrowRight" && current.innerHTML == "2") {
    leaf1.style.right = "0%";
    leaf1.style.rotate = "45deg";
    leaf2.style.left = "-5%";
    leaf2.style.rotate = "180deg";
    leaf3.style.left = "-14%";
    leaf3.style.rotate = "-180deg";
    leaf4.style.top = "35%";
    leaf4.style.left = "45%";
    leaf5.style.right = "-5%";
    leaf5.style.rotate = "90deg";
    landing.classList.add("animation-1");
    console.log("first right");
  }
  if (e.key == "ArrowLeft" && current.innerHTML == "2") {
    leaf1.style.right = "0%";
    leaf1.style.rotate = "45deg";
    leaf2.style.left = "-5%";
    leaf2.style.rotate = "180deg";
    leaf3.style.left = "-14%";
    leaf3.style.rotate = "-180deg";
    leaf4.style.top = "35%";
    leaf4.style.left = "45%";
    leaf5.style.right = "-5%";
    leaf5.style.rotate = "90deg";
    landing.classList.remove("animation-2");
    landing.classList.add("animation-1");
    console.log("second left");
  }
  if (e.key == "ArrowRight" && current.innerHTML == "3") {
    leaf1.style.right = "-3%";
    leaf1.style.rotate = "90deg";
    leaf2.style.rotate = "270deg";
    leaf3.style.rotate = "-270deg";
    leaf4.style.top = "30%";
    leaf4.style.left = "50%";
    leaf5.style.right = "-7%";
    leaf5.style.rotate = "180deg";
    landing.classList.add("animation-2");
    console.log("second right");
  }
  if (e.key == "ArrowLeft" && current.innerHTML == "3") {
    leaf1.style.right = "-3%";
    leaf1.style.rotate = "90deg";
    leaf2.style.rotate = "270deg";
    leaf3.style.rotate = "-270deg";
    leaf4.style.top = "30%";
    leaf4.style.left = "50%";
    leaf5.style.right = "-7%";
    leaf5.style.rotate = "180deg";
    console.log("third left");
    landing.classList.add("animation-2");
  }
  if (e.key == "ArrowRight" && current.innerHTML == "1") {
    leaf1.style.right = "0%";
    leaf1.style.rotate = "90deg";
    leaf2.style.left = "-5%";
    leaf2.style.rotate = "360deg";
    leaf3.style.left = "-14%";
    leaf3.style.rotate = "-360deg";
    leaf4.style.top = "30%";
    leaf4.style.left = "35%";
    leaf5.style.right = "-5%";
    leaf5.style.rotate = "360deg";
    landing.classList.remove("animation-2");
    landing.classList.remove("animation-1");
  }
  if (e.key == "ArrowLeft" && current.innerHTML == "1") {
    leaf1.style.right = "0%";
    leaf1.style.rotate = "0deg";
    leaf2.style.left = "5%";
    leaf2.style.rotate = "0deg";
    leaf3.style.left = "-10%";
    leaf3.style.rotate = "0deg";
    leaf4.style.top = "30%";
    leaf4.style.left = "35%";
    leaf5.style.right = "5%";
    leaf5.style.rotate = "0deg";
    landing.classList.remove("animation-1");
    console.log("first left");
  }
});
