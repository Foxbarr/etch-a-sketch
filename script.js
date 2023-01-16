//variables
let numberOfSquares = 256;

function generateSquares(){
    for(i = 1; i<numberOfSquares.length; i++){
        const squareGen = document.createElement('div');
        console.log("square created");
    }
}
//adding divs to container
const squares = document.querySelector('#squares');
const squareGen = document.createElement('div');

squares.appendChild(squareGen);

//puts the squares inside a container
const squaresContainer = document.querySelector('#squaresContainer');
squaresContainer.appendChild(squares);