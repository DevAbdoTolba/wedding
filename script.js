



// HELP

let params = (new URL(document.location)).searchParams;
let name = params.get('name'); 
document.getElementById("h1").innerHTML = name;



var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
// function myFunction() {
//   if (video.paused) {
//     video.play();
//     btn.innerHTML = "Pause";
//   } else {
//     video.pause();
//     btn.innerHTML = "Play";
//   }
// }



//scroll

// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });



var option = 
{
    animation : true,
    delay : 5000
};

function Toasty( )
{
    var toastHTMLElement = document.getElementById( 'EpicToast' );
    
    var toastElement = new bootstrap.Toast( toastHTMLElement, option );
    
    toastElement.show( );
}

function scrollFunction1() {
  let e = document.getElementById("el1");
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
};



// function myFunction() {
//   /* Get the text field */
//   const copyText = '+20 111 411 71 64'

  

// }


// document.getElementById('copy').addEventListener("click", myFunction);