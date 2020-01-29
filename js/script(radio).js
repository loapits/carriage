'use-strict';
songe = [
	muz_1 = [0, 'архитектура - wet wheat bakery', 'media/radio/wet_wheat_bakery.mp3','175.5', 'img/covers/wet wheat bakery.jpg'],
	muz_2 = [1, 'архитектура - colours', 'media/radio/colours.mp3','128.5', 'img/covers/colours.jpg'],
	muz_3 = [2, 'архитектура - still failure u understand', 'media/radio/still_failure_u_understand.mp3','169', 'img/covers/still failure, u understand.jpg'],
	muz_4 = [3, 'Carriage - lvl up', 'media/radio/Carriage-lvl_up.mp3','210.5', 'img/covers/lvl up.jpg'],
	muz_5 = [4, 'Carriage - mogwai', 'media/radio/Carriage-mogwai.mp3','195.5', 'img/covers/mogwai.jpg'],
	muz_6 = [5, 'Carriage - finger cross', 'media/radio/Carriage-finger_cross.mp3','163.3', 'img/covers/finger cross.jpg'],
	muz_7 = [6, 'Carriage - try harder', 'media/radio/Carriage-try_harder.mp3','161', 'img/covers/try harder.jpg'],
	muz_8 = [7, 'Carriage - through my vibe', 'media/radio/Carriage-through_my_vibe.mp3','254.3', 'img/covers/through my vibe.jpg'],
	muz_9 = [8, 'Carriage - the way to what i always wanted', 'media/radio/Carriage-the_way_to_what_i_always_wanted.mp3','157.3', 'img/covers/the way to what i always wanted.jpg'],
	muz_10 = [9, 'Carriage - new era of ...', 'media/radio/Carriage-new_era_of.mp3','182', 'img/covers/new era of ....jpg'],
	muz_11 = [10, 'Carriage - 3D NOISE', 'media/radio/Carriage-3D_NOISE.mp3','187', 'img/covers/3D NOISE.jpg'],
	muz_12 = [11, 'rd22.10 Carriage - weeded autumn', 'media/radio/Carriage-weeded_autumn.mp3','179.9', 'img/covers/weeded autumn.jpg'],
	muz_13 = [12, 'Carriage - депрессивная музыка для модных', 'media/AllWorld/Carriage-depressive_music_for_fashion.mp3','94', 'img/covers/allworld.png'],
	muz_14 = [13, 'Carriage - Старайся не болеть, пожалуйста', 'media/AllWorld/Carriage-Try_not_to_get_sick_please.mp3','210.3', 'img/covers/allworld.png'],
	muz_15 = [14, 'Carriage - Та самая сокровищница', 'media/AllWorld/Carriage-That_Treasure_House.mp3','237.5', 'img/covers/allworld.png'],
	muz_16 = [15, 'Carriage - Стало Намного Лучше', 'media/AllWorld/Carriage-Got_Much_Better.mp3','147.7', 'img/covers/Got Much Better.jpg'],
	muz_17 = [16,  'Carriage - 36.6', 'media/AllWorld/Carriage-36.6.mp3','154', 'img/covers/allworld.png'],
	muz_18 = [17, 'Carriage - Интродакшн', 'media/LVLUP/Introducthion.mp3','141', 'img/covers/LEVEL UP.png'],
	muz_19 = [18, 'Carriage - Второй Трек На Альбоме', 'media/LVLUP/Second_track_for_album.mp3','252.5', 'img/covers/LEVEL UP.png'],
	muz_20 = [19, 'Carriage - Всё ещё накручиваешь себя', 'media/LVLUP/Still_winding_yourself.mp3','110.2', 'img/covers/LEVEL UP.png'],
	muz_21 = [20, 'Carriage - Кстати, ненависти не существует', 'media/LVLUP/By_the_way_hatred_does_not_exist.mp3','273.5', 'img/covers/LEVEL UP.png'],
	muz_22 = [21, 'Carriage - Одни дожди опять', 'media/LVLUP/Some_rains_again.mp3','169.5', 'img/covers/LEVEL UP.png'],
	muz_23 = [22, 'Carriage - Варп (Opale remix)', 'media/LVLUP/Warp.mp3','170.5', 'img/covers/LEVEL UP.png'],
	muz_24 = [23, 'Carriage - Утверждение или Восклицание', 'media/LVLUP/Approval_or_Exclamation.mp3','222', 'img/covers/LEVEL UP.png'],
	muz_25 = [24, 'Carriage - Away feat. Quallm', 'media/LVLUP/Away_feat_Quallm.mp3','165.5', 'img/covers/Away.jpg'],
	muz_26 = [25, 'Carriage - contrasting dark red', 'media/QQQQ/contrasting_dark_red.mp3','113', 'img/covers/QQQQ.jpg'],
	muz_27 = [26, 'Carriage - BROKEN DISPLAYS', 'media/QQQQ/BROKEN_DISPLAYS.mp3','156', 'img/covers/QQQQ.jpg'],
	muz_28 = [27, 'Carriage - 37.7 (so very highly much deep song yo)', 'media/QQQQ/37.7_(so_very_highly_much_deep_song_yo).mp3','147.6', 'img/covers/QQQQ.jpg'],
	muz_29 = [28, 'Carriage - I`M SO HIGH', 'media/QQQQ/I`M_SO_HIGH.mp3','150.5', 'img/covers/QQQQ.jpg'],
	muz_30 = [29, 'Carriage - FINGER CROSS pt.2', 'media/QQQQ/FINGER_CROSS_pt.2.mp3','205.5', 'img/covers/QQQQ.jpg'],
	muz_31 = [30, 'Carriage - i tropinka, i lesok', 'media/QQQQ/i_tropinka_i_lesok.mp3','198.5', 'img/covers/QQQQ.jpg'],
	muz_32 = [31, 'Carriage - deaf listeners without ears love us', 'media/QQQQ/deaf_listeners_without_ears_love_us_so_we_love_them_too.mp3','140.7', 'img/covers/QQQQ.jpg'],
	muz_33 = [32, 'Carriage - whose vintage copybook here', 'media/QQQQ/whose_vintage_copybook_here.mp3','229.5', 'img/covers/QQQQ.jpg'],
	muz_34 = [33, 'Carriage - sufferer (ft. wet cat)', 'media/QQQQ/sufferer_(ft. wet cat).mp3','144.1', 'img/covers/QQQQ.jpg'],
	muz_35 = [34, 'Carriage - you should', 'media/QQQQ/you_should.mp3','153.2', 'img/covers/QQQQ.jpg'],
	muz_36= [35, 'Carriage - feel it', 'media/QQQQ/feel_it.mp3','147.5', 'img/covers/QQQQ.jpg'],
	muz_37 = [36, 'Carriage - slower and slower', 'media/QQQQ/slower_and_slower.mp3','138.9', 'img/covers/QQQQ.jpg'],
	muz_38 = [37, 'Carriage - Слушай Это Идя По Ночному Городу', 'media/radio/Carriage-Listen_To_It_Walking_In_The_Night_City.mp3','196', 'img/covers/Listen To It Walking In The Night City.jpg']
];
