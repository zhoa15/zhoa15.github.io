$(document).ready(function(){
  MatchGame.renderCards(MatchGame.generateCardValues(),$('#game'));
});
var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var orderedArray = [];
  for(var i=1; i<9; i++){
    orderedArray.push(i);
    orderedArray.push(i);
  }
  console.log("orderedArray: "+orderedArray);
  var randomArray = [];
  var l = orderedArray.length;
  console.log("orderedArray.length: "+ l);
  while(l > 0) {
    var randomIndex = Math.floor(Math.random() * l);
    console.log("randomIndex: "+randomIndex);
    randomArray[l-1] = orderedArray[randomIndex];
    orderedArray.splice(randomIndex,1);
    l--;
  }
  return randomArray;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var colorArray = ['hsl(25,85\%,65\%)', 'hsl(55,85\%,65\%)','hsl(90,85\%,65\%)', 'hsl(160,85\%,65\%)', 'hsl(22,85\%,65\%)', 'hsl(265,85\%,65\%)', 'hsl(310,85\%,65\%)', 'hsl(360,85\%,65\%)'];
  $game.empty();
  for(var i=0; i<cardValues.length; i++){
    var $card = $('<div class="col-xs-3 card"></div>');
    $card.add('value', cardValues[0]);
    $card.add('flipped', false);
    $card.add('color', colorArray[cardValues[i]-1]);
    $('#game.row').append($card);
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
