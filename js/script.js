'use strict';
(function ($) {
	$(document).ready(function() {
		let	id_song, Song, i,
		volume = 1, 
		songs = songe;
		
		for (i = 0; i < songs.length; i++) {
			$('.wrp').append('<div class="song" id="'+songs[i][0]+'"><div class="songH"></div><button class="play-pause_song"></button><div class="nameSong">'+songs[i][1]+'</div><div class="time">'+parseInt(songs[i][3]/60)+':'+parseInt(songs[i][3]%60)+'</div></div>');
		};

		function playNewSong(id) {		
			let curtime,
			cur = -100;
			$('.audio .nameSong_name').text(songs[id][1]);
			$('title').text(songs[id][1]);
			$('.play').attr('id', id);
			
			id_song = id;
			Song = new Audio(songs[id][2]);
			$('.play').css({'background':'url(img/icons/player/pause.png) no-repeat center top/cover'});
			$('.song#'+id+' .play-pause_song').css({'background':'url(img/icons/player/pausebutton.png) no-repeat center top/cover'});
			$('.albumcover').attr('src', songs[id][4]);
			$('.muzlog').attr('src', songs[id][4]);

			Song.play();
			if (!(localStorage.getItem('songs'))){
				console.log(4534)
			} else {
				console.log('fgdfg');
			}
			Song.volume = volume;
			Song.addEventListener('timeupdate', () => {
				curtime = Song.currentTime;
				cur = -((songs[id_song][3]-curtime)*100)/songs[id_song][3];
				$('.time_play').text(parseInt( curtime/60 )+':'+parseInt(curtime%60));
				$('.progress').css({'left':cur+'%'});
			});

			Song.addEventListener('load', () => {
				let load = Song.buffered.start(0);
				load = -((songs[id_song][3]-load)*100)/songs[id_song][3];
				$('.load').css({'left':load+'%'});
			});

			Song.addEventListener('ended', () => {
				Song = new Audio(songs[id++][3]);
				localStorage.setItem('song', JSON.stringify(songs[id]));
				localStorage.setItem('songs', JSON.stringify(songs));
				$('.play').css({'background':'url(img/icons/player/pause.png) no-repeat center top/cover'});
				$('.song#'+id+' .play-pause_song').css({'background':'url(img/icons/player/pausebutton.png) no-repeat center top/cover'});
				if (id != -1) {
					$('.play-pause_song').css({'background':'url(img/icons/player/playbutton.png) no-repeat center top/cover'});
				};
				Song.play();
				return playNewSong(id);
			});
		}		
		
		function playPauseSong(id) {			
			if (Song) {
				if (id == id_song) {
					if (Song.paused) {
						Song.play();
						Song.volume = volume;
						$('.play').css({'background':'url(img/icons/player/pause.png) no-repeat center top/cover'});
						$('.song#'+id+' .play-pause_song').css({'background':'url(img/icons/player/pausebutton.png) no-repeat center top/cover'});
					} else {
						Song.pause();
						$('.play').css({'background':'url(img/icons/player/play.png) no-repeat center top/cover'});
						$('.song#'+id+' .song').css({'background':'url(img/icons/player/playbutton.png) no-repeat center top/cover'});
					}
				}	else {
					Song.pause();
					$('.play-pause_song').css({'background':'url(img/icons/player/playbutton.png) no-repeat center top/cover'});
					$('.song#'+id+' .play-pause_song').css({'background':'url(img/icons/player/pausebutton.png) no-repeat center top/cover'});
					playNewSong(id);
					retrySong();
				}
			} else {
				return playNewSong(id);
			}
		}
		
		function retrySong() {
			if (Song.loop == false){
				Song.loop = true;
			} else {
				Song.loop = false;
				$('.repeat').css({'background':'url(../img/icons/player/repeat.png) no-repeat center top/cover'})
			}
		};

		$('.repeat').on('click', function() {
			let id = $(this).attr('data-id');
			if (id == -1) {
				$('.repeat').css({'background':'url(../img/icons/player/repeat_one.png) no-repeat center top/cover'})
				retrySong(id);
			}
		});
		
		$('.song, .play, .pause').on('click',function() {
			let id = $(this).attr('id');
			localStorage.setItem('song', JSON.stringify(songs[id]));
			localStorage.setItem('songs', JSON.stringify(songs));
			$('.play-pause_song').css({'background':'url(img/icons/player/playbutton.png)no-repeat center top/cover'});
			playPauseSong(id);
			id++;
			$('.nextbtn#next').attr('data-id', id);
			id--;id--;
			$('.prevbtn#prev').attr('data-id', id);
		});

		$('.nextbtn').on('click', function(){
			let id = $(this).attr('data-id');
			localStorage.setItem('song', JSON.stringify(songs[id]));
			localStorage.setItem('songs', JSON.stringify(songs));
			if (id != -1) {
				$('.play-pause_song').css({'background':'url(img/icons/player/playbutton.png) no-repeat center top/cover'});
				playPauseSong(id);
				id++;
				$('.nextbtn#next').attr('data-id', id);
				id--;id--;
				$('.prevbtn#prev').attr('data-id', id);
			}
		});

		$('.prevbtn').on('click', function() {
			let id = $(this).attr('data-id');
			if (id != -1) {
				$('.play-pause_song').css({'background':'url(img/icons/player/playbutton.png) no-repeat center top/cover'});
				playPauseSong(id);
				id++;
				$('.nextbtn#next').attr('data-id', id);
				id--;id--;
				$('.prevbtn#prev').attr('data-id', id);
			}
		});

		$('#myRange').on('change', function() {
			let val = $(this).val();
			if (Song){
				volume = val/100;
				Song.volume = volume;
			}
		});

		$('.range').on('mouseenter', function() {
	    if (Song) {
	      let id = $('.play').attr('id'),
	      offset = $(this).offset(),
	      dur = songs[id][3],
	      w = $(this).width();
	      $('.setTime').show();
	      $('.range').on('mousemove', function(e) {
	        let  x = e.pageX - offset.left,
	        xproc = (x*100)/w,
	        sec = (xproc*dur)/100;
	        $('.setTime').css({'left':x - 40});
	        $('.setTime').text(parseInt(sec/60)+':'+parseInt(sec%60));
	        $('.range').on('click', function() {
	          xproc = xproc-100;
	          $('.progress').css({'left':xproc+'%'});
	          Song.currentTime = sec;
	        })
	      });
	      $('.range').on('mouseout', function() {
	      	$('.setTime').hide();
	      })
	  	}
		});
		
		window.addEventListener('storage', function(){
				Song.pause();
				$('.play').css({'background':'url(img/icons/player/play.png) no-repeat center top/cover'});
				$('.play-pause_song').css({'background':'url(img/icons/player/playbutton.png) no-repeat center top/cover'});	
				console.log('Песня на паузе');
		})
	})
})(jQuery);