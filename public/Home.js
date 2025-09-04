const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('#close-button');
const donate = document.querySelector('#donate');
const about = document.querySelector('#about');
const toggle = document.querySelectorAll('.menuItemList div');
const animalRescued = document.querySelector('#animalRescuedC');
const volunteers = document.querySelector('#volunteersC');
const adoptions = document.querySelector('#adoptionsC');





// Menu Fxns
toggle.forEach((t) => {
    t.addEventListener('click', function (e) {
        e.preventDefault();
        const currentElement = this.parentElement;
        const currentSymbol = this.querySelector(".symbol")
        document.querySelectorAll('.menuItemList').forEach(item => {
            if (item !== currentElement) {
                item.classList.remove('active');
                item.querySelector('.symbol').textContent = '+';
            }
        })
        const isActive = currentElement.classList.toggle('active');
        currentSymbol.textContent = isActive ? '-' : '+';
    })
})
menuButton.addEventListener('click', () => {
    menu.style.right = 0;
    donate.style.marginRight = '30rem';
})
closeButton.addEventListener('click', () => {
    menu.style.right = '-30rem';
    donate.style.marginRight = '2rem';
})



// AnimalStats Fxn
const observer=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            runStats();
            observer.disconnect();
        }
    })
})
observer.observe(animalRescued)
function runStats(){
    for (let i = 0; i <= 154; i++) {
    setTimeout(() => {
        animalRescued.innerText = i;
        if (i == 154) {
            for (let j = 0; j <= 52; j++) {
                setTimeout(() => {
                    volunteers.innerText = j;
                    if (j == 52) {
                        for (let z = 0; z <= 38; z++) {
                            setTimeout(() => {
                                adoptions.innerText = z;
                            }, z * 30)
                        }
                    }
                }, j * 30)
            }
        }
    }, i * 30)
}
}

if (window.innerWidth <= 768) {
    donate.remove();
}