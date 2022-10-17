
const p1Button = document.querySelector('.player-1');
const p2Button = document.querySelector('.player-2');
const p1Display = document.querySelector('.score1');
const p2Display = document.querySelector('.score2');
const resetButton = document.querySelector('.reset');
const score_select = document.querySelector('#score');


let play1_score = 0;
let play2_score = 0;
let isGameOver = false;
let winning_score = 1;

p1Button.addEventListener('click', function(e){
  if(isGameOver === false)
  { 
      play1_score += 1;
      if(play1_score === winning_score)
      {
        isGameOver = true;
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
      }
      p1Display.textContent = play1_score;
  }
});

p2Button.addEventListener('click', function(e){
  
  if(isGameOver === false)
  {
    play2_score += 1
    if(play2_score === winning_score)
    {      
      isGameOver = true; 
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
    }
    p2Display.textContent = play2_score;
  }
});

score_select.addEventListener('change', function(){
//   alert(winning_score);
  reset();
  winning_score = parseInt(this.value);
//   alert(winning_score);
//   console.log(winning_score);

});

resetButton.addEventListener('click', reset);

function reset(){
  isGameOver = false;
  play1_score = 0;
  play2_score = 0;
  p2Display.textContent = 0;
  p1Display.textContent = 0;
  p1Display.classList.remove('winner', 'loser');
  p2Display.classList.remove('loser', 'winner');
}