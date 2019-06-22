$(document).ready(function() {
  $("#pingpong").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#number").val());
    var total = 0;
    var array = [];
    for (var currentNumber = 1; currentNumber <= inputNumber; currentNumber += 1) {
      array.push(currentNumber);
    }
console.log(array);

    var result = total;

    $("#answer").text(result);

  })
})
