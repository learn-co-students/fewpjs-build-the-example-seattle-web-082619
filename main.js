// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal');
const likeSpans = document.getElementsByClassName('like-glyph');

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

function handleLikeClick() {
  document.addEventListener('click', (event) => {
    const clickedLiText = event.target.textContent;
    if (clickedLiText === `Like! ${FULL_HEART}`) {
      console.log("full heart and like");
      event.target.textContent = `Shit! ${EMPTY_HEART}`;
    } else if (clickedLiText === FULL_HEART) {
      console.log("just full heart");
      event.target.textContent = EMPTY_HEART;
    }
    
  });
}

document.addEventListener('DOMContentLoaded', () => {
  errorModal.setAttribute('class', 'hidden');
  handleLikeClick();

  //invoke fake server call
  mimicServerCall()
  .then((res) => {
    if (res === "Pretend remote server notified of action!") {
      for (const span of likeSpans) {
        span.classList.add('activated-heart');
        span.textContent = FULL_HEART;
      }
      handleLikeClick()
    }
  })
  .catch((error) => {
    console.log(error)
    showElement(errorModal);
    errorModal.textContent = error;
    setTimeout(() => {
      hideElement(errorModal);
    }, 5000);
  });
});

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.1;
      if (isRandomFailure) {
        reject("Random server error. Try again muthafucka!");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
