$(document).ready(function() {
  $("#pingpong").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("input#number").val());
    var array = [];
    for (var index = 1; index <= inputNumber; index += 1) {
      
      array.push(index);

    };

    $("#list").append("<li>" + (array.join("</li> <li>")) + "</li>");
    (array.join("</li> <li>").val(""));

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
