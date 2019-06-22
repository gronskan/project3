$(document).ready(function() {
  $("#pingpong").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#number").val());
    var total = 0;
    for (var currentNumber = 1; currentNumber <= inputNumber; currentNumber += 1) {
      total += currentNumber;
    }

    var result = total;

    $("#answer").text(result);

  })
})
