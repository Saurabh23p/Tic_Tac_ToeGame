let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset_btn");
let new_btn = document.querySelector("#new_btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true;
//te pattern jeyane player jinku shaktat te 2D array madhe gyayche 
const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button was Clicked");

        if (turn0) {
            box.innerText = "O";
            turn0 = false;

        } else {
            box.innerText = "X";
            box.style.color = 'blue';
            turn0 = true;
        }

        box.disabled = true;
        checkWinner();

    });

});

const checkWinner = () => {
    for (let pattern of winningPattern) {
        let posVal1 = boxes[pattern[0]].innerText; // jr single array asta tr aapn boxes[0] pn 2d array ahe mhanun aapn boxes[pattern[0]] ase ghetle ahe 
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                console.log("Winner", posVal1);
                showWinner(posVal1);

            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}  `;
    msgContainer.classList.remove("hide");
    disabledBox();

};

const disabledBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};


const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");

};

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

new_btn.addEventListener("click", resetGame);
reset_btn.addEventListener("click", resetGame);

