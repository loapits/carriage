'use strict';
/* попробовать повторно инициализировать скрипты*/ 
let headerEl = document.querySelector('body');

function load(url) {
        fetch(url).then(response =>
        response.text()).then(text => {
            let parser = new DOMParser();
            let parseText =  parser.parseFromString(text, 'text/html');
            let main = parseText.querySelector('main');
            document.querySelector('main').innerHTML = main.innerHTML;            
        });       
       console.log(123123);
};

function changeURL (url, title){
    window.history.replaceState({}, 'Carriage', url);
    document.getElementsByTagName('title')[0].innerHTML = title;
};

function loadScr(urls){    
    let src1 = document.createElement("script");
    src1.src = urls;
    src1.type="text/javascript";
    document.getElementsByTagName("main")[0].appendChild(src1); 
    console.log(2);
}
function loadScr2() {
    let src1 = document.createElement("script");
    src1.src = 'js/script.js';
    src1.type="text/javascript";
    document.getElementsByTagName("main")[0].appendChild(src1);
    console.log(1);
}

 
headerEl.addEventListener('click', event => {
    switch(event.target.id){
        case 'albums':
            load('index.html');
            changeURL('index.html', 'Albums');
            break;
        case 'updatesHead':
            load('updates.html');
            changeURL('updates.html', 'Updates');
            break;
        case 'aboutMe':
            load('about_author.html');
            changeURL('about_author.html', 'About me');
            break;
        case 'radio':
            setTimeout(load, 200, 'radio.html');
            changeURL('radio.html', 'Radio');
            setTimeout(loadScr2, 300);
            setTimeout(loadScr, 100, 'js/script(radio).js');
            
            break;
        case 'QQQQ':
            setTimeout(load, 200, 'questions_questions_questions_questions.html');
            changeURL('questions_questions_questions_questions.html', 'QQQQ');
            setTimeout(loadScr2, 300);
            setTimeout(loadScr, 100, 'js/script(QQQQ).js');
           
            break;
        case 'LVLUP':
            setTimeout(load, 200, 'level_up_part_one.html');
            changeURL('level_up_part_one.html', 'LVLUP(pt1)');
            setTimeout(loadScr2, 300);
            setTimeout(loadScr, 100, 'js/script(LevelUpPartOne).js');
            
            break;
        case 'ALLWORLD':
            setTimeout(load, 200, 'allworld.html');
            changeURL('allworld.html', 'ВЕСЬ МИР-ТЕАТР');
            setTimeout(loadScr2, 300);
            setTimeout(loadScr, 100, 'js/script(worldtheatre).js');
            
            break;
        case 'EARLY':
            setTimeout(load, 200, 'early-morning-and-euphoria.html');
            changeURL('early-morning-and-euphoria.html', 'EARLY MORNING AND EUPHORIA');
            setTimeout(loadScr2, 300);
            setTimeout(loadScr, 100, 'js/script(EARLY).js');
            break;
    }
});
