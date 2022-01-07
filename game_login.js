function adduser() {
  window.location = "quiz_game_page.html";
  u1name = document.getElementById("player1_name").value;
  u2name = document.getElementById("player2_name").value;
  localStorage.setItem("Player_1_Username", u1name);
  localStorage.setItem("Player_2_Username", u2name);
}
