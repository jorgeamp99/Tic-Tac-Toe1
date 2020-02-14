var control = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var turn = 1

function mark_box(name, position){
    var symbol
    if ( turn % 2 == 0 ){
        symbol = "X"
    }else{
        symbol = "O"
    }
    document.getElementById(name).innerHTML = symbol
    control[position - 1] = symbol
    if ((control[0] == "X" && control[1] == "X" && control[2] == "X") ||
    (control[3] == "X" && control[4] == "X" && control[5] == "X") ||
    (control[6] == "X" && control[7] == "X" && control[8] == "X") ||
    (control[0] == "X" && control[3] == "X" && control[6] == "X") ||
    (control[1] == "X" && control[4] == "X" && control[7] == "X") ||
    (control[2] == "X" && control[5] == "X" && control[8] == "X") ||
    (control[0] == "X" && control[4] == "X" && control[8] == "X") ||
    (control[2] == "X" && control[4] == "X" && control[6] == "X")){
        document.getElementById("message").innerHTML = "X WINS!"
    }
    if ((control[0] == "O" && control[1] == "O" && control[2] == "O") ||
    (control[3] == "O" && control[4] == "O" && control[5] == "O") ||
    (control[6] == "O" && control[7] == "O" && control[8] == "O") ||
    (control[0] == "O" && control[3] == "O" && control[6] == "O") ||
    (control[1] == "O" && control[4] == "O" && control[7] == "O") ||
    (control[2] == "O" && control[5] == "O" && control[8] == "O") ||
    (control[0] == "O" && control[4] == "O" && control[8] == "O") ||
    (control[2] == "O" && control[4] == "O" && control[6] == "O")){
        document.getElementById("message").innerHTML = "O WINS!"
    }
    turn = turn + 1

}