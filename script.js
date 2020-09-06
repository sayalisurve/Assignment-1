const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	
	header.style.backgroundColor = '#29323c';
	
});

