'use strict';
let volumeButon = document.querySelector('.volume-buttton'),
    volume = document.querySelector('.volume');
    
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
