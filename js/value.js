'use strict';
let slider = document.getElementById('myRange'),
	output = document.getElementById('value');


	output.innerHTML = slider.value;
	slider.addEventListener('input', () => {
		output.innerHTML = this.value;
	});
	slider.addEventListener('mousemove', () => {
		let x = slider.value;
		let color = 'linear-gradient(90deg, rgb(255,233,153)' + x + '%, rgb(214,214,214)' + x + '%)';
		slider.style.background	= color;
	});
