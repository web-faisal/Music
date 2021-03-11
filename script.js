let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Avem",
     path: "music/1.mp3",
     img: "img/avem.jpg",
     singer: "Artist : Alan Walker"
   },
   {
     name: "Sorry",
     path: "music/2.mp3",
     img: "img/sorry.jpg",
     singer: "Artist : Alan Walker"
   },
   {
     name: "Love me like you do",
     path: "music/love_me_like_you_do.mp3",
     img: "img/live me.jpg",
     singer: "Artist : Unknown"
   },
   {
     name: "Why Do I",
     path: "music/Unknown Brain - Why Do I_ (feat. Bri Tolani) _NCS Release_.mp3",
     img: "img/brain.jpg",
     singer: "Artist : Unknown Brain"
   },
   {
     name: "Crazy",
     path: "music/BEAUZ _ JVNA - Crazy _NCS Release_.mp3",
     img: "img/crazy.jpg",
     singer: "Artist : Beauz & Jvna"
   },
   {
	name: "Earth",
	path: "music/K-391 - Earth _NCS Release_.mp3",
	img: "https://pbs.twimg.com/media/Dz6gs0fWkAEpF50.jpg",
	singer: "Artist : K - 391"
  },
  {
   name: "Make me move",
   path: "music/Culture Code - Make Me Move (feat. Karra) [NCS Release].mp3",
   img: "img/make me move.jpg",
   singer: "Artist : Kara"
 },
 {
  name: "Safe & Sound",
  path: "music/DEAF KEV - Safe _ Sound with Sendi Hoxha _NCS Release_.mp3",
  img: "https://www.heidelberg24.de/bilder/2015/02/20/4750922/531209923-sendi-hexha-esc-clubnight-hamburg-19022015-2uUZgZRdIyac.jpg",
  singer: "Artist : DEAF KEV & Sendi Hoxha"
},
{
 name: "Savannah",
 path: "music/Diviners - Savannah (feat. Philly K) _NCS Release_.mp3",
 img: "img/diviners.jpg",
 singer: "Artist : Diviners"
},
{
 name: "Why Not Me",
 path: "music/Enrique Iglesias - Why Not Me (Lyrics Video).mp3",
 img: "img/why not me.jpg",
 singer: "Artist : Enrique Iglesias"
},
{
 name: "Lost",
 path: "music/Lost Sky - Lost _NCS Release_.mp3",
 img: "img/lost.jpg",
 singer: "Artist : Lost Sky"
},
{
 name: "I Wish",
 path: "music/yt1s.com - ROY KNOX  I Wish NCS Release.mp3",
 img: "img/roy knoxs .jpg",
 singer: "Artist : ROY KNOX"
},
{
 name: "Perfect 10",
 path: "music/Unknown Brain - Perfect 10 (feat. Heather Sommer) _NCS Lyric Video_.mp3",
 img: "img/brain.jpg",
 singer: "Artist : Unknown Brain"
},
{
 name: "TheChainsmokers",
 path: "music/The Chainsmokers _ Coldplay - Something Just Like This (Aspen Cover).mp3",
 img: "img/the smoken.jpg",
 singer: "Artist : Vidya Vox"
},
{
 name: "Faded",
 path: "music/Alan Walker feat. Iselin Solheim - faded Live.mp3",
 img: "img/avem.jpg",
 singer: "Artist : Alan Walker"
},
{
 name: "Fly Away",
 path: "music/TheFatRat - Fly Away feat. Anjulie.mp3",
 img: "img/flyaway_finloho.jpg",
 singer: "Artist : TheFatRat"
},
{
 name: "Firefiles",
 path: "music/K391  Alan Walker  Ignite feat Julie Bergan  Seungri Lyric Video.mp3",
 img: "img/fireflife.jpg",
 singer: "Artist : k-391 & Alan Walker"
},
{
 name: "Takeaway",
 path: "music/The Chainsmokers Illenium  Takeaway Lyrics ft Lennon Stella.mp3",
 img: "img/the.jpg",
 singer: "Artist : Lennon Stella & The Chainsmokers Illenium"
},
{
 name: "Castle",
 path: "music/Clarx  Harddope  Castle FM Release.mp3",
 img: "img/castle.jpg",
 singer: "Artist : Clarx  Harddope"
},
{
 name: "Lost Control",
 path: "music/Alan Walker  Lost Control Lyrics ft Sorana.mp3",
 img: "img/lost control.jpg",
 singer: "Artist : Alan Walker"
}
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }
