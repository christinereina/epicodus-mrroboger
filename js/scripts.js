// business logic below

function robot(userInput) {

  var messages = ["Beep", "Boop", "Wont you be my neighbor"];

  var numbers = userInput.toString().split("");
  if (numbers.includes("3")) {
    return messages[2];
  } else if (numbers.includes("2")) {
    return messages[1];
  } else if (numbers.includes("1")) {
    return messages[0];
  } else 

  var list = [];

  for (var i = 1; i <= userInput; i++) {
    if (i === 1) {
      list.push(messages[0]);
    } else if (i === 2) {
      list.push(messages[1]);
    } else if (i === 3) {
      list.push(messages[2]);
    } else {
      list.push(i.toString());
    }
  }

  return list.join(", ");
}

// user interface logic below

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#user").val());
    var result = robot(userInput);
    $("#output").text(result);

  });
});