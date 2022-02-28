const board = document.getElementById("rock-paper-scissor");

const rockIcon = "./assets/rock.png";
const paperIcon = "./assets/paper.png";
const scissorIcon = "./assets/scissor.png";

const rock = document.createElement("div");
rock.id = "rock";
rock.innerHTML = `<img src="${rockIcon}" alt="rock hand" class="gesture">`;

const paper = document.createElement("div");
paper.id = "paper";
paper.innerHTML = `<img src="${paperIcon}" alt="paper hand" class="gesture">`;

const scissor = document.createElement("div");
scissor.id = "scissor";
scissor.innerHTML = `<img src="${scissorIcon}" alt="scissor hand" class="gesture">`;

board.append(rock, paper, scissor);

let output = document.getElementById("output-message");
output.setAttribute("hidden", "");

const computersChoice = () => {
  let rockPaperScissorArray = ["rock", "paper", "scissor"];
  let randomGesture =
    rockPaperScissorArray[
      Math.floor(Math.random() * rockPaperScissorArray.length)
    ];
  return randomGesture;
};

board.childNodes.forEach((gesture) =>
  gesture.addEventListener("click", usersChoice)
);

function usersChoice() {
  output.removeAttribute("hidden", "");
  rockPaperScissor(this.id, computersChoice());
  return this.id;
}

function rockPaperScissor(player1, player2) {
  const outputMessage = `Player's choice is ${player1}, computer's choice is ${player2}. The winner is `;

  if (player1 !== player2) {
    if (player1 === "rock" && player2 === "scissor") {
      output.innerText = `${outputMessage + player1}`;
      return outputMessage + player1;
    } else if (player1 === "scissor" && player2 === "paper") {
      output.innerText = `${outputMessage + player1}`;
      return outputMessage + player1;
    } else if (player1 === "paper" && player2 === "rock") {
      output.innerText = `${outputMessage + player1}`;
      return outputMessage + player1;
    } else {
      output.innerText = `${outputMessage + player2}`;
      return outputMessage + player2;
    }
  } else {
    output.innerText = `Player's choice is ${player1}, computer's choice is ${player2}. It's a draw!`;
    return "Draw";
  }
}
