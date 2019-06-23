$(document).ready(function() {
  $("#pingpong").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#number").val());
    var array = [];
    for (var index = 1; index <= inputNumber; index += 1) {
      array.push(index);
    };

    var array2 = []
    array.forEach(function(num) {
      if (num % 3 === 0 && num % 5 === 0) {
        array2.push("Ping Pong");
      } else if (num % 3 === 0) {
        array2.push("Ping");
      } else if (num % 5 === 0) {
        array2.push("Pong");
      } else array2.push(num);
    });


    $("#list").append("<li>" + (array2.join("</li> <li>")) + "</li>");
    (array2.join("</li> <li>").val(""));

  });
});
