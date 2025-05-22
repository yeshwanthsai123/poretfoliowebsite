const scroll=new LocomotiveScroll({
    el:document.querySelector("#main"),
    smooth:true,

});
function updateTime() {
  const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
  };
  const formatter = new Intl.DateTimeFormat([], options);
  const time = formatter.format(new Date());
  document.getElementById('time').innerText = time;
}

updateTime();
setInterval(updateTime, 1000);

document.addEventListener('DOMContentLoaded', function() {
  const scrollUpButton = document.getElementById('scrollUpButton');
  const scrollDownButton = document.getElementById('scrollDownButton');
  const scrollAmount = 200; // Adjust this value for the amount to scroll

  scrollUpButton.addEventListener('click', function() {
      window.scrollBy({
          top: -scrollAmount,
          behavior: 'smooth'
      });
  });

  scrollDownButton.addEventListener('click', function() {
      window.scrollBy({
          top: scrollAmount,
          behavior: 'smooth'
      });
  });
});
var timeout;
function fPAnimation(){
    var t1=gsap.timeline();

    t1.from(".boundingelem",{
        opacity:0,
        y:'-10',
        ease:Expo.easeInOut,
        duration:2,
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        stagger:.2
    })
    t1.from("#herofooter",{
        opacity:0,
        y:'-10',
        delay:-1,
        ease:Expo.easeInOut,
        duration:1.5,
    })
    t1.from(".elem",{
        opacity:0,
        y:'-10',
        delay:-1,
        ease:Expo.easeInOut,
        duration:1.5,
    })
}
fPAnimation();
document.addEventListener('mousemove', function(dets) {
  var circle = document.getElementById('minicircle');

  // Animate position
  gsap.to(circle, {
      duration: 0.1,
      x: dets.clientX,
      y: dets.clientY
  });

  // Animate scale
  gsap.to(circle, {
      duration: 0.1,
      scaleX: 1.2,
      scaleY: 0.8,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut"
  });
});
function changeAboutMeText(){

  const aboutMeTexts=["designer","developer","student"];
  const typingspeed=100;
  const erasespeed=50;
  const pausetime=1500;
  const aboutmeElement=document.querySelector(".aboutme");
  let tindex=0;
  let cindex=0;
  let isdel=false;
 
  function type(){
      curtext=aboutMeTexts[tindex];
      if(!isdel&&(cindex<curtext.length)){
          aboutmeElement.textContent+=curtext[cindex];
          cindex++;
          setTimeout(type,typingspeed);
      }
      else if(isdel&&(cindex>0)){
       aboutmeElement.textContent=curtext.substring(0,cindex-1);
       cindex--;
       setTimeout(type,erasespeed);
      }
      else{
          isdel=!isdel;
          if(!isdel){
              tindex=(tindex+1)%aboutMeTexts.length;
          }
          setTimeout(type,pausetime);
      }
  }
      type();
}
changeAboutMeText();

/*

function circleChaptaKaro() {
     define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }
  function cmfollow(){
    window.addEventListener("mousemove",function(dets){


      //  console.log(dets.clientX,dets.clientY);//
        document.querySelector(
          "#minicircle"
        ).style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    }
    );
}

  circleChaptaKaro();
  
cmfollow();
*/

document.querySelectorAll(".elem").forEach(function(elem){
  var rotate = 0;
  var diffrot = 0;
elem.addEventListener("mousemove",function(dets){
  gsap.to(document.querySelector("#minicirlcle"),{
    opacity:0
  })
})

  elem.addEventListener("mouseleave", function (dets) {

    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
  elem.addEventListener("mousemove",function(dets){
    var diff=dets.clientY-elem.getBoundingClientRect().top;
    diffrot =dets.clientX-rotate;
    rotate =dets.clientX;
   gsap.to(elem.querySelector("img"),{
    opacity:1,
    ease:Power3,
    top:diff,
    left:dets.clientX,
    rotate:gsap.utils.clamp(-20,20,diffrot*.5),
   });
  });
});
/*
document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;
 
  elem.addEventListener("mouseleave", function (dets) {
    console.log(dets.clientX,dets.clientY);
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
     
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
*/
