const team1Score = document.querySelector('.score-1')
const team2Score = document.querySelector('.score-2')

const matchPoint = document.querySelector('#matchSize')

const pointToTeamOne = document.querySelector('.team1Button')
const pointToTeamTwo = document.querySelector('.team2Button')
const resetBtn = document.querySelector('.resetButton')

pointToTeamOne.addEventListener('click', function () {
  team1Score.innerText = parseInt(team1Score.innerText) + 1
  checkWin()
})

pointToTeamTwo.addEventListener('click', function () {
  team2Score.innerText = parseInt(team2Score.innerText) + 1
  checkWin()
})

resetBtn.addEventListener('click', reset)

function checkWin() {
  const score1 = parseInt(team1Score.innerText)
  const score2 = parseInt(team2Score.innerText)
  const matchSize = matchPoint.value
  if (score1 >= matchSize && (score1 - score2 >= 2)) {
    team1Score.style.color = "green"
    team2Score.style.color = "red"
    disableScoreBtn()
  } else if (score2 >= matchSize && (score2 - score1 >= 2)) {
    team1Score.style.color = "red"
    team2Score.style.color = "green"
    disableScoreBtn()
  }
}

function reset() {
  team1Score.innerText = 0
  team2Score.innerText = 0
  disableScoreBtn()
}

function disableScoreBtn() {
  pointToTeamOne.classList.toggle('disabled')
  pointToTeamTwo.classList.toggle('disabled')
}