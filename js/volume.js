let volumeButon = document.querySelector('.volume-buttton'),
    volume = document.querySelector('.volume');
    
volumeButon.addEventListener('click', () => { 
  if (volume.style.display == 'flex'){
    return volume.style.display = 'none';
  } else {
    return volume.style.display = 'flex';
  }
});