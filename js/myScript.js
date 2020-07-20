$(document).ready(function(){
    var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    var suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
    var deck = [];
  
   suits.forEach(function(suit){
      cards.forEach(function(card){
        deck.push(card + " of " + suit);
      });
    });
  
    deck.forEach(function(rank){
        $(".cards").append("<li>" + rank);
      });
      alert("Here's the deck");
    });
  
   