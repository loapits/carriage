'use strict';
let link = document.querySelectorAll('.link');
let songs = songe;

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', e => {
    e.preventDefault();
  })
};

/* function removEl(elId) {
  let el = document.getElementById(elId);
  if (el) {
    el.remove();
    console.log(`Элемент ${elId} удален`);
  } else {
    console.log(`Элемент ${elId} отсутствует`);
  } 
}*/

// function loadPlayer() {
//   let src2 = document.createElement("script");
//   src2.src = 'js/script.js';
//   document.getElementsByTagName("main")[0].appendChild(src2);
// }


async function loadPage(url) {
  const hedMain = document.querySelector('main');
  const response = await fetch(url);
  const data = await response.text();
  const parser = await new DOMParser();
  const  parseText = await parser.parseFromString(data, 'text/html');
  const main = await parseText.querySelector('main');
  hedMain.innerHTML = await main.innerHTML;
}


function changeURL(url, title) {
  history.pushState({}, 'Carriage', url);
  document.getElementsByTagName('title')[0].innerHTML = title;
}

function alp(a, c) {
	setTimeout(() => {
    for (let i = a; i < c; i++) {
      $('.wrp').append('<div class="song" id="'+songs[i][0]+'"><div class="songH"></div><button class="play-pause_song"></button><div class="nameSong">'+songs[i][1]+'</div><div class="time">'+parseInt(songs[i][3]/60)+':'+parseInt(songs[i][3]%60)+'</div></div>');
    };
    console.log(1243124);
  }, 200);
}

alp(0, songs.length);

document.querySelector('body').addEventListener('click', event => {
  switch (event.target.id) {
    case 'logo-img':
    case 'logo-two-img':
    case 'albums':
      loadPage('index.html');
      changeURL('index.html', 'Carriage');
      alp(0, songs.length);
      break;

    case 'updatesHead':
      loadPage('updates.html');
      changeURL('updates.html', 'Updates');
      alp(0, songs.length);
      break;

    case 'aboutMe':
      loadPage('about_author.html');
      changeURL('about_author.html', 'About me');
      alp(0, songs.length);
      break;

    case 'radio':
      loadPage('radio.html');
      changeURL('radio.html', 'Radio');
      alp(0, songs.length);
      break;
      
    case 'QQQQ':
      loadPage('questions_questions_questions_questions.html');
      changeURL('questions_questions_questions_questions.html', 'QQQQ');
      alp(25, 37);
      break;

    case 'LVLUP':
      loadPage('level_up_part_one.html');
      changeURL('level_up_part_one.html', 'LVLUP(pt1)');
      alp(17, 25);
      break;

    case 'ALLWORLD':
      loadPage('allworld.html');
      changeURL('allworld.html', 'ВЕСЬ МИР-ТЕАТР');
      alp(12, 17);
      break;

    case 'EARLY':
      loadPage('early-morning-and-euphoria.html');
      changeURL('early-morning-and-euphoria.html', 'EARLY MORNING AND EUPHORIA');
      alp(38, 46);
      break;
  }
});

function addEl() {
  if (location.pathname === '/index.html') {
    loadPage('index.html');
  } else if (location.pathname === '/updates.html') {
    loadPage('updates.html');
  } else if (location.pathname === '/about_author.html') {
    loadPage('about_author.html');
  } else if (location.pathname === '/radio.html') {
    loadPage('radio.html');
    alp(0, songs.length);
  } else if (location.pathname === '/questions_questions_questions_questions.html') {
    loadPage('questions_questions_questions_questions.html');
    alp(0, 25);
  } else if (location.pathname === '/level_up_part_one.html') {
    loadPage('level_up_part_one.html');
    alp(26, 32);
  } else if (location.pathname === '/allworld.html') {
    loadPage('allworld.html');
    alp(33, 40);
  } else if (location.pathname === '/early-morning-and-euphoria.html') {  
    loadPage('early-morning-and-euphoria.html');
    alp(41, 46);
  }  
}

window.addEventListener('popstate', () => {
  addEl();
});