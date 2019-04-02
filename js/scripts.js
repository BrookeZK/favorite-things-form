$(document).ready(function() {
  $("#questions").submit(function(event){
    var array1 = ['things1', 'things2', 'things3', 'things4', 'things5'];
    var array2 = [];
    // array1.forEach(function(thing) {
    //   var userInput = $("#" + thing).val();
    //   $('#display').append("<p>" + userInput + "</p>");
    // });
    for (var i = 0; i <= array1.length-1; i++) {
      var userInput = $("#" + array1[i]).val();
      $('#display').append("<p>" + userInput + "</p>");
      if (i === 0 || i === 1 || i === 2) {
        $("#listArea").append("<li>We also love " + userInput + "</li>")
      }
    }

    $("#answerArea").show();
    event.preventDefault();

    // array2.push(array1[0], array1[1], array1[2]);
    // $("#elementZero").text("We also love " + array2[0]);
    // $("#elementOne").text("We also love " + array2[1]);
    // $("#elementTwo").text("We also love " + array2[2]);
  });
});


//comments about talking through
//var userInput = $('#things1').val();
//array1[i] = array1[0] = things1
//userInput = "Whatever was typed in here"
//i = 0
