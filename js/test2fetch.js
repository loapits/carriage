'use strict';
function load(target, url) {
  fetch(url).then(function(response) {
  response.text().then(function(text) {
    let parser = new DOMParser();
      let parseText =  parser.parseFromString(text, 'text/html');
      let main = parseText.querySelector('#main');
   document.querySelector('#main').innerHTML = main.innerHTML;
    })
})
};

function changeURL (url, title){
  window.history.replaceState({}, 'Carriage', url);
  document.getElementsByTagName('title')[0].innerHTML = title;
};

document.querySelectorAll('body').addEventListener('click', function(){
  load(document.querySelector('#index'), 'http://gera59ki.beget.tech/index.html');
  changeURL('index.html', 'Carriage');
});

document.querySelector('body').addEventListener('click', function(){
  load(document.querySelector('#updates'), 'http://gera59ki.beget.tech/updates.html');
  changeURL('updates.html', 'Updates');
});

document.querySelector('body').addEventListener('click', function(){
  load(document.querySelector('#aboutAuthor'), 'http://gera59ki.beget.tech/about_author.html');
  changeURL('about_author.html', 'About me');
});

document.querySelector('body').addEventListener('click', function(){
  load(document.querySelector('#radio'), 'http://gera59ki.beget.tech/radio.html');
  changeURL('radio.html', 'Radio');
  
});

document.querySelector('body').addEventListener('click', function(){
  load(document.querySelector('#qqqq'), 'http://gera59ki.beget.tech/questions_questions_questions_questions.html');
  changeURL('questions_questions_questions_questions.html', 'QQQQ');
});

document.querySelector('body').addEventListener('click', function(){
  load(document.querySelector('#lvlup'), 'http://gera59ki.beget.tech/level_up_part_one.html');
  changeURL('level_up_part_one.html', 'LVLUP(pt1)');
});

document.querySelector('body').addEventListener('click', function(){
  load(document.querySelector('#allworld'), 'http://gera59ki.beget.tech/allworld.html');
  changeURL('allworld.html', 'ВЕСЬ МИР-ТЕАТР');
});
