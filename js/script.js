function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight *1.3 || document.documentElement.clientHeight *1.3) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const map = document.querySelector('.offer__map:nth-child(2)');
const mapDots = document.querySelector('#map-dots');
document.addEventListener('scroll',() =>{
	if(!isInViewport(map)){
		return;
	}
	mapDots.classList.add('map-active');
})




const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu__list');

burger.addEventListener('click', menuToggle)

function menuToggle() {
	burger.classList.toggle('burger-active');
	menu.classList.toggle('menu__list-active');
}