"use strict";let initialPoint,finalPoint,header=document.querySelector("header"),navigationButton=document.querySelector(".navigation-button"),navigation=document.querySelector(".navigation"),main=document.querySelector("main"),hi=document.querySelector(".hi"),title=document.querySelector(".header-title"),footer=document.querySelector("footer"),navigationButtonTwo=document.querySelector(".navigation-button-two");function hideNavigation(){setTimeout(()=>{navigation.style.left="-400px",main.style="opacity: 1",hi.style="opacity: 1",title.style="opacity: 1",footer.style="opacity: 1",setTimeout(()=>{navigationButtonTwo.style.display="flex"},300)},100)}function showNavigation(){setTimeout(()=>{navigation.style.left="0",navigationButtonTwo.style.display="none",main.style="opacity: 0.4",hi.style="opacity: 0.4",title.style="opacity: 0.4",footer.style="opacity: 0.4"},100)}navigationButtonTwo.addEventListener("click",()=>{showNavigation()}),navigationButton.addEventListener("click",()=>{hideNavigation()}),header.addEventListener("touchstart",event=>{initialPoint=event.changedTouches[0]}),header.addEventListener("touchend",event=>{finalPoint=event.changedTouches[0];let xAbs=Math.abs(initialPoint.pageX-finalPoint.pageX),yAbs=Math.abs(initialPoint.pageY-finalPoint.pageY);(xAbs>100||yAbs>100)&&xAbs>yAbs&&(finalPoint.pageX<initialPoint.pageX?hideNavigation():showNavigation())});