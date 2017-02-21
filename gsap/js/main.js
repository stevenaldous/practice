TweenMax.from(".logo", 3, {
  top:300,
  x:300,
  rotation:360,
  scale:1.5,
});
TweenMax.staggerFrom(".box", 2,{
  opacity:0,
  delay:1,
  rotation:720,
  x:400
}, 0.25);
// TweenMax.to(".logo, .box", .5 , {
//   opacity: 0,
//   delay: 3.5,
//   onComplete:complete
// });

// function complete(){
//   alert("Animation is complete!");
// };
TweenLite.to(window, 2, {scrollTo:400,delay:4});
