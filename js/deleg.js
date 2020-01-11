'use strict';
function load(target, url) {
    fetch(url).then(function(response) {
    response.text().then(function(text) {
        let parser = new DOMParser();
        let parseText =  parser.parseFromString(text, 'text/html');
        let main = parseText.querySelector('#main');
        document.querySelector('#main').innerHTML = main.innerHTML;
        let src = document.querySelectorAll('script');
        console.log(src);
        })
    })
}


/* Написать делегирование для нажатия на все кнопки, и проверять в условии, куда нажал. 
если нажата кнопка радио, загружать контент радио. чтобы не срабатывало на всех элементах
нужно юзать всплытие и перехват(event.stopPropagation(), а чтобы игнорировать самый маленький 
элемент, используется метод event.targer.closest(название дочернего элемента, который
    нужен))
document.onclick = event => {
if(event.target.id(то, по чему тыкнули) = 'тому, что надо загрузить'){
коллбэк загрузки контента
}
а чтобы игнорировать самый маленький 
элемент

if(event.target.closest(название тега или элемента)){
    коллбэк загрузки контента
}

} */ 
/* или
Попробовать повторно инициализировать скрипты */
function changeURL (url, title){
    window.history.replaceState({}, 'Carriage', url);
    document.getElementsByTagName('title')[0].innerHTML = title;
};

document.querySelector('#albums').addEventListener('click', function(){
    load(document.querySelector('#index'), 'http://gera59ki.beget.tech/index.html');
    changeURL('index.html', 'Carriage');
});

document.querySelector('#updates').addEventListener('click', function(){
    load(document.querySelector('#updates'), 'http://gera59ki.beget.tech/updates.html');
    changeURL('updates.html', 'Updates');
});

document.querySelector('#aboutAuthor').addEventListener('click', function(){
    load(document.querySelector('#aboutAuthor'), 'http://gera59ki.beget.tech/about_author.html');
    changeURL('about_author.html', 'About me');
});

document.querySelector('#radio').addEventListener('click', function(){
    load(document.querySelector('#radio'), 'http://gera59ki.beget.tech/radio.html');
    changeURL('radio.html', 'Radio');
});

document.querySelector('#QQQQ').addEventListener('click', function(){
    load(document.querySelector('#qqqq'), 'http://gera59ki.beget.tech/questions_questions_questions_questions.html');
    changeURL('questions_questions_questions_questions.html', 'QQQQ');
});

document.querySelector('#LVLUP').addEventListener('click', function(){
    load(document.querySelector('#lvlup'), 'http://gera59ki.beget.tech/level_up_part_one.html');
    changeURL('level_up_part_one.html', 'LVLUP(pt1)');
});

document.querySelector('#ALLWORLD').addEventListener('click', function(){
    load(document.querySelector('#allworld'), 'http://gera59ki.beget.tech/allworld.html');
    changeURL('allworld.html', 'ВЕСЬ МИР-ТЕАТР');
});
