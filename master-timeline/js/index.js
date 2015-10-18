var bub = $('#sparkles polygon'),
    ripples = $('#ripples polygon');

TweenMax.set(ripples, {
      svgOrigin:"270 130"
    });

//animation that's repeated for all of the sections
function sceneOne() {
  var tl = new TimelineMax({
    repeat: -1
  });

  tl.add("begin");
  tl.staggerFromTo(bub, 2, {
      scale: 0,
      cycle:{
        opacity:[1, 0.4, 0.8, 0.7, 0.5],
        rotation:[180, 50, 90]
      },
      y: 60
    },{
      scale: 1.5,
      opacity: 0,
      rotation: 0,
      cycle:{
        y:[-50, -100, -250],
        rotation:[-180, -250, -300]
      }, 
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: Circ.easeOut
    }, 0.05, "begin");
  tl.staggerFromTo(ripples, 2, {
      scale: 0,
      opacity: 1,
      y: 20,
      x: 0
    },{
      scale: 1.5,
      opacity: 0,
      y: -20,
      x: -10,
      repeat: -1,
      ease: Sine.easeOut
    }, 0.1, "begin");

  //tl.timeScale(0.1);

  return tl;
}

var master = new TimelineMax();
master.add(sceneOne(), "scene1");
//to add more to this timeline, remove the semicolon from the previous line and add the following
//.add(sceneOne(), "scene1");