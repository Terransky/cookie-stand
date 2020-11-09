'use strict';

var myContainer = document.getElementById('container');
var parentEl = document.getElementById('results');

function handleClick(event) {

// event
// event.target
// event.target.textContent
// event.target.id

  if (event.target.id === 'box-one') {
    var pEl = document.createElement('p');
    pEl.textContent = 'Box 1 was clicked!';
    parentEl.appendChild(pEl);
  }

  if (event.target.id === 'container') {
    var pEl = document.createElement('p');
    pEl.textContent = "Follow instructions!";
    parentEl.appendChild(pEl);
  })

}




myContainer.addEventListener('click', handleClick);
