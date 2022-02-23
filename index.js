function rPS(player1, player2) {
  const outputMessage = "The winner is ";
  if (player1 !== player2) {
    if (player1 === "rock" && player2 === "scissor") {
      return outputMessage + player1;
    } else if (player1 === "scissor" && player2 === "paper") {
      return outputMessage + player1;
    } else if (player1 === "paper" && player2 === "rock") {
      return outputMessage + player1;
    } else {
      return outputMessage + player2;
    }
  } else {
    return "Draw";
  }
}
