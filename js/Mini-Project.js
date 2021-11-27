var choiceButtons = document.querySelectorAll('[data-selection]');
var column = document.querySelector('[data-final-column]');
var computerScore = document.querySelector('[data-computer-score]');
var playerScore = document.querySelector('[data-player-score]');
var options = [
    {
        name: 'rock',
        symbol: '🪨',
        defeats: 'scissors'
    },
    {
        name: 'rock',
        symbol: '🪨',
        defeats: 'lizard'
    },
    {
        name: 'paper',
        symbol: '📜',
        defeats: 'rock'
    },
    {
        name: 'paper',
        symbol: '📜',
        defeats: 'spock'
    },
    {
        name: 'scissors',
        symbol: '✂️',
        defeats: 'paper'
    },
    {
        name: 'scissors',
        symbol: '✂️',
        defeats: 'lizard'
    },
    {
        name: 'lizard',
        symbol: '🦎',
        defeats: 'paper'
    },
    {
        name: 'lizard',
        symbol: '🦎',
        defeats: 'spock'
    },
    {
        name: 'spock',
        symbol: '🖖',
        defeats: 'rock'
    },
    {
        name: 'spock',
        symbol: '🖖',
        defeats: 'scissors'
    }];

function randomSelection() {
    var randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
};

choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', e => {
        var selectionName = choiceButton.dataset.selection;
        var selection = options.find(selection => selection.name === selectionName);
        makeSelection(selection);
    });
});

function makeSelection(selection) {
    var computerSelection = randomSelection();
    var youWin = winner(selection, computerSelection);
    var pcWin = winner(computerSelection, selection);

    selectionResult(computerSelection, pcWin);
    selectionResult(selection, youWin);

    if(youWin) increment(playerScore);
    if(pcWin) increment(computerScore);

};

function selectionResult(selection, isWinner) {
    var div = document.createElement('div');
    div.innerText = selection.symbol;
    div.classList.add('result-selection');
    if (isWinner) div.classList.add('winner');
    column.after(div);
};

function winner(selection, opponentSelection) {
    return selection.defeats === opponentSelection.name;
};

function increment(score) {
    score.innerText = parseInt(score.innerText) + 1;
};