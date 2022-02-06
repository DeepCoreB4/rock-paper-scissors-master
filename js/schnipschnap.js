const handOptions = {
  "stein": "/assets/stein.png",
  "papier": "/assets/papier.png",
  "schere": "/assets/schere.png"
}

var SCORE = 0;

const pickUserHand = (hand) => {
  var hands = document.querySelector(".hands");
  hands.style.display = "none";

  var contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  var hands = ["stein", "stein", "schere"];
  var cpHand = hands[Math.floor(Math.random() * hands.length)];

  // set computer image 
  document.getElementById("computerPickImage").src = handOptions[cpHand]

  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "papier" && cpHand == "schere") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userHand == "papier" && cpHand == "stein") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "papier" && cpHand == "papier") {
    setDecision("It's a tie!");
  }
  if (userHand == "stein" && cpHand == "schere") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "stein" && cpHand == "papier") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userHand == "stein" && cpHand == "stein") {
    setDecision("It's a tie!");
  }
  if (userHand == "schere" && cpHand == "schere") {
    setDecision("It's a tie!");
  }
  if (userHand == "schere" && cpHand == "stein") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userHand == "stein" && cpHand == "schere") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
}

const restartGame = () => {
  var contest = document.querySelector(".contest");
  contest.style.display = "none";

  var hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
}

function playAudio(src) {
  new Audio(src).play();
}