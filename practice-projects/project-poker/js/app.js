document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('#start-button');
    const river = document.querySelector('#river');
    const cards = document.querySelectorAll('.card');
    const cardOne = document.querySelector('#card-back-1');
    const cardOneReveal = () => {
        cardOne.src = 'images/card_spades_A.png';
    };
    const cardTwo = document.querySelector('#card-back-2');
    const cardTwoReveal = () => {
        cardTwo.src = 'images/card_spades_K.png';
    };
    const cardThree = document.querySelector('#card-back-3');
    const cardThreeReveal = () => {
        cardThree.src = 'images/card_spades_Q.png';
    };
    const cardFour = document.querySelector('#card-back-4');
    const cardFourReveal = () => {
        cardFour.src = 'images/card_spades_J.png';
    };
    const cardFive = document.querySelector('#card-back-5');
    const cardFiveReveal = () => {
        cardFive.src = 'images/card_spades_10.png';
    };

    startButton.addEventListener('click', () => {
        startButton.classList.toggle('stop-button');
        river.classList.toggle('river-start-game');
        if(startButton.textContent === "PLAY"){
            startButton.textContent = "STOP";
            cardOne.addEventListener("click", cardOneReveal);
            cardTwo.addEventListener("click", cardTwoReveal);
            cardThree.addEventListener("click", cardThreeReveal);
            cardFour.addEventListener("click", cardFourReveal);
            cardFive.addEventListener("click", cardFiveReveal);
        }else if(startButton.textContent === "STOP"){
            startButton.textContent = "PLAY";
            cardOne.src = 'images/card_back.png';
            cardTwo.src = 'images/card_back.png'; 
            cardThree.src = 'images/card_back.png'; 
            cardFour.src = 'images/card_back.png'; 
            cardFive.src = 'images/card_back.png';
            cardOne.removeEventListener("click",cardOneReveal);
            cardTwo.removeEventListener("click",cardTwoReveal);
            cardThree.removeEventListener("click", cardThreeReveal);
            cardFour.removeEventListener("click", cardFourReveal);
            cardFive.removeEventListener("click", cardFiveReveal);
        }
    });
    
    cards.forEach(img => 
        img.addEventListener("mouseover", () =>{
        img.style.transform = "scale(1.2)";
        img.addEventListener("mouseout", () =>{
            img.style.transform = "scale(1)";
        });
    }));
});