// document.addEventListener("DOMContentLoaded", function(event) { 
//     var myHeading = document.querySelector('h1');
//     myHeading.textContent = 'Hello world!';
//         //do work
//   });

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/smile.jpg') {
        myImage.setAttribute('src', 'images/noface.jpg');
    } else {
        myImage.setAttribute('src', 'images/smile.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

myButton.onclick = function () {
    setUserName();
}