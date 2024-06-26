function fillBoard (size) {
let board = document.querySelector(".board");
let squares = board.querySelectorAll('div')
squares.forEach(div => div.remove)
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
board.style.border = "1px solid black"
for(let i = 0; i<size*size; i++) {
    let square = document.createElement("div");
    square.style.border = "1px solid gray"
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "black"
    })
    square.style.background = 'white'
    board.insertAdjacentElement("beforeend", square)
};
};
fillBoard(16)
function changeSize(input) {
    if (input <= 100 && input >= 2) {
        fillBoard(input);
        alert(input + " x " +input)
    } else {
        alert("Your input has to be less than 100 or greater than 2")
    }
}
function reset() {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = "white")
}