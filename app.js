//timeline is a powerful sequencing tool that acts as a container for tweens and other timelines, making it simple to control them as a whole and precisely manage their timing. 

//(default)Anything in the defaults object of a timeline gets inherited by its child animations when they get created, so if you find yourself setting the same ease or duration (or any value) over and over again, this can help make your code more concise.

//timeline 1 duration is 1/2 a second
var tl = gsap.timeline({
  default: { duration: 0.5, ease: 'none', opacity: 0 }
})


//timeline 2 duration is set at 1 with a 3 second delay
var tl2 = gsap.timeline({ default: { duration: 1, delay: 3 } });


//setting the position of the image
tl.from('.svg', { y: 40 })
  //setting the positions of the lines and bnt
  //create a gap (insert 1 second after end of timeline) this is for the screen
  .from('#screen', { y: 100 }, '+=0.2')
  //overlap end by 2 second
  .from('#line-1', { y: 100 }, '-=0.2')
  //overlap end by 1 second
  .from('#line-2', { y: 100 }, '-=0.1')
  .from('#line-3', { y: 100 }, '-=0.1')
  .from('#line-4', { y: 100 }, '-=0.1')
  //overlap end by 2 second
  .from('#btn', { y: 100 }, '-=0.2');


//Get a random number within a range (optionally rounding to an increment you provide), or a random element in an array.
tl2.to('.svg', {
  //random -chooses a random number between -50 and 50 for each target, rounding to the closest 5!
  // x and y are the positions
  x: 'random(-50, 50, 5)',
  y: 'random(-50, 50, 5)',
  // if you do -1 it will repeat infinitely
  repeat: -1,
  //yoyo -Gets or sets the timeline's yoyo state, where true causes the timeline to go back and forth, alternating backward and forward on each repeat.
  yoyo: true,
  // repeatRefresh - Setting repeatRefresh: true causes a repeating timeline to invalidate() all of its child tweens and re-record their starting/ending values internally on each full iteration (not including yoyo's). For example, x: "random(-50, 50)" would get a new random x value on each repeat.
  repeatRefresh: true

});









