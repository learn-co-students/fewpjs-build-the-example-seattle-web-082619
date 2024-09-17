// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const url="http://mimicServer.example.com"
 
document.addEventListener('DOMContentLoaded', () => {
  clickHeart();
});

function clickHeart() {
  mimicServerCall(url, {})
  .then( () => {
    hearts.forEach( (heart) => {
      heart.addEventListener('click', changeHeart);
    })
  })
  .catch( (error) => {error.classList.remove("hidden")})
  let hearts = document.querySelectorAll('span.like-glyph');
}

function changeHeart() {
  if (this.innerText === EMPTY_HEART) {
    this.innerText = FULL_HEART
    this.classList.add("activated-heart")
  } else {
    this.innerText = EMPTY_HEART
    this.classList.remove("activated-heart")
  }
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
