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
	if (x == 0) {
		document.querySelector('.volume-buttton').style.background	= 'url(../img/icons/player/mute.png) no-repeat center top/cover';
	} else {
		document.querySelector('.volume-buttton').style.background	= 'url(../img/icons/player/volume.png) no-repeat center top/cover';
	}
});