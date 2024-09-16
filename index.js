let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawgame = () => {
    msg.innerText = "Game was a draw, play again.";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You win! " + userchoice + " beats " + compchoice;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You lost! " + compchoice + " beats " + userchoice;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const compchoice = getcompchoice();

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = false;
        if (
            (userchoice === "rock" && compchoice === "scissors") ||
            (userchoice === "paper" && compchoice === "rock") ||
            (userchoice === "scissors" && compchoice === "paper")
        ) {
            userwin = true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
