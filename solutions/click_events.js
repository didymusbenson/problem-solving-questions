/*Solution 1, Didymus*/
var colors = ["blue","red","orange","green"];
var buttons = document.querySelectorAll(".button");
for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", changeColor, false );
}

function changeColor(){
    console.log(this.dataset.index);
    var index = parseInt(this.dataset.index);
    this.classList.remove(colors[index]);
    index += 1;
    if (index === colors.length){
        index = 0;
    }
    this.classList.add(colors[index]);
    this.dataset.index = index;
}
