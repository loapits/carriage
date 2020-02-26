'use strict';
let link = document.querySelectorAll('.link'),
    songs = songe, i;

for (let i = 0; i < link.length; i++) {
  document.addEventListener('click', e => {
    e.preventDefault();
  })
}

async function loadPage(url) {
  try {
    const hedMain = document.querySelector('main');
    const response = await fetch(url);
    await appendPlaylist();
    const data = await response.text();
    const parser = await new DOMParser();
    const  parseText = await parser.parseFromString(data, 'text/html');
    const main = await parseText.querySelector('main');
    hedMain.innerHTML = await main.innerHTML;
  } catch (err) {
    console.log('Ooops, something went wrong');
  }
}

function changeURL(url, title) {
  history.pushState({}, 'Carriage', url);
  document.getElementsByTagName('title')[0].innerHTML = title;
}
 
function alp(a, c) {
	setTimeout(() => {
    for (i = a; i < c; i++) {
      $('.wrp').append('<div class="song" id="'+songs[i][0]+'"><div class="songH"></div><button class="play-pause_song"></button><div class="nameSong">'+songs[i][1]+'</div><div class="time">'+parseInt(songs[i][3]/60)+':'+parseInt(songs[i][3]%60)+'</div></div>');
    }
  },200);
}

function appendPlaylist() {
  if (location.pathname === '/index.html') {
    alp(0, songs.length);
  } else if (location.pathname === '/updates.html') {
    alp(0, songs.length);
  } else if (location.pathname === '/about_author.html') {
    alp(0, songs.length);
  } else if (location.pathname === '/radio.html') {
    alp(0, songs.length);
  } else if (location.pathname === '/questions_questions_questions_questions.html') {
    alp(25, 37);
  } else if (location.pathname === '/level_up_part_one.html') {
    alp(17, 25);
  } else if (location.pathname === '/allworld.html') {
    alp(12, 17);
  } else if (location.pathname === '/early-morning-and-euphoria.html') {  
    alp(38, 46);
  }  
};

document.querySelector('body').addEventListener('click', event => {
  switch (event.target.id) {
    case 'logo-img':
    case 'logo-two-img':
    case 'albums':
      loadPage('index.html');
      changeURL('index.html', 'Carriage');
      break;

    case 'updatesHead':
      loadPage('updates.html');
      changeURL('updates.html', 'Updates');
      break;

    case 'aboutMe':
      loadPage('about_author.html');
      changeURL('about_author.html', 'About me');
      break;

    case 'radio':
      loadPage('radio.html');
      changeURL('radio.html', 'Radio');
      break;
      
    case 'QQQQ':
      loadPage('questions_questions_questions_questions.html');
      changeURL('questions_questions_questions_questions.html', 'QQQQ');
      break;

    case 'LVLUP':
      loadPage('level_up_part_one.html');
      changeURL('level_up_part_one.html', 'LVLUP(pt1)');
      break;

    case 'ALLWORLD':
      loadPage('allworld.html');
      changeURL('allworld.html', 'ВЕСЬ МИР-ТЕАТР');
      break;

    case 'EARLY':
      loadPage('early-morning-and-euphoria.html');
      changeURL('early-morning-and-euphoria.html', 'EARLY MORNING AND EUPHORIA');
      break;
      
    case 'vk':
      window.location.href = "https://vk.com/carriageuknow";
      break;

    case 'sound':
      window.location.href = "https://soundcloud.com/carriageuknow";
      break;

    case 'band':
      window.location.href = "https://carriageuknow.bandcamp.com/";
      break;

    case 'sber':
      window.location.href = "https://www.sberbank.kz/ru/individuals";
      break;
      
    case 'qiwi':
      window.location.href = "https://qiwi.com/p/79506252527";
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
  } else if (location.pathname === '/questions_questions_questions_questions.html') {
    loadPage('questions_questions_questions_questions.html');
  } else if (location.pathname === '/level_up_part_one.html') {
    loadPage('level_up_part_one.html');
  } else if (location.pathname === '/allworld.html') {
    loadPage('allworld.html');
  } else if (location.pathname === '/early-morning-and-euphoria.html') {  
    loadPage('early-morning-and-euphoria.html');
  }  
}

addEl();

window.addEventListener('popstate', () => {
  addEl();
});