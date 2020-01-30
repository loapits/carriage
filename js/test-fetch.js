'use strict';
let link = document.querySelectorAll('.link');
for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click', function(event) { 
        event.preventDefault()
        // alert(2342);
    })
};

function loadPage(url) {
    return fetch(url).then(response => {
        return response.text();
    })
    .then(text => {
        let parser = new DOMParser();
        let parseText =  parser.parseFromString(text, 'text/html');
        let main = parseText.querySelector('main');
        document.querySelector('main').innerHTML = main.innerHTML; 
        // alert('page');   
    });       
};

function loadPlaylist(urls){    
    let src1 = document.createElement("script");
    src1.src = urls;
    src1.type="text/javascript"; 
    document.getElementsByTagName("main")[0].appendChild(src1); 
    // alert('playlist');
}

function loadPlayer() {
    let src2 = document.createElement("script");
    src2.src = 'js/script.js';
    src2.type="text/javascript";
    document.getElementsByTagName("main")[0].appendChild(src2);
    // alert('player');
}
async function loadAllScr(url, urls) {
    setTimeout(loadPage, 100, url);
    setTimeout(loadPlaylist, 200, urls);
    setTimeout(loadPlayer, 300);

}
function changeURL (url, title){
    history.pushState({}, 'Carriage', url);
    document.getElementsByTagName('title')[0].innerHTML = title;
};

document.querySelector('body').addEventListener('click', event => {
    switch(event.target.id){
        case 'logo':
            loadAllScr('index.html');
            changeURL('index.html', 'Albums');
            break;
        case 'albums':
            loadAllScr('index.html');
            changeURL('index.html', 'Albums');
            break;
        case 'updatesHead':
            loadAllScr('updates.html');
            changeURL('updates.html', 'Updates');
            break;
        case 'aboutMe':
            loadAllScr('about_author.html');
            changeURL('about_author.html', 'About me');
            break;
        case 'radio':
            loadAllScr('radio.html', 'js/script(radio).js');
            changeURL('radio.html', 'Radio');
            break;
        case 'QQQQ':
            loadAllScr('questions_questions_questions_questions.html', 'js/script(QQQQ).js');
            changeURL('questions_questions_questions_questions.html', 'QQQQ');
            break;
        case 'LVLUP':
            loadAllScr('level_up_part_one.html', 'js/script(LevelUpPartOne).js');
            changeURL('level_up_part_one.html', 'LVLUP(pt1)');            
            break;
        case 'ALLWORLD':
            loadAllScr('allworld.html', 'js/script(worldtheatre).js');
            changeURL('allworld.html', 'ВЕСЬ МИР-ТЕАТР');
            break;
        case 'EARLY':
            loadAllScr('early-morning-and-euphoria.html', 'js/script(EARLY).js');
            changeURL('early-morning-and-euphoria.html', 'EARLY MORNING AND EUPHORIA');
            break;
    }
});

