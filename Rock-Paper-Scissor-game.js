
    let randomNumber = Math.floor(Math.random() * 6) + 1
  
    let getComputerChoice;
   
    if (randomNumber === 1 || randomNumber === 5) {
        getComputerChoice="rock"

    }else if(randomNumber===2 || randomNumber === 6) {
        getComputerChoice="paper"
    }else if (randomNumber===3 || randomNumber === 4) {
        getComputerChoice="scissor"

    }
 
    function playRound (input, computerSelection){

          if (input===computerSelection) {
            return "you tie"
          }else if (input==="rock"&&computerSelection==="paper")
          {return `paper beats rock you loose`}
          else if (input==="paper"&&computerSelection==="scissor")
          {return `scissor beats paper you loose`}
          else if (input==="scissor"&&computerSelection==="rock")
          {return `rock beats scissor you loose`}
          else if (input==="rock"&&computerSelection==="scissor")
          {return `rock beats scissor you win`}
          else if (input==="paper"&&computerSelection==="rock")
          {return `paper beats rock you win`}
          else if (input==="scissor"&&computerSelection==="paper")
          {return `scissor beats paper you win`}
          else{return "invalid input"}

    }
     let computerSelection = getComputerChoice
     let input = String(prompt("input rock,paper or scissor to play the game."));
    let i = input.toLowerCase()
    console.log(playRound(i,computerSelection))
 

  
