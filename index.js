// Loading HTML Document for Navigation Bar
$(function(){
    $("#header").load("_header.html"); 
  });


// Only for Trial 
  //   $('.name-container').click(function(){
  //     $(this).css("color", "red");
  // });


  // backgroundColor Options = 374931 , 4A785E, Body Color = B4DAA7
  gsap.to(".main",{
    backgroundColor: "#374931",
    scrollTrigger:{
        trigger:".main",
        scroller: "body",
        start:"top -30%",
        end:"top -100%",
        scrub:2
    }
})