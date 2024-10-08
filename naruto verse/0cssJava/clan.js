let image=document.getElementsByClassName('clanImg');
let p=document.getElementsByClassName('classimgname');

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