let color = 'black'
document.addEventListener("DOMContentLoaded", function(){
  createBoard(16)
  let btn = document.querySelector(".choose");
  btn.addEventListener("click", ()=>{
    size = getSize();
    createBoard(size)
  })
})
function createBoard(size) {
  let board = document.querySelector('.container');
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`
  let numDiv = size * size;
  for( let i=0; i<numDiv; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', colorDiv)
    board.insertAdjacentElement('beforeend',div)
  }
}

function getSize() {
  let select = prompt('Enter size of the board: ');
  let message = document.querySelector("#p");
  if(select == '') {
    
    message.textContent = 'Please provide a number';
  }else if(select < 1 || select > 100) {
    message.textContent = 'Please provide a Number 1 and 100'
  }else {
    message.textContent = 'Play Now'
    return select
  }
}

function colorDiv() {
  if(color == 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }else {
    this.style.backgroundColor = 'black'
  }
}

function setColor(colorChoise) {
  color = colorChoise
}

function setReset() {
  let divs = document.querySelectorAll('div');
  divs.forEach((div) => div.style.backgroundColor = 'white')
}