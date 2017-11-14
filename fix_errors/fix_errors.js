var container = document.querySelector('#container'); // Should be ".container"
var squares = {"blue", "red", "orange", "green"} // Should be square brackets

for (var i = 0; i <= squareslength; i++){ // Should be "squares.length"
    var new_square = document.createElement("<div>"); // Should be "div"
    new_square.classList.add('button');
    new_square.classList.add(squares[i]);
    container.innerHTML = new_square; // Should be "container.appendChild(new_square)"
}

var buttons = document.querySelectorAll(".button");
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", changeColors, false ); // should be "changeColor"
}

function changeColor(){
    var index;
    for (var i = 0; i < squares.length; i++){
        if (this.classList.contains(squares[i])){
            index = i;
        }
    }
    this.classlist.remove(squares[index]); // Should be "this.classList.remove" (capital L)
    index += 1;
    if (index === squares.length){
        index = 0;
    }
    this.classList.add(squares[index]);
}
