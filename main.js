console.log('JavaScript is running');
// Simple event listener test

/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'), 
      searchContent = document.getElementById('search-content')
      console.log('Search Button:', searchButton);
      

// Search show
// validate if constant exists 
if(searchButton){
    searchButton.addEventListener('click',()=>{
        console.log('Search button clicked');
        searchContent.classList.add('show-search')
    })
}

// Search hidden
if(searchClose){
    searchClose.addEventListener('click',()=>{
        console.log('Search close button clicked');
        searchContent.classList.remove('show-search')
    })
}


/*=============== LOGIN ===============*/  
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'), 
      loginContent = document.getElementById('login-content')
      console.log('Login Button:', loginButton);
        

// Log in show
// validate if constant exists 
if(loginButton){
    loginButton.addEventListener('click',()=>{
        console.log('Login button clicked');
        loginContent.classList.add('show-login')
    })
}

// Login hidden
if(loginClose){
    loginClose.addEventListener('click',()=>{
        console.log('Login close button clicked');
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header') 
}
window.addEventListener('scroll',shadowHeader)
 
/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
})

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,

          
        }
    }
})

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',


    breakpoints: {
        1150: {
            slidesPerView: 3,          
        }
    }
})

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,         
        }
    }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)



/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected theme and icon
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// getting current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    // validation of theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// activating theme manually with a click
themeButton.addEventListener('click',() => {
    //toggling the theme and icon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // updating theme and icon which user chose 
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
