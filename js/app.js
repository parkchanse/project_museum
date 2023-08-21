const toplayout = document.querySelector('.top_layout')
const bottomlayout = document.querySelector('.bottom_layout')
const nav = document.querySelector('.nav')

const top_layout_display = document.querySelector('.top_layout_display')
const bottom_layout_display = document.querySelector('.bottom_layout_display')

/* function navigatorover() {
    // nav.classList.add('gnbbg')
    // bottomlayout.classList.add('opacity')
    // toplayout.classList.add('gnbbg')

    toplayout.style.display = 'none'
    bottomlayout.style.opacity = '1' 
    bottomlayout.style.transition = '1s' 

    
    
}
function navigatorleave() {
    // nav.classList.remove('gnbbg')
    // bottomlayout.classList.add('opacity')
    // toplayout.classList.remove('opacity')
    // bottomlayout.style.opacity = '0' 

}  */


nav.addEventListener('mouseover', navigatorover)
nav.addEventListener('mouseleave', navigatorleave)
