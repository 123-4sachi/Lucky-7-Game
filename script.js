// dice roller from bro code!

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random()*6) +1  ;
        values.push(value)
        images.push(`<img src ="dice-Img/${value}.png" alt="Dice ${value}">`);
        
    }
    // const sum = values[0] + values[1];
    const sum = Number(values[0]) + Number(values[1]);

    console.log("Sum:", sum);

    diceResult.textContent = `dice: ${values.join(' + ')} = ${sum}`;
    diceImages.innerHTML = images.join('');

    const userChoice = document.querySelector('input[name="unit"]:checked');

    if (userChoice) {
        if (sum < 7 && userChoice.value === "below7") {
            alert("🎉 Correct! Total Sum is below 7, & you choosed Below 7.");
        } else if (sum === 7 && userChoice.value === "7") {
            alert("🎯 Spot on! Total Sum is exactly 7.");
        } else if (sum > 7 && userChoice.value === "above7") {
            alert("🚀 Well done! Total Sum is above 7 & You choosed above 7.");
        } else {
            alert("❌ Fk You Nigga your guess was incorrect, Bet You can Never Win");
        }
    } 
    
    else {
        alert("⚠️ Are you serious Dawg! Please choose an option before rolling the dice.");
    }

    
}
