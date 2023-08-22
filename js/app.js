const sliderWrap = document.querySelector(".article01_slider")
const sliderdiv = sliderWrap.querySelector(".article01_slider_container")
const slider = sliderWrap.querySelectorAll(".item")
const slider_btn_prev = sliderWrap.querySelector(".prev")
const slider_btn_next = sliderWrap.querySelector(".next")

let courrentIndex = 0
let sliderCount = slider.length

// sliderWrap.style.backgroundColor = "red";
// sliderdiv.style.backgroundColor = "blue";
slider.style.background = "green";

console.log(slider)