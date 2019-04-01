$(document).ready(function() {
  $("#questions").submit(function(event){
    var things1Input = $("#things1").val();
    var things2Input = $("#things2").val();
    var things3Input = $("#things3").val();
    var things4Input = $("#things4").val();
    var things5Input = $("#things5").val();

    var array1 = [things1Input, things2Input, things3Input, things4Input, things5Input];

    $("#answerArea").show();
    $("#display").text(array1);
    event.preventDefault();

    var array2 = [];
    array2.push(array1[0], array1[1], array1[2]);
    $("#elementZero").text("We also love " + array2[0]);
    $("#elementOne").text("We also love " + array2[1]);
    $("#elementTwo").text("We also love " + array2[2]);
  });
});
