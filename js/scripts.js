var numbers = [];
var nonprimeArray= [];

$(document).ready(function() {
  $("form#numbersWhatever").submit(function(event) {
    event.preventDefault();
    var n = $("input#userNum").val();

    //creates array
    for (i = 2; i <= n; i++) {
      numbers.push(i);
    }

    function nonprime() {
    	for (var j = 2; j <= 9; j++) {
      	for (var k = 2; k<= n; k++) {
       	nonprimeArray.push(j * k);
        }
    	}
    }
    nonprime();

    for (l = 0; l <= n; l++) {
    	for (d = 0; d <= nonprimeArray.length; d++)
    	if (numbers[l] === nonprimeArray[d]) {
      delete numbers[l];
      }
    }

    Array.prototype.clean = function(deleteValue) {
      for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
          this.splice(i, 1);
          i--;
        }
      }
      return this;
    };

    $("#output").text(numbers.clean(undefined));
    });

});
