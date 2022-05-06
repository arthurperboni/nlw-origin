/* abre e fecha o menu quando clicar no botao Hamburguer e X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em item no menu fechar o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

//Swiper (Carrosel)

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//Scroll Reveal (Mostrar Elementos ao usar o Scroll)

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
  // reset: true
})

scrollReveal.reveal(
  '#home .image, #home .text, #about .image, #about .text, #services .header,#services .title, #services .subtitle, #services .cards, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social',
  { interval: 100 }
)

//Botão voltar para o topo

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// Menu Ativo seguindo seção visivel

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + window.innerHeight / 2

  for (let section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const topLimit = checkpoint >= sectionTop
    const bottomLimit = checkpoint <= sectionTop + sectionHeight

    if (topLimit && bottomLimit) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// When Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

function setNewImage() {
  document.getElementById('img1').src = 'assets/pictures/img2.jpeg'
}

function setOldImage() {
  document.getElementById('img1').src = 'assets/pictures/img1.jpeg'
}

function setNewImage2() {
  document.getElementById('img2').src = 'assets/pictures/img4.jpeg'
}

function setOldImage2() {
  document.getElementById('img2').src = 'assets/pictures/img3.jpeg'
}
