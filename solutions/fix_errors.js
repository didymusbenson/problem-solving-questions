var container = document.querySelector('.container');
var squares = ["blue", "red", "orange", "green"]

for (var i = 0; i < squares.length; i++){
    var new_square = document.createElement("div");
    new_square.classList.add('button');
    new_square.classList.add(squares[i]);
    container.appendChild(new_square);
}

var buttons = document.querySelectorAll(".button");
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", changeColor, false );
}

function changeColor(){
    var index;
    for (var i = 0; i < squares.length; i++){
        if (this.classList.contains(squares[i])){
            index = i;
        }
    }
    this.classList.remove(squares[index]);
    index += 1;
    if (index === squares.length){
        index = 0;
    }
    this.classList.add(squares[index]);
    this.dataset.index = index;
}
