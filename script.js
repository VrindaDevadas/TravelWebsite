let navbar= document.querySelector('header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.add('active');

}

document.querySelector('#nav-close').onclick = () =>{
   navbar.classList.remove('active');

}

let videoBtn= document.querySelectorAll(".vid-btn");

videoBtn.forEach(btn  =>{
   btn.addEventListener('click', () => {
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src=btn.getAttribute('data-src');
      document.querySelector('#video-slider').src = src;

   })
})



let form = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
   form.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
   form.classList.remove('active');
}


window.onscroll = () => {
   navbar.classList.remove('active');
   login.classList.remove('active');
   form.classList.remove('active');

}


let login = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick =()=>{
   login.classList.add('active');
}

document.querySelector('#form-close').onclick =()=>{
   login.classList.remove('active');
}

var swiper = new Swiper(".review-slider", {
   spaceBetween : 40,
   loop: true,
   autoplay:{
      delay:2500,
      disableOnInteraction:false,
   },
   breakpoints:{
      640:{
         slidesPerView: 1,
      },
      768:{
         slidesPerView: 2,
      },
      1024: {
         slidesPerView: 3,
      },
   },
});
