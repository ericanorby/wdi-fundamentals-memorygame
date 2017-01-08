console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";



var createCards = function(num) {
	var newBoard = document.getElementById('game-board');
	for (var i = 0; i < num; i++) {
		var addCard = document.createElement('div');
		addCard.className = 'card';
		newBoard.appendChild(addCard);
	}
}
console.log(createCards(4));




/*if (cardOne === cardFour) {
	alert("You found a match!");
} else if (cardTwo === cardThree) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}*/

