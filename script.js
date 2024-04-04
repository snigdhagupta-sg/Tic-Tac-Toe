console.log("Welcome to tic tac toe");
let music = new Audio("music sound final.mp3");
let audioturn = new Audio("Ting sound.mp3");
let win = new Audio("success sound.mp3");
let lose = new Audio("fail sound.mp3");
let tie = new Audio("failss.mp3");
let turn = "X";
let gameover = false;
let draw = true;
let count = 0;
// function to change turn:
const changeturn = () => {
  return turn === "X" ? "O" : "X"; //if turn = "X" then return "X" else return "O"
};
const disableBoxes = () => {
  draw = false;
  let boxtexts = document.querySelectorAll(".BoxText");
  Array.from(boxtexts).forEach((element) => {
    if (element.innerText === "") element.innerText = "‎ ";
  });
};

//function to check for a win:
const checkwin = () => {
  let boxtext = document.getElementsByClassName("BoxText"); //we got array of all textspaces
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".Info").innerText =
        boxtext[e[0]].innerText + " WON!! ";
      win.play();
      gameover = true;
      disableBoxes();
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};
//Draw
const gameDraw = () => {
  if (draw === true) {
    document.querySelector(".Info").innerText = `DRAW`;
    tie.play();
    document
      .querySelector(".imgbox2")
      .getElementsByTagName("img")[0].style.width = "200px";
  }
};
//Game Logic:
music.play();
let boxes = document.getElementsByClassName("Box"); // to get all the elements with class name Box
Array.from(boxes).forEach((element) => {
  //we form an array boxes with all those elements
  //for each element of the boxes:
  let boxtext = element.querySelector(".BoxText"); //boxtext is basically the textspace in each element
  element.addEventListener("click", () => {
    //when we click that box:
    if (boxtext.innerText === "") {
      //if the text in the textspace is blank then:
      count++;
      boxtext.innerText = turn;
      turn = changeturn();
      audioturn.play();
      checkwin();
      if (gameover !== true && count !== 9) {
        document.querySelector(".Info").innerText = "Turn for " + turn + "!  "; //change the text in info
      }
      if (gameover !== true && count === 9) {
        gameDraw();
      }
    }
  });
});
//add on listener reset button
reset.addEventListener("click", () => {
  count = 0;
  // enableBoxes();
  let boxtexts = document.querySelectorAll(".BoxText");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameover = false;
  draw = true;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
  document
    .querySelector(".imgbox2")
    .getElementsByTagName("img")[0].style.width = "0px";
  document.querySelector(".Info").innerText = "Turn for " + turn + "! ";
});
