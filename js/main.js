const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumpring = false;
let isGameOver = false;
let position = 0;

function handleKey(event){
    if(event.keyCode === 32){
        if(!isJumpring){
            jump();
        } 
    }
}

function jump(){
    isJumpring = true;

    let upInterval = setInterval(() => {
        if(position>=160){

            clearInterval(upInterval);

            let downInterval = setInterval(() => {

                if(position <=0){
                    clearInterval(downInterval);
                    isJumpring=false;
                }else{
                    position-=10;
                    dino.style.bottom = position+'px';
                }
            }, 30);
        }else{ 

            position+=10;
            dino.style.bottom = position+'px';
        }
    }, 30);
}

function createCactus(){

    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = cactusPosition+'px';

    let leftTimer = setInterval(() => {

        if (cactusPosition < -60) {

        clearInterval(leftTimer);
        background.removeChild(cactus);

        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {


        clearInterval(leftTimer);
        isGameOver = true;        
        document.body.innerHTML = '<h2 class="game-over">Fim de jogo</h2>';

        } else {

            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);