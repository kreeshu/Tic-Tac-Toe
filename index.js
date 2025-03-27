    let boxes = document.querySelectorAll('.box');
    let msgContainer = document.querySelector('.msg-container');
    let msg = document.querySelector('#msg');
    let resetButton = document.querySelector('#reset-button');
    let newGameButton = document.querySelector("#new-button"); 
    let winnerImg = document.querySelector('.winner-img img');

    let turnO = true;
    winnerImg.style.display = 'none';
    let winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8],
        [0, 3, 6],
        [2, 4, 6],
    ];

    // let msgInput = prompt("play game?");
    // console.log(msgInput); 

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            var boxText = box.innerText
            console.log("box was clicked", boxText);
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            };
            box.disabled= true;
            checkWinner()
        });

    });

    const disabledBoxes = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    };

    const enabledBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    };

    const resetGame = () => {
        enabledBoxes()
    }

    const showWinner = (winner) => {
        msg.innerText= `Congralution your winner ${winner}`;
        msgContainer.classList.remove('hide')
        disabledBoxes()
    2};

    const checkWinner=()=>{
        for(let pattern of winningPatterns) {
            let pos1Value = boxes[pattern[0]].innerText;
            let pos2Value = boxes[pattern[1]].innerText;
            let pos3Value = boxes[pattern[2]].innerText;

            console.log(pos1Value, pos2Value, pos3Value)

            if(pos1Value !=="" && pos2Value !=="" && pos3Value !=="") {
                if(pos1Value === pos2Value && pos2Value === pos3Value){
                    console.log("winner",pos1Value);
                    showWinner(pos1Value)
                    // show gif image when winner has been published
                    winnerImg.style.display = 'block';
                    // return;
                }
            }
        }
    }

    newGameButton.addEventListener("click",resetGame);
    resetButton.addEventListener("click",resetGame);


  