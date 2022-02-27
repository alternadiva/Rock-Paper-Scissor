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

function rockPaperScissor(player1, player2) {
  console.log(player1);
  console.log(player2);
  const outputMessage = "The winner is ";
  if (player1 !== player2) {
    if (player1 === "rock" && player2 === "scissor") {
      console.log(outputMessage + player1);
      return outputMessage + player1;
    } else if (player1 === "scissor" && player2 === "paper") {
      console.log(outputMessage + player1);
      return outputMessage + player1;
    } else if (player1 === "paper" && player2 === "rock") {
      console.log(outputMessage + player1);
      return outputMessage + player1;
    } else {
      console.log(outputMessage + player2);
      return outputMessage + player2;
    }
  } else {
    console.log("Draw");
    return "Draw";
  }
}

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
  rockPaperScissor(this.id, computersChoice());
  return this.id;
}
