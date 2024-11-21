window.oncontextmenu=disablerightclick;
let scrollcontentpLength= document.getElementsByClassName("scrollcontentp")[0];
// let scrollcontentpWidth= document.getElementsByClassName("scrollcontentp")[0].clientWidth;
// let bodyWidth= document.getElementsByTagName("body")[0].clientWidth;
// let scrollcontentspan=document.getElementsByClassName("scrollcontentspan")[0];
// let newWidth=(bodyWidth*0.95)-130;

// scrollcontentpLength.style.width=scrollcontentpWidth+"px";

// alert(scrollcontentpWidth);

// alert(bodyWidth);

// alert(newWidth );

if(scrollcontentpLength.textContent.length < 215){
  document.getElementsByClassName("scrollcontentp")[0].style.width="250px";
  document.getElementsByClassName("scrollcontentp")[0].style.columnCount=1;

// if (screen.width < 768){
//   document.getElementsByClassName("scrollcontentp")[0].style.width=newWidth+"px";
//  }

}else if(scrollcontentpLength.textContent.length < 382){
  // alert(scrollcontentpLength.textContent.length);
  document.getElementsByClassName("scrollcontentp")[0].style.width= 450 +"px";

}else{
  document.getElementsByClassName("scrollcontentp")[0].style.width=750 +"px";
}


// alert(scrollcontentpLength.textContent.length);

function disablerightclick(){
        return false;
}

// document.getElementsByClassName("scrollcontent")[0].scrollLeft='300';
// document.getElementsByClassName("scrollcontentp")[0].style.width='657px';

document.getElementsByClassName('door1')[0].style.animationPlayState = "paused";

document.getElementsByClassName('door2')[0].style.animationPlayState = "paused";

document.getElementsByClassName('gate')[0].style.animationPlayState = "paused";

// document.getElementsByTagName('html')[0].style.animationPlayState = "paused";

document.getElementsByClassName('containerscroll')[0].style.animationPlayState = "paused";

document.getElementsByClassName('scrollcontent')[0].style.animationPlayState = "paused";

document.getElementsByClassName('scrollimg')[0].style.animationPlayState = "paused";


let image=document.getElementsByClassName('clanImg');
let p=document.getElementsByClassName('classimgname');

window.addEventListener('load' , function(){
  let preloader= document.getElementsByClassName('fullpage')[0];
  preloader.classList.add('iframeloader1');
  document.getElementsByClassName('door1')[0].style.animationPlayState = "running";

document.getElementsByClassName('door2')[0].style.animationPlayState = "running";

document.getElementsByClassName('gate')[0].style.animationPlayState = "running";

// document.getElementsByTagName('html')[0].style.animationPlayState = "running";
document.getElementsByTagName('body')[0].style.overflowY='scroll';


document.getElementsByClassName('containerscroll')[0].style.animationPlayState = "running";

document.getElementsByClassName('scrollcontent')[0].style.animationPlayState = "running";

document.getElementsByClassName('scrollimg')[0].style.animationPlayState = "running";
 //  preloader.style.display='none';
 
 
 });



    

for(let i=0; i<image.length; i++){
  image[i].onmouseover=displaypname;
  image[i].onmouseout=displayrname;

function displaypname(){
  p[i].classList.add('classimgnamed');
  image[i].style.boxShadow= "0px 0px 8px";
}

function displayrname(){
  image[i].style.boxShadow= "0 0 #0000";
  p[i].classList.remove('classimgnamed');
   p[i].add('classimgname');

}

}
