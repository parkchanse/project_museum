// article02 슬라이드 영역

let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(e) {
    showSlides(slideIndex += e)
    console.log(plusSlides)
}

function currentSlide(e) {
    showSlides(slideIndex = e)
    console.log(currentSlide)
}

function showSlides(e) {
    let i = 0
    let slides = document.getElementsByClassName("item")
    let dots = document.getElementsByClassName("slider_nav_btn")

    if(e > slides.length) {
        slideIndex = 1
    }
    if(e < 1) {
        slideIndex = slides.length
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active"
}


// footer 영역

const footer_wrap = document.querySelector(".info_wrap")
const link_site = document.querySelector(".link_site")

function footerclick() {
    link_site.classList.add('show')
    document.querySelector(".show").style.display = 'block'
}

function footerout() {
    link_site.classList.add('down')
    document.querySelector('.down').style.display = 'none'
}

footer_wrap.addEventListener("mouseover", footerclick)
footer_wrap.addEventListener("mouseout", footerout)











