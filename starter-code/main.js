console.log("JS file is connected to HTML! Woo!")

var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var createCards = function() {
	var newBoard = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		var addCard = document.createElement('div');
		addCard.className = 'card';
		addCard.setAttribute('data-card',cards[i]);
		addCard.addEventListener('click',flipCard);
		newBoard.appendChild(addCard);	
	}	
}

var flipCard = function() {
	var thisCard = this.getAttribute('data-card');
	cardsInPlay.push(thisCard);
	if (thisCard === 'queen') {
		this.innerHTML = '<img src="queen.jpg">';
	} else {
		this.innerHTML = '<img src="king.jpg">';
	}
	if (cardsInPlay.length === 2) {
		setTimeout(isMatch, 200);	
	} else if (cardsInPlay.length === 4) {
		setTimeout(isMatchTwo, 200);
	}
}

var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
		clearBoard();
		cardsInPlay = [];
	}
}

var isMatchTwo = function() {
	if (cardsInPlay[2] === cardsInPlay[3]) {
		alert("You matched all the cards! The board will be cleared.");
		clearBoard();
		cardsInPlay = [];
	}
}

var clearBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	document.getElementsByClassName('card')[i].innerHTML=' ';
	}	
}

createCards();
