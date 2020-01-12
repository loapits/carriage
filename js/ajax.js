'use strict';

/*function dhtmlLoadScript(url){
   let script = document.createElement("script");
   script.src = url;
   document.getElementsByTagName("main")[0].appendChild(script); 
   console.log('yes');
}
*/

function load(url) {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 || xhr.status == 200) {
			let response = xhr.responseText;
			let parser = new DOMParser();
			let parseText =  parser.parseFromString(response, 'text/html');
			let main = parseText.querySelector('#main');
			document.querySelector('#main').innerHTML = main.innerHTML;
		}
	}	
	xhr.open("GET", url);
	xhr.send();
	console.log('is complite!');
};

function changeURL (url, title){
	window.history.replaceState({}, 'Carriage', url);
	document.getElementsByTagName('title')[0].innerHTML = title;
};

document.querySelector('#albums').addEventListener('click', function(){
	load('../index.html');
	changeURL('index.html', 'Carriage');
});

document.querySelector('#updates').addEventListener('click', function(){
	load('../updates.html');
	changeURL('updates.html', 'Updates');
});

document.querySelector('#aboutAuthor').addEventListener('click', function(){
	load('../about_author.html');
	changeURL('about_author.html', 'About me');
});

document.querySelector('#radio').addEventListener('click', function(){
	load('../radio.html');
	changeURL('radio.html', 'Radio');
	
});

document.querySelector('#QQQQ').addEventListener('click', function(){
	load('../questions_questions_questions_questions.html');
	changeURL('questions_questions_questions_questions.html', 'QQQQ');
});

document.querySelector('#LVLUP').addEventListener('click', function(){
	load('../level_up_part_one.html');
	changeURL('level_up_part_one.html', 'LVLUP(pt1)');
});

document.querySelector('#ALLWORLD').addEventListener('click', function(){
	load('../allworld.html');
	changeURL('allworld.html', 'ВЕСЬ МИР-ТЕАТР');
});
