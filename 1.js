const backgroundContainer = document.querySelector('.background-container');
const backgroundImg = document.querySelector('.background-img');

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function moveBackground(event){
    const mouseXposition = event.clientX;
    const mouseYposition = event.clientY;

    const calculatedX = mouseXposition / (windowWidth / 7);
    const calculatedY = mouseYposition / (windowHeight / 7);

    backgroundImg.style.transform="translate(-"+calculatedX.toString()+"%,-"+calculatedY.toString()+"%)"; 

}

backgroundContainer.addEventListener("mousemove", moveBackground);

const scrollButton = document.querySelector('.scroll-button');
const title2Text = document.querySelector('.title-text2');
const titleText = document.querySelector('.title-text');

setTimeout(function(){
        titleText.style.border = 'none';
        }, 1500);

setTimeout(function(){
        title2Text.classList.remove('noshow');
        }, 1500);

setTimeout(function(){
        scrollButton.classList.remove('noshow');
        }, 3500);

const aboutMe = document.querySelector('#aboutMe');

function scrollDown(){    
        aboutMe.scrollIntoView({
            behavior: 'smooth'
        })  
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function scrollAboutMe(){
    aboutMe.scrollIntoView({
            behavior: 'smooth'
        })
};

function scrollProjects(){
    projects.scrollIntoView({
            behavior: 'smooth'
        })
};

function scrollContact(){
    contact.scrollIntoView({
            behavior: 'smooth'
        })
};

/* let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            } 
        });
    }, {rootMargin: "-350px -10px -10px -10px"})

    const elms = document.querySelectorAll('.elms');
    elms.forEach(el => observer.observe(el)); */

    function goBack() {
    if (document.referrer) {
      history.back();
    } else {
      window.location.href = "Home.html#projects";
    }
  }

new Swiper('.card-wrapper', {
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});