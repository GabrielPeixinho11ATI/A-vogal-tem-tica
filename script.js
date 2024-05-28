const questions = [
  {
      question: 'Qual a consoante de ligação na palavra desenvolvimento?',
      answer: 'v'
  },
  {
      question: 'Qual a vogal de ligação na palavra groselha?',
      answer: 'o'
  },
  {
      question: 'Qual a consoante de ligação na palavra ligação?',
      answer: 'g'
  },
  {
      question: 'Qual a vogal de ligação na palavra ovozinha?',
      answer: 'i'
  },
  {
      question: 'Qual a consoante de ligação na palavra amizade?',
      answer: 'z'
  }
];

let currentQuestion = 0;
let lives = 3;

function checkAnswer() {
  const answer = document.getElementById('answer').value.toLowerCase();
  const feedback = document.getElementById('feedback');

  if (answer === questions[currentQuestion].answer) {
      feedback.textContent = 'Correto! Avançando para o próximo inimigo...';
      feedback.style.color = 'green';
      defeatEnemy();
  } else {
      feedback.textContent = 'Incorreto. Tente novamente!';
      feedback.style.color = 'red';
      loseLife();
  }
}

function defeatEnemy() {
  const enemies = document.querySelectorAll('.enemy');
  if (currentQuestion < enemies.length) {
      enemies[currentQuestion].style.display = 'none';
      currentQuestion++;
      if (currentQuestion < questions.length) {
          document.getElementById('question').textContent = questions[currentQuestion].question;
          document.getElementById('answer').value = '';
      } else {
          document.getElementById('question-container').style.display = 'none';
          document.getElementById('feedback').textContent = 'Você venceu todos os inimigos e o Boss! Parabéns!';
      }
  }
}

function loseLife() {
  const livesContainer = document.querySelectorAll('.life');
  if (lives > 0) {
      lives--;
      livesContainer[lives].style.display = 'none';
      if (lives === 0) {
          endGame();
      }
  }
}

function endGame() {
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('feedback').textContent = 'Você perdeu todas as vidas! Tente novamente.';
  document.getElementById('restart-button').style.display = 'block';
}

function restartGame() {
  currentQuestion = 0;
  lives = 3;
  document.getElementById('question-container').style.display = 'block';
  document.getElementById('question').textContent = questions[currentQuestion].question;
  document.getElementById('answer').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('restart-button').style.display = 'none';
  const enemies = document.querySelectorAll('.enemy');
  enemies.forEach(enemy => {
      enemy.style.display = 'inline';
  });
  const livesContainer = document.querySelectorAll('.life');
  livesContainer.forEach(life => {
      life.style.display = 'inline';
  });
}
