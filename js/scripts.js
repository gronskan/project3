$(document).ready(function() {
  $("#pingpong").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#number").val());
    var array = [];
    for (var index = 1; index <= inputNumber; index += 1) {
      array.push(index);
    };

    var array2 = []
    array.forEach(function(arr) {
      if (arr % 3 === 0 && arr % 5 ===0) {
        array2.push("Ping Pong");
      } else if (arr % 3 === 0) {
        array2.push("Ping");
      } else if (arr % 5 === 0) {
        array2.push("Pong");
      } else array2.push(arr);
    });

    $("#list").append("<li>" + (array2.join("</li> <li>")) + "</li>");
    (array2.join("</li> <li>").val(""));

    $("#list").text(list);

  });
});



  // $(document).ready(function() {
  //   $("#pingpong").submit(function(event) {
  //     event.preventDefault();
  //
  //     var inputNumber = parseInt($("input#number").val());
  //     var array = [];
  //     for (var index = 1; index <= inputNumber; index += 1) {
  //       array.push(index);
  //         var list = "<ul><li>" + array.join("</li><li>") + "</li></ul>";
  //         console.log(list)
  //       $("#list").text(list);
  //       };
  //     });
  //   });
