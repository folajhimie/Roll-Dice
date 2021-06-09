const dice = document.querySelectorAll('img');
let wrapper = document.querySelector('dice-wrapper')
const time = document.getElementById('dice-1')
console.log(time)

let images = ["dice-roll-1.png",
"dice-roll-2.png",
"dice-roll-3.png",
"dice-roll-4.png",
"dice-roll-5.png",
"dice-roll-6.png"]

function roll(){
    dice.forEach(die => {
        die.classList.toggle('shake')
    })
    setTimeout(function(){
        dice.forEach(die => {
            die.classList.toggle('shake')
        });
        let dieOneValue = Math.floor(Math.random()*6);  
        let dieTwoValue = Math.floor(Math.random()*6); 
        let rollOne = images[dieOneValue]
        let rollTwo = images[dieTwoValue] 
        console.log(rollOne, dieOneValue)
        console.log(rollTwo)
        document.getElementById('dice-1').setAttribute("src", rollOne)
        document.getElementById('dice-2').setAttribute('src', rollTwo)

        let diceOne = dieOneValue + 1;
        let diceTwo = dieTwoValue + 1;

        let figure = diceOne + diceTwo;
        let aplha = "Roll on the Dice Is : " + figure;
        const para = document.getElementById("total");
        para.innerHTML = aplha

    },2000)
}