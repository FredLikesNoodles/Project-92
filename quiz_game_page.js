function send() {
  n1 = document.getElementById("number1").value;
  n2 = document.getElementById("number2").value;
  actual_answer = parseInt(n1) * parseInt(n2);
  Qn = "<h4>" + n1 + " X " + n2 + "</h4>";
  IB = "<br> Answer : <input type='text' id='input_check_box'>";
  Cb =
    "<br> <br> <button class='btn btn-success' onclick='check()'>Check</button>";
  row = Qn + IB + Cb;
  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check() {
  get_answer = document.getElementById("input_check_box").value;
  if (get_answer == actual_answer) {
    if (answer_turn == "player1") {
      player1_score = player1_score + 1;
      document.getElementById("player1_score").innerHTML = player1_score;
    } else {
      player2_score = player2_score + 1;
      document.getElementById("player2_score").innerHTML = player2_score;
    }
  }

  if (question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("player_question").innerHTML =
      "Question Turn - " + u2name;
  } else {
    question_turn = "player1";
    document.getElementById("player_question").innerHTML =
      "Question Turn - " + u1name;
  }

  if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML =
      "Answer Turn - " + u2name;
  } else {
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML =
      "Answer Turn - " + u1name;
  }

  document.getElementById("output").innerHTML = "";
}
