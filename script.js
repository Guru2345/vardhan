document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const quizEl = document.getElementById('quiz');
  const questionEl = document.getElementById('question');
  const answers = Array.from(document.querySelectorAll('.answer'));

  const sampleQuestion = {
    text: 'Which language runs in a web browser?',
    options: ['Java', 'C', 'Python', 'JavaScript'],
    correctIndex: 3
  };

  function loadQuestion(q) {
    questionEl.textContent = q.text;
    answers.forEach((btn, i) => {
      btn.textContent = q.options[i];
      btn.dataset.index = i;
      btn.classList.remove('correct','wrong','selected');
    });
  }

  startBtn.addEventListener('click', () => {
    startBtn.hidden = true;
    document.querySelector('.intro').hidden = true;
    quizEl.hidden = false;
    loadQuestion(sampleQuestion);
  });

  answers.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.index);
      answers.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      // show correct/wrong
      answers.forEach((b, i) => {
        b.classList.remove('correct','wrong');
        if (i === sampleQuestion.correctIndex) b.classList.add('correct');
        else if (b.classList.contains('selected')) b.classList.add('wrong');
      });
    });
  });
});