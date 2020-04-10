// business logic below

function robot(userInput) {

  var messages = ["Beep", "Boop", "Wont you be my neighbor"];
  var list = [];
  
  for (var i = 1; i <= userInput; i++) {
    var numbers = i.toString().split("");
    if (numbers.includes("1")) {
      list.push(messages[0]);
    } else if (numbers.includes("2")) {
      list.push(messages[1]);
    } else if (numbers.includes("3")) {
      list.push(messages[2]);
    } else {
      list.push(i.toString());
    }
  }
  return list.join(", ");
}

// user interface logic below

$(document).ready(function() {
  $("#neighborhood").click(function(event){
  $(".intro").hide();
  $(".second-screen").show();
  });

  $("#form").submit(function(event) {
      event.preventDefault();
    var userInput = parseInt($("input#user").val());
    var result = robot(userInput);
    $("#output").text(result);

  });
  $('#button').click(function(){
    $("#form")[0].reset();
});
});


















