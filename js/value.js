'use strict';
let slider = document.querySelector('#myRange'),
		output = document.querySelector('#value');


output.innerHTML = slider.value;
slider.addEventListener('input', () => {
	output.innerHTML = this.value;
});

slider.addEventListener('input', () => {
	let x = slider.value;
	let color = 'linear-gradient(90deg, rgb(255,233,153)' + x + '%, rgb(214,214,214)' + x + '%)';
	slider.style.background	= color;
});