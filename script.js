const advice = document.querySelector('.advice');
const id = document.querySelector('.id');
const btn = document.querySelector('.img');
const pattern = document.querySelector('.pattern')

window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        pattern.setAttribute('src','mat/advice-generator-app-main/images/pattern-divider-mobile.svg')
    }else{
        pattern.setAttribute('src','mat/advice-generator-app-main/images/pattern-divider-desktop.svg')
    } 
});

function adviceFetch(){
    fetch('https://api.adviceslip.com/advice')
    .then(res=>res.json())
    .then(data=>{
       advice.textContent = data.slip.advice;
       id.textContent = data.slip.id  
    });

}

adviceFetch();
btn.addEventListener('click',adviceFetch);

