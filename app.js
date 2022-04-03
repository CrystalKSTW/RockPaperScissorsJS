const selectionBtns = document.querySelectorAll('[data-selection]');
const fianlColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const containerDiv = document.querySelector("container");
const SELECTION = [
    {
        name:'rock',
        img: "img/hand-back-fist-solid.svg",
        beats:'scissors'
    },
    {
        name:'paper',
        img: "img/hand-solid.svg",
        beats:'rock'
    },
    {
        name:'scissors',
        img: "img/hand-scissors-solid.svg",
        beats:'paper'
    }
];

selectionBtns.forEach(selectionBtn => {
    selectionBtn.addEventListener('click',e => {
        const selectionName = selectionBtn.dataset.selection
        const selection = SELECTION.find(selection => selection.name === selectionName)
        makeSelection(selection);
    });
});

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const youWin = isWinner(selection, computerSelection)
    const computerWin = isWinner(computerSelection, selection)
    

    addSelectionResults(computerSelection, computerWin)
    addSelectionResults(selection, youWin)

    if (youWin) addScore(yourScoreSpan);
    if (computerWin) addScore(computerScoreSpan);

};


function isWinner (selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
};



function addScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1;
}



function addSelectionResults (selection, winner) {
    const div = document.createElement('div')
    div.innerHTML= `<img class="computerWeapon" src=${selection.img} >`
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    fianlColumn.after(div)
}


function randomSelection() {
    const randomIndex = Math.floor( Math.random() * SELECTION.length )
    return SELECTION[randomIndex]
};


