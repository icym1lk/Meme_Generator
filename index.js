document.addEventListener('DOMContentLoaded', function() {
   //create variables for DOM elements
   let url = document.querySelector('#url');
   let topText = document.querySelector('#topText');
   let bottomText = document.querySelector('#bottomText');
   let imgContainer = document.querySelector('.meme-container');
   
   function getMemeData() {
      document.addEventListener('submit', e => {
         e.preventDefault();
         postMemeData(url.value,topText.value,bottomText.value);
         //empty out text in DOM elements on submit
         url.value = '';
         topText.value = '';
         bottomText.value = '';
      });
   };

   function postMemeData(url,topText,bottomText) {
      let container = document.querySelector('.meme-container');
      let img = document.createElement('img');
      let memeDiv = document.createElement('div');
      let topTextDiv = document.createElement('div');
      let bottomTextDiv = document.createElement('div');
      let overlay = document.createElement('div');
      let overlayText = document.createElement('div');
      topTextDiv.innerText = topText;
      bottomTextDiv.innerText = bottomText;
      overlayText.innerText = "X"; 
      img.src = url;
      memeDiv.classList.add('meme');
      img.classList.add('image');
      topTextDiv.classList.add('topText');
      bottomTextDiv.classList.add('bottomText');
      overlay.classList.add('overlay');
      overlayText.classList.add('text');
      container.append(memeDiv);
      memeDiv.append(img);
      memeDiv.append(topTextDiv);
      memeDiv.append(bottomTextDiv);
      memeDiv.append(overlay);
      overlay.append(overlayText);
   };

   const removeMeme = function (e) {
      let item = e.target;
      if(item.innerText === "Don't Delete Me!") {
         item.parentElement.parentElement.remove();
      }
      else{
         item.parentElement.remove();
      };
   };

   getMemeData();
   //add event listener on div containing memes
   imgContainer.addEventListener('click', removeMeme, false);
});