// Your code goes here

// Onload Event

const onload = function(event){
    document.body.style.color = "steelblue";
}
window.addEventListener('load', onload);

// Click Event 

const navLink = document.querySelectorAll('a');

navLink[0].addEventListener('click' , () => {
    navLink[0].style.background = 'lightblue';
    navLink[1].style.background = 'pink';
    navLink[2].style.background = 'orange';
    navLink[3].style.background = 'Yellow';
})

// Mouseover Event

const readyButton = document.querySelectorAll('h4');

readyButton.forEach(ready => {
    ready.addEventListener('mouseover' , () => {
        ready.style.color = 'gold'
        ready.style.transform = 'scale(1.3)'
    })
});

// Mouseout Event ::: Not working

// readyButton.forEach (ready => {
//     ready.addEventListener('moseout', () => {
//         ready.style.color = 'white'
//         ready.style.transform = 'scale(0.8)'
//     })
// });

// Doubleclick Event 

const busTitle = document.querySelector('.footer');

busTitle.addEventListener('dblclick', function(event) {
    event.target.style.color = 'red'
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

// const resizeImg = document.querySelector('section img');

// resizeImg.addEventListener('resize', ()=>{
//     resizeImg.src = 'img/adventure.jpg';
//     resizeImg.src = 'img/fun.jpg';
// })

// Click Event 

//changing the content 
let button = document.querySelector('.btn');
document.addEventListener('click', function(event){
    if(event.target === button){
        button.textContent = `Click count: ${event.detail++}`;  
    }else{
        console.log('clicking somewhere else')
    }
})

// Mouseenter event 
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function(e){
    alert('EventListener: Great! This is the heading');
});

// Mouseover Event

const signButton = document.querySelectorAll('.destination .btn');

console.log('signButton', signButton)

signButton.forEach(ready =>{
    ready.addEventListener('mouseover',()=>{
        ready.style.color = 'red'
        ready.style.transform = 'scale(1.2)'
    })
});

// Zoom Event 

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  el.onwheel = zoom;

  
// Change Element

const imageChange = document.getElementById("img/destination.jpg");
console.log(imageChange);
imageChange.addEventListener("click", function() {
    if(imageChange.src != "img/fun-bus.jpg"){
        imageChange.src = "img/fun-bus.jpg";
    }else{
        imageChange.src = "img/destination.jpg";
    }
})