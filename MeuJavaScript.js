function Move(P1) {
    
    var P2 = Math.floor(Math.random() * 3);

    document.getElementById("stats").innerHTML = "P1= " + P1 + " e P2= " + P2;

    if (P1 == P2) {
        document.getElementById("resultado").innerHTML = "DRAW!!";
    }

    if (P1 == 0 && P2 == 1) {
        document.getElementById("resultado").innerHTML = "YOU WIN";
    }

    if (P1 == 0 && P2 == 2) {
        document.getElementById("resultado").innerHTML = "YOU LOSE";
    }

    if (P1 == 1 && P2 == 0) {
        document.getElementById("resultado").innerHTML = "YOU LOSE";
    }

    if (P1 == 1 && P2 == 2) {
        document.getElementById("resultado").innerHTML = "YOU WIN";
    }

    if (P1 == 2 && P2 == 0) {
        document.getElementById("resultado").innerHTML = "YOU WIN";
    }

    if (P1 == 2 && P2 == 1) {
        document.getElementById("resultado").innerHTML = "YOU LOSE";
    }


    //imagens do Move P1

    if (P1 == 0) {
        document.getElementById('imgM1').src = 'rock.png';
    }

    if (P1 == 1) {
        document.getElementById('imgM1').src = 'cissor.png';
    }

    if (P1 == 2) {
        document.getElementById('imgM1').src = 'paper.png';
    }


    //imagens do Move P2

    if (P2 == 0) {
        document.getElementById('imgM2').src = 'rock2.png';
    }

    if (P2 == 1) {
        document.getElementById('imgM2').src = 'scissor2.png';
    }

    if (P2 == 2) {
        document.getElementById('imgM2').src = 'paper2.png';
    }

    //próximo round

    document.getElementById('again').style.display = "block";
    document.getElementById('rock').style.display = "none";
    document.getElementById('scissor').style.display = "none";
    document.getElementById('paper').style.display = "none";
    document.getElementById('mym').style.display = "none";

}


function Clear() {
    document.getElementById('again').style.display = "none";
    document.getElementById('imgM1').src = 'nada.png';
    document.getElementById('imgM2').src = 'nada.png';
    document.getElementById('rock').style.display = "block";
    document.getElementById('scissor').style.display = "block";
    document.getElementById('paper').style.display = "block";
    document.getElementById('mym').style.display = "block";
}
