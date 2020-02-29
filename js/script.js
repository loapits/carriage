'use strict';
let songs = songe, i, initialPoint,	finalPoint,
    link = document.querySelectorAll('.link'),
    header = document.querySelector('header'),
    navigationButton = document.querySelector('.navigation-button'),
    navigation = document.querySelector('.navigation'),
    main = document.querySelector('main'),
    hi = document.querySelector('.hi'),
    title = document.querySelector('.header-title'),
    footer = document.querySelector('footer'),
    navigationButtonTwo = document.querySelector('.navigation-button-two'),
    slider = document.querySelector('#myRange'),
    output = document.querySelector('#value'),
    volumeButon = document.querySelector('.volume-buttton'),
    volume = document.querySelector('.volume');

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
 
function createPlaylist(a, c) {
	setTimeout(() => {
    for (i = a; i < c; i++) {
      $('.wrp').append('<div class="song" id="'+songs[i][0]+'"><div class="songH"></div><button class="play-pause_song"></button><div class="nameSong">'+songs[i][1]+'</div><div class="time">'+parseInt(songs[i][3]/60)+':'+parseInt(songs[i][3]%60)+'</div></div>');
    }
  },200);
}

function appendPlaylist() {
  if (location.pathname === '/index.html') {
    createPlaylist(0, songs.length);
  } else if (location.pathname === '/updates.html') {
    createPlaylist(0, songs.length);
  } else if (location.pathname === '/about_author.html') {
    createPlaylist(0, songs.length);
  } else if (location.pathname === '/radio.html') {
    createPlaylist(0, songs.length);
  } else if (location.pathname === '/questions_questions_questions_questions.html') {
    createPlaylist(25, 37);
  } else if (location.pathname === '/level_up_part_one.html') {
    createPlaylist(17, 25);
  } else if (location.pathname === '/allworld.html') {
    createPlaylist(12, 17);
  } else if (location.pathname === '/early-morning-and-euphoria.html') {  
    createPlaylist(38, 46);
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

function addElement() {
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

addElement();

window.addEventListener('popstate', () => {
  addElement();
});

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

function hideNavigation() {
  setTimeout(() => {
    navigation.style.left = '-400px';
    main.style = 'opacity: 1';
    hi.style = 'opacity: 1';
    title.style = 'opacity: 1';
    footer.style = 'opacity: 1';
    setTimeout(() => {
      navigationButtonTwo.style.display = 'flex';
    }, 300);
  }, 100);
}

function showNavigation() {
  setTimeout(() => {
    navigation.style.left = '0';
    navigationButtonTwo.style.display = 'none';
    main.style = 'opacity: 0.4';
    hi.style = 'opacity: 0.4';
    title.style = 'opacity: 0.4';
    footer.style = 'opacity: 0.4';
  }, 100);
  
}

navigationButtonTwo.addEventListener('click', () => {
  showNavigation();
});

navigationButton.addEventListener('click', () => {
  hideNavigation();
});

header.addEventListener('touchstart', event => {
	initialPoint = event.changedTouches[0];
});

header.addEventListener('touchend', event => {
	finalPoint = event.changedTouches[0];
	let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
	let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
	if (xAbs > 100 || yAbs > 100) {
		if (xAbs > yAbs) {
			if (finalPoint.pageX < initialPoint.pageX) {
				hideNavigation();
			}	else {
        showNavigation();
			}
		}
	}
});


document.addEventListener('click', event => { 
  if (event.target === volumeButon){
    if (volume.style.display == 'flex'){
      return volume.style.display = 'none';
    } else {
      return volume.style.display = 'flex';
    }
  } else {
      return volume.style.display = 'none';
  }
});
