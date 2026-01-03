let noButtonCount = 0


function clickNo() {
    noButtonCount = Number(noButtonCount + 1);
    const img = document.getElementById("imageChange");

    if (noButtonCount === 1) {
        alert("Text 1");
    } else if (noButtonCount === 2) {
        alert('Text 2');
    } else if (noButtonCount === 3) {
        alert("Text 3");
    } else if (noButtonCount === 4) {
        alert("Text 4");
        moveButtonRandomly(); 
        document.querySelector('.no.button').addEventListener('mouseenter', function() {
            moveButtonRandomly();
        });
    } else if (noButtonCount === 5){
        alert("Just click yes now theres no more")
    }
}

function moveButtonRandomly() {
    const button = document.querySelector('.no');
    const randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));

    
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}


function fadeOutHiText() {
    const fadeText = document.getElementById("hiText");

    var opacity = 1;
    var intervalId = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1; 
            fadeText.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 100); 
}

function love1() { 
    const fadeLove1 = document.querySelector('.l1');

    fadeLove1.style.display = "block"

    var opacity = 1;
    var intervalId = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1; 
            fadeLove1.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 100); 
}

function love2() { 
    const fadeLove2 = document.querySelector('.l2');

    fadeLove2.style.display = "block"

    var opacity = 1;
    var intervalId = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1; 
            fadeLove2.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 100); 
}

function love3() { 
    const fadeLove3 = document.querySelector('.l3');

    fadeLove3.style.display = "block"

    var opacity = 1;
    var intervalId = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1; 
            fadeLove3.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 100); 
}

function love4() { 
    const fadeLove4 = document.querySelector('.l4');

    fadeLove4.style.display = "block"

    var opacity = 1;
    var intervalId = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1; 
            fadeLove4.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 100); 
}
function love5() { 
    const fadeLove5 = document.querySelector('.l5');

    fadeLove5.style.display = "block"

    var opacity = 1;
    var intervalId = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1; 
            fadeLove5.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 100); 
}
function love6() { 
    const fadeLove6 = document.querySelector('.l6');

    fadeLove6.style.display = "block"

    var opacity = 1;
    var intervalId = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1; 
            fadeLove6.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 100); 
}


function bigLove() { 
    const fadeLove7 = document.querySelector('.biglove');

    fadeLove7.style.display = "block"

    var opacity = 1;
    var intervalId = setInterval(function() {
        if (opacity > 0) {
            opacity -= 0.1; 
            fadeLove7.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 100); 
}

function scrollSee(){
    const scrollSeeText = document.querySelector('.scroll-to-see')
    scrollSeeText.style.top = "40vh"
}

function nextPart(){
    setTimeout(function(){
        const audio = document.getElementById("backgroundMusic");
        audio.play();
    }, 3000);
    setTimeout(function() {
        

        const firstMain = document.querySelector('.first-main')
        firstMain.style.display = "none"
        document.body.style.backgroundImage = "none"
        document.body.style.backgroundColor = "Black"
        document.querySelector('.second-thing').style.display = 'block' 
        
        
        setTimeout(fadeOutHiText, 2000)  
        setTimeout(love1, 3800)
        setTimeout(love1, 6000)
        setTimeout(love2, 6500)
        setTimeout(love3, 6900)
        setTimeout(love4, 7200)
        setTimeout(love5, 7500)

        setTimeout(love1, 9700 )
        setTimeout(love2, 10000)
        setTimeout(love3, 10300)
        setTimeout(love4, 10600)
        setTimeout(love5, 10900)
        setTimeout(love6, 11200)
        setTimeout(bigLove, 11600)
        
        setTimeout(scrollSee, 13000)
    
    }, 5000);
}



function clickYes(){
    if (noButtonCount < 4){
        alert("Play the damn thing properly, you know what ur supposed to do")
    } else if (noButtonCount <= 4){

        nextPart()
       
        const img = document.getElementById("imageChange");
        img.src = "Pictures/kiss.gif";
        
        const questionParagraph = document.querySelector('.question')
        questionParagraph.innerHTML = 'YAY!'

        const yesButton = document.querySelector('.yes');
        const noButton = document.querySelector('.no')
        yesButton.style.display = 'none'
        noButton.style.display = 'none'
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const newYears = document.querySelectorAll('.newyears-div')
const hiddeElements = document.querySelectorAll('.hidden')
hiddeElements.forEach((el) => observer.observe(el))

