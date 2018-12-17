// Business Logic
// create player constructor
function Players(username, diceScores, totalScores, overallScores) {
  this.username = username;
  this.diceScores = 0;
  this.totalScores = 0;
  this.overallScores = 0;
}
// Create Random Number Generator
function resetFields() {
  var player1 = $("input#player1-userName").val("");
  var player2 = $("input#player2-userName").val("");
}
Players.prototype.roll = function() {
  var diceRoll = Math.floor((Math.random() * 6) + 1); // removes decimal 

  if (diceRoll === 1) {
    this.totalScores = 0;
    alert(" Your turn is over! you got")
  } else {
    this.totalScores += diceRoll;
  }
  return diceRoll;
  //console.log(randomNumber);
};

Players.prototype.hold = function() {
  this.overallScores += this.totalScores;
  this.totalScores = 0;
  return this.overallScores;

};
document.body.style.backgroundColor = 'lightblue';
console.log(document.body.style.backgroundColor);
// "lightblue"

//user interface
