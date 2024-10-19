window.addEventListener('load' , function(){
  let preloader= document.getElementsByClassName('fullpage')[0];
  preloader.classList.add('iframeloader1');
 //  preloader.style.display='none';
 
 
 });

let buttono= document.getElementById('characterlistAO');
buttono.onclick= displaychatacterListO;

let buttonc= document.getElementById('characterlistAC');
buttonc.onclick= displaychatacterListC;



let hand = document.getElementsByClassName('handpointed')[0];

let clanname = document.getElementsByClassName('clanname');

for(let a=0; a<clanname.length; a++){
clanname[a].onmouseover=handgone;

function handgone(){
  hand.style.display='none';
}}


// clansbutton
// slideimages
// let buttonB= document.getElementById('mainbody');
// buttonB.onclick= displaychatacterListC;

let buttonIc= document.getElementById('iframecover');
buttonIc.onclick= displaychatacterListC;

let buttonoc= document.getElementById('characterlistAOcontainer');


function displaychatacterListO(){
    // buttonoc.style.display= "none";
  let characterlist = document.getElementById('characterlist');
  let buttonm= document.getElementById('landmenu');
buttonm.onclick= displaychatacterListC;
  characterlist.classList.add('landmem');
  characterlist.style.display= "block";
  buttonIc.style.display= "block";
 
}


function displaychatacterListC(){
    // buttonoc.style.display= "block";
  let characterlist = document.getElementById('characterlist');
  // characterlist.classList.remove('landmem');
  characterlist.classList.add('landmems');
  setTimeout(function() {
    characterlist.style.display= "none";
    characterlist.classList.remove('landmems');
  }, 450);
  buttonIc.style.display= "none";
}


let clansbutton = document.getElementsByClassName('fclansbutton');
let slideimages =document.getElementsByClassName("slideimages");



for (let i = 0; i < slideimages.length; i++) {


  clansbutton[i].onclick=clickslide;

  function clickslide(){
    clearTimeout(myTimeout);

    for (let x = 0; x< slideimages.length; x++) {
      slideimages[x].style.display = "none";  
      clansbutton[x].style.backgroundColor= "";
    }

    slideimages[slideimages.length-1-i].style.display = "block";
    clansbutton[i].style.backgroundColor= "grey"; 

    myTimeout= setTimeout(slideshow, 8000)
  }



  let add=0;
  window.onload=slideshow;

  function slideshow(){


  for (let o = 0; o < slideimages.length; o++) {
    slideimages[o].style.display = "none";  
    clansbutton[o].style.backgroundColor= ""; 
  }

  add++;
  if (add > slideimages.length) {add = 1}

  // slideimages[add-1].classList.add("sliding")
  slideimages[add-1].style.display = "block";
  clansbutton[slideimages.length-add].style.backgroundColor= "grey";


  myTimeout = setTimeout(slideshow, 4000);
  }
}

// let thisimages=document.getElementsByTagName('img');
// for(let u=0; u<thisimages.length; u++){
//   thisimages[u].src.toLowerCase();
// }




