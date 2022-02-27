const board = document.getElementById("rock-paper-scissor");

const rockIcon = "./assets/rock.png";
const paperIcon = "./assets/paper.png";
const scissorIcon = "./assets/scissor.png";

const rock = document.createElement("div");
rock.id = "rock";
rock.innerHTML = `<img src="${rockIcon}" alt="rock hand">`;

const paper = document.createElement("div");
paper.id = "paper";
paper.innerHTML = `<img src="${paperIcon}" alt="paper hand">`;

const scissor = document.createElement("div");
scissor.id = "scissor";
scissor.innerHTML = `<img src="${scissorIcon}" alt="scissor hand">`;

board.append(rock, paper, scissor);

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

const randomRPS = () => {
  let rPSArray = ["rock", "paper", "scissor"];
  let randomGesture = rPSArray[Math.floor(Math.random() * rPSArray.length)];
  return randomGesture;
};
