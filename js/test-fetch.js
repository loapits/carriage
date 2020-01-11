'use strict';
/* попробовать повторно инициализировать скрипты*/ 
let headerEl = document.querySelector('header');
let mainEl = document.querySelector('main');

function load(url) {
        fetch(url).then(response => {
        response.text().then(text => {
            let parser = new DOMParser();
            let parseText =  parser.parseFromString(text, 'text/html');
            let main = parseText.querySelector('main');
            document.querySelector('main').innerHTML = main.innerHTML;            
        });       
        return value;
    })
};

function changeURL (url, title){
    window.history.replaceState({}, 'Carriage', url);
    document.getElementsByTagName('title')[0].innerHTML = title;
};

function loadScr(urls){
    var e = document.createElement("script");
    e.src = 'js/jquery-3.4.1.min.js';
    e.type="text/javascript";
    document.getElementsByTagName("main")[0].appendChild(e); 
    
    var e = document.createElement("script");
    e.src = urls;
   /*  if(event.target.id == 'QQQQ'){
        e.src = 'js/script(QQQQ).js';
    } else if(event.target.id == 'LVLUP'){
        e.src = 'js/script(LevelUpPartOne).js';
    } else if(event.target.id == 'ALLWORLD'){
        e.src = 'js/script(worldtheatre).js';
    } else if(event.target.id == 'radio'){
        e.src = 'js/script(radio).js';
    } */
    e.type="text/javascript";
    document.getElementsByTagName("main")[0].appendChild(e); 

    var e = document.createElement("script");
    e.src = 'js/script.js';
    e.type="text/javascript";
    document.getElementsByTagName("main")[0].appendChild(e); 
}
headerEl.addEventListener('click', event => {
    switch(event.target.id){
        case 'albums':
            load('index.html');
            changeURL('index.html', 'Albums');
            break;
        case 'updates':
            load('updates.html');
            changeURL('updates.html', 'Updates');
            break;
        case 'aboutAuthor':
            load('about_author.html');
            changeURL('about_author.html', 'About me');
            break;
        case 'radio':
            load('radio.html');
            changeURL('radio.html', 'Radio');
            loadScr('js/script(radio).js');
            break;
    }
});
mainEl.addEventListener('click', event => {
    switch(event.target.id){
        case 'QQQQ':
            load('questions_questions_questions_questions.html');
            changeURL('questions_questions_questions_questions.html', 'QQQQ');
            loadScr('js/script(QQQQ).js');
            break;
        case 'LVLUP':
            load('level_up_part_one.html');
            changeURL('level_up_part_one.html', 'LVLUP(pt1)');
            loadScr('js/script(LevelUpPartOne).js');
            break;
        case 'ALLWORLD':
            load('allworld.html');
            changeURL('allworld.html', 'ВЕСЬ МИР-ТЕАТР');
            loadScr('js/script(worldtheatre).js');
            break;
    }
});