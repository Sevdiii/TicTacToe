let fields = [];

let gameover = false;

let currentField = './x.png'

function fillfield(id) // id parameter jedesfeld gegeben bei onclick  
{

    if (!fields[id] && !gameover) {



        if (currentField == './x.png') // Wenn x geklickt ist dann ändern auf circle 
        {
            currentField = './circle.png'
            document.getElementById('turn-player1').classList.add('player-inactive');
            document.getElementById('turn-player2').classList.remove('player-inactive');


        } else {
            currentField = './x.png';
            document.getElementById('turn-player1').classList.remove('player-inactive');
            document.getElementById('turn-player2').classList.add('player-inactive');


        }
        fields[id] = currentField;

        draw();
        CheckForWin();
    }

    function draw() {
        for (let i = 0; i < fields.length; i++) {
            if (fields[i] == './circle.png') /*Wenn Feld Kreis ist ,dann soll er Display anzeigen */ {
                document.getElementById('circle' + i).classList.remove('d-none');
            }
            if (fields[i] == './x.png') {
                document.getElementById('x' + i).classList.remove('d-none');
            }
        }
    }

}

function CheckForWin() {

    let winner;

    //First Row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0]
        document.getElementById('line-0').style.transform = 'scaleX(1)'

    }
    //second Row
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3]
        document.getElementById('line-1').style.transform = 'scaleX(1)'
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6]
        document.getElementById('line-2').style.transform = 'scaleX(1)'
    }
    // Schiefe Row
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0]
        document.getElementById('line-6').style.transform = ' rotate(45deg) scaleX(1)'
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2]
        document.getElementById('line-7').style.transform = ' rotate(-45deg) scaleX(1)'
    }

    // first colum
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0]

        document.getElementById('line-3').style.transform = ' rotate(90deg) scaleX(1)'
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1]
        document.getElementById('line-4').style.transform = ' rotate(90deg)  scaleX(1)'
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2]
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)'
    }
    if (winner) {
        console.log('Gewonnen', winner);
        gameover = true;
        setTimeout(function() {

        }, 2000);
        document.getElementById('gameover').classList.remove('d-none');

        document.getElementById('restart-btn').classList.remove('d-none');
    }

}

function restart() {
    gameover = false;
    fields = [];
    document.getElementById('gameover').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');

    for (let i = 0; i < 8; i++) {
        document.getElementById('line-' + i).classList.add('d-none');
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle' + i).classList.add('d-none');
        document.getElementById('x' + i).classList.add('d-none');
    }



}