let listcontainer= document.getElementsByClassName("landmem")[0];
  let overflowcharacter= document.getElementsByClassName("listofcharacterwrap")[0];

  let titlelist= document.getElementsByClassName("titlecharacterlist")[0];


window.onresize=listheight;




function listheight(){


   updates=listcontainer.clientHeight-overflowcharacter.clientHeight;

  let newheight=overflowcharacter.clientHeight-updates;
  overflowcharacter.style.height=newheight+"px";
  // listcontainer.style.display='none';
  
  //  alert(newheight+"px");
}