function Restart() {
    window.location = "index.html"
}

let player = "O";
let w = document.getElementById("winner")
let game = true;

function checkwin() {
    let c0 = document.getElementById('cell0').innerHTML
    let c1 = document.getElementById('cell1').innerHTML
    let c2 = document.getElementById('cell2').innerHTML
    let c3 = document.getElementById('cell3').innerHTML
    let c4 = document.getElementById('cell4').innerHTML
    let c5 = document.getElementById('cell5').innerHTML
    let c6 = document.getElementById('cell6').innerHTML
    let c7 = document.getElementById('cell7').innerHTML
    let c8 = document.getElementById('cell8').innerHTML

    if ((c0 == player && c1 == player && c2 == player) || (c3 == player && c4 == player && c5 == player) ||
        (c6 == player && c7 == player && c8 == player) || (c0 == player && c3 == player && c6 == player) ||
        (c0 == player && c4 == player && c8 == player) || (c2 == player && c4 == player && c6 == player)) {
        w.innerHTML = player + "is the winner";
        game = false;

    }
}



function cell0() {
    let d = document.getElementById('cell0');
    if (game == true && d.innerHTML === "") { // Only allow changes if the cell is empty
        d.innerHTML = player;
        checkwin();
        if (game) player = player === "O" ? "X" : "O"; // Switch player if the game is ongoing
    }
}

function cell1() {
    let d = document.getElementById("cell1");
    if (game == true && d.innerHTML === "") {
        d.innerHTML = player;
        checkwin();
        if (game) player = player === "O" ? "X" : "O";
    }
}

function cell2() {
    let d = document.getElementById("cell2");
    if (game == true && d.innerHTML === "") {
        d.innerHTML = player;
        checkwin();
        if (game) player = player === "O" ? "X" : "O";
    }
}

function cell3() {
    let d = document.getElementById("cell3");
    if (game == true && d.innerHTML === "") {
        d.innerHTML = player;
        checkwin();
        if (game) player = player === "O" ? "X" : "O";
    }
}

function cell4() {
    let d = document.getElementById("cell4");
    if (game == true && d.innerHTML === "") {
        d.innerHTML = player;
        checkwin();
        if (game) player = player === "O" ? "X" : "O";
    }
}

function cell5() {
    let d = document.getElementById("cell5");
    if (game == true && d.innerHTML === "") {
        d.innerHTML = player;
        checkwin();
        if (game) player = player === "O" ? "X" : "O";
    }
}

function cell6() {
    let d = document.getElementById("cell6");
    if (game == true && d.innerHTML === "") {
        d.innerHTML = player;
        checkwin();
        if (game) player = player === "O" ? "X" : "O";
    }
}

function cell7() {
    let d = document.getElementById("cell7");
    if (game == true && d.innerHTML === "") {
        d.innerHTML = player;
        checkwin();
        if (game) player = player === "O" ? "X" : "O";
    }
}

function cell8() {
    let d = document.getElementById("cell8");
    if (game == true && d.innerHTML === "") {
        d.innerHTML = player;
        checkwin();
        if (game) player = player === "O" ? "X" : "O";
    }
}