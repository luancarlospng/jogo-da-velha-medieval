let score1 = 0;
let score2 = 0;

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    });
    colorBlock(playerTime)
});

function handleClick(e) {

    let celebration = document.querySelector('#celebration');

    let square = e.target;

    let position = square.id;

    let playerName;

    if(playerTime == 0){
        playerName = 'escudo'
    }else{
        playerName = 'espada'
    }

    if (handleMovie(position)) {

        setTimeout(() => { 
            celebration.play()
            alert('O jogador ' + playerName + ' foi o vencedor!')  
            addScore(playerName)
    }, 10);

    }
    updateSquare(position);
    colorBlock(playerTime)

};

function updateSquare(position) {
    square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`;
}

document.querySelector('.rsJogo').addEventListener('click',()=>{
    let squares = document.querySelectorAll('.square');
    let b4 = document.querySelector('.b4');
    let b2 = document.querySelector('.b2');

    b4.classList.remove('colorb4');
    b2.classList.add('colorb2');

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;
    squares.forEach((square) => {   
        square.innerHTML = '';
    });
});

document.querySelector('.rsPontos').addEventListener('click',()=>{
    score1 = 0
    score2 = 0
    document.querySelector('.b1').innerHTML = score1;
    document.querySelector('.b5').innerHTML = score2;
});



function  colorBlock(player) {
    let b2 = document.querySelector('.b2');
    let b4 = document.querySelector('.b4');
    if(player == 0){
        b4.classList.remove('colorb4');
        b2.classList.add('colorb2');
    }else{
        b2.classList.remove('colorb2');
        b4.classList.add('colorb4');
    }
    
}

function addScore(win){
    let b1 = document.querySelector('.b1');
    let b5 = document.querySelector('.b5');

    if(playerTime == 0){
        b1.innerHTML = ++score1
    }else{
        b5.innerHTML = ++score2
    }
    
}
