// Your code goes here

// Click Event 

const navLink = document.querySelectorAll('a');

navLink[0].addEventListener('click' , () => {
    navLink[0].style.background = 'lightblue';
    navLink[1].style.background = 'pink';
    navLink[2].style.background = 'orange';
    navLink[3].style.background = 'Yellow';
})

// Mouseover Event

const readyButton = document.querySelectorAll('.destination .btn');

console.log('readyButton', readyButton)

readyButton.forEach(ready => {
    ready.addEventListener('mouseover' , () => {
        ready.style.color = 'red'
        ready.style.transform = 'scale(1.3)'
    })
});

// Mouseout Event ::: Not working

readyButton.forEach (ready => {
    ready.addEventListener('moseout', () => {
        ready.style.color = 'white'
        ready.style.transform = 'scale(0.8)'
    })
});

// Doubleclick Event 

const busTitle = document.querySelector('.logo-heading');

busTitle.addEventListener('dblclick', function(event) {
    event.target.style.color = 'blue'
    setTimeout(function(){
        event.target.style.color = '';
    }, 1000);
}, false);

// Scroll Event

const par = document.querySelectorAll('p')

document.addEventListener('scroll', ()=>{
    par.forEach(words =>{
        words.style.fontFamily = 'sans serif'
        words.style.fontWeight = 'bold'
        words.style.color = 'pink'
    });
});

// Resize Event

const resizeImg = document.querySelector('section img');

resizeImg.addEventListener('resize', ()=>{
    resizeImg.src = 'img/adventure.jpg';
    resizeImg.src = 'img/fun.jpg';
})