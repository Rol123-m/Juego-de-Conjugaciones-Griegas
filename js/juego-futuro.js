const gameName = 'presente';
    let currentQuestion = 0;
    let score = 0;
    let answeredQuestions = 0;
    let correctAnswers = 0;

    // Preguntas del juego
    const questions = [
  // === Primer bloque: forma -> descripción (15 preguntas) ===
  {
    type: "form",
    verb: "λύσω",
    options: [
      "Futuro líquido activo, 1ª persona singular",
      "Futuro activo, 1ª persona singular",
      "Futuro medio, 1ª persona singular",
      "Futuro líquido medio, 1ª persona singular"
    ],
    answer: 1
  },
  {
    type: "form",
    verb: "λύσεις",
    options: [
      "Futuro líquido activo, 2ª persona singular",
      "Futuro medio, 2ª persona singular",
      "Futuro activo, 2ª persona singular",
      "Futuro líquido medio, 2ª persona singular"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "λύσει",
    options: [
      "Futuro líquido medio, 3ª persona singular",
      "Futuro activo, 3ª persona singular",
      "Futuro medio, 3ª persona singular",
      "Futuro líquido activo, 3ª persona singular"
    ],
    answer: 1
  },
  {
    type: "form",
    verb: "λύσομεν",
    options: [
      "Futuro líquido activo, 1ª persona plural",
      "Futuro medio, 1ª persona plural",
      "Futuro líquido medio, 1ª persona plural",
      "Futuro activo, 1ª persona plural"
    ],
    answer: 3
  },
  {
    type: "form",
    verb: "λύσετε",
    options: [
      "Futuro líquido medio, 2ª persona plural",
      "Futuro activo, 2ª persona plural",
      "Futuro medio, 2ª persona plural",
      "Futuro líquido activo, 2ª persona plural"
    ],
    answer: 1
  },
  {
    type: "form",
    verb: "λύσουσιν",
    options: [
      "Futuro medio, 3ª persona plural",
      "Futuro líquido activo, 3ª persona plural",
      "Futuro activo, 3ª persona plural",
      "Futuro líquido medio, 3ª persona plural"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "λύσομαι",
    options: [
      "Futuro líquido activo, 1ª persona singular",
      "Futuro activo, 1ª persona singular",
      "Futuro medio, 1ª persona singular",
      "Futuro líquido medio, 1ª persona singular"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "λύσῃ",
    options: [
      "Futuro activo, 2ª persona singular",
      "Futuro líquido activo, 2ª persona singular",
      "Futuro medio, 2ª persona singular",
      "Futuro líquido medio, 2ª persona singular"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "λύσεται",
    options: [
      "Futuro líquido activo, 3ª persona singular",
      "Futuro activo, 3ª persona singular",
      "Futuro medio, 3ª persona singular",
      "Futuro líquido medio, 3ª persona singular"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "λυσόμεθα",
    options: [
      "Futuro activo, 1ª persona plural",
      "Futuro líquido medio, 1ª persona plural",
      "Futuro medio, 1ª persona plural",
      "Futuro líquido activo, 1ª persona plural"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "λύσεσθε",
    options: [
      "Futuro líquido activo, 2ª persona plural",
      "Futuro activo, 2ª persona plural",
      "Futuro medio, 2ª persona plural",
      "Futuro líquido medio, 2ª persona plural"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "λύσονται",
    options: [
      "Futuro activo, 3ª persona plural",
      "Futuro líquido medio, 3ª persona plural",
      "Futuro medio, 3ª persona plural",
      "Futuro líquido activo, 3ª persona plural"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "ἀπολύσω",
    options: [
      "Futuro medio, 1ª persona singular",
      "Futuro líquido activo, 1ª persona singular",
      "Futuro activo, 1ª persona singular",
      "Futuro líquido medio, 1ª persona singular"
    ],
    answer: 1
  },
  {
    type: "form",
    verb: "καλέσω",
    options: [
      "Futuro medio, 1ª persona singular",
      "Futuro activo, 1ª persona singular",
      "Futuro líquido activo, 1ª persona singular",
      "Futuro líquido medio, 1ª persona singular"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "καλέσομαι",
    options: [
      "Futuro activo, 1ª persona singular",
      "Futuro líquido medio, 1ª persona singular",
      "Futuro medio, 1ª persona singular",
      "Futuro líquido activo, 1ª persona singular"
    ],
    answer: 1
  },

  // === Segundo bloque: descripción -> forma (15 preguntas) ===
  {
    type: "desc",
    desc: "Futuro activo, 2ª persona singular de λύω",
    options: ["λύσῃ", "λύσει", "λύσεις", "λύσομαι"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Futuro medio, 3ª persona singular de λύω",
    options: ["λύσονται", "λύσεται", "λυσόμεθα", "λύσω"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Futuro activo, 1ª persona plural de λύω",
    options: ["λύσομεν", "λύσω", "λυσόμεθα", "λύσομαι"],
    answer: 0
  },
  {
    type: "desc",
    desc: "Futuro medio, 2ª persona plural de λύω",
    options: ["λύσῃ", "λύσετε", "λύσεσθε", "λύουσι"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Futuro activo, 3ª persona plural de λύω",
    options: ["λυσόμεθα", "λύσουσιν", "λύσονται", "λύσετε"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Futuro medio, 1ª persona singular de λύω",
    options: ["λύσονται", "λύσῃ", "λύσομαι", "λύσω"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Futuro líquido activo, 1ª persona singular de καλέω",
    options: ["καλέσῃ", "καλέσομαι", "καλέσω", "καλέσουσι"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Futuro líquido medio, 1ª persona singular de καλέω",
    options: ["καλέσῃ", "καλέσομαι", "καλέσω", "καλέσουσι"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Futuro líquido activo, 3ª persona singular de ἀπολύω",
    options: ["ἀπολύσομαι", "ἀπολύσει", "ἀπολύσῃ", "ἀπολύσονται"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Futuro activo, 1ª persona singular de λύω",
    options: ["λυσόμεθα", "λύσω", "λύομαι", "λύσετε"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Futuro medio, 2ª persona singular de λύω",
    options: ["λύσεις", "λύσονται", "λύσῃ", "λύσεται"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Futuro líquido medio, 3ª persona plural de καλέω",
    options: ["καλέσουσιν", "καλέσῃ", "καλέσονται", "καλέσουσι"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Futuro activo, 2ª persona plural de λύω",
    options: ["λύσονται", "λύσῃ", "λύσετε", "λυσόμεθа"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Futuro medio, 1ª persona plural de λύω",
    options: ["λύσονται", "λυσόμεθα", "λύσομεν", "λύσομαι"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Futuro activo, 3ª persona singular de λύω",
    options: ["λύσουσιν", "λύσῃ", "λύσει", "λύσεται"],
    answer: 2
  }
];

    // Elementos DOM
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const feedbackEl = document.getElementById("feedback");
    const nextBtn = document.getElementById("nextBtn");
    const progressEl = document.getElementById("progress");
    const statsEl = document.getElementById("stats");
    const resultsEl = document.getElementById("results");
    const finalScoreEl = document.getElementById("finalScore");
    const restartBtn = document.getElementById("restartBtn");

    // Inicializar el juego
    function initGame() {
      currentQuestion = 0;
      score = 0;
      answeredQuestions = 0;
      correctAnswers = 0;
      resultsEl.style.display = "none";
      document.getElementById("game").style.display = "block";
      updateStats();
      loadQuestion();
    }

    // Cargar pregunta actual
    function loadQuestion() {
      const q = questions[currentQuestion];
      
      // Actualizar barra de progreso
      progressEl.style.width = `${((currentQuestion) / questions.length) * 100}%`;
      
      if (q.type === "form") {
        questionEl.textContent = `¿Qué forma es: ${q.verb}?`;
      } else {
        questionEl.textContent = `¿Cuál es la forma correcta para: ${q.desc}?`;
      }
      
      optionsEl.innerHTML = "";
      feedbackEl.textContent = "";
      feedbackEl.className = "feedback";
      
      q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "option-btn";
        btn.onclick = () => checkAnswer(i);
        optionsEl.appendChild(btn);
      });
      
      nextBtn.style.display = "none";
    }

    // Verificar respuesta
    function checkAnswer(selected) {
      const q = questions[currentQuestion];
      const optionButtons = document.querySelectorAll('.option-btn');
      
      // Deshabilitar botones después de responder
      optionButtons.forEach(btn => {
        btn.onclick = null;
        btn.style.cursor = 'default';
      });
      
      // Marcar respuesta correcta e incorrecta
      optionButtons[q.answer].classList.add('correct');
      
      if (selected === q.answer) {
        feedbackEl.textContent = "✅ ¡Correcto!";
        feedbackEl.className = "feedback correct";
        score += 10;
        correctAnswers++;
      } else {
        feedbackEl.textContent = `❌ Incorrecto. La respuesta correcta es: ${q.options[q.answer]}`;
        feedbackEl.className = "feedback incorrect";
        optionButtons[selected].classList.add('incorrect');
      }
      
      answeredQuestions++;
      updateStats();
      nextBtn.style.display = "block";
    }

    // Actualizar estadísticas
    function updateStats() {
      statsEl.innerHTML = `
        <div class="stats-title">Estadísticas</div>
        <div class="stats-container">
          <div class="stat-item">
            <div class="stat-value">${answeredQuestions}/${questions.length}</div>
            <div class="stat-label">Preguntas</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${correctAnswers}</div>
            <div class="stat-label">Correctas</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${score}</div>
            <div class="stat-label">Puntuación</div>
          </div>
        </div>
      `;
    }

    // Siguiente pregunta o finalizar juego
    nextBtn.onclick = () => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        endGame();
      }
    };

    // Finalizar juego
    function endGame() {
      document.getElementById("game").style.display = "none";
      resultsEl.style.display = "block";
      finalScoreEl.textContent = `${score} puntos`;
      
      // Guardar estadísticas (simulado)
      if (typeof saveStats === 'function') {
        saveStats(gameName, score, correctAnswers, questions.length);
      }
    }

    // Reiniciar juego
    restartBtn.onclick = initGame;

    // Iniciar el juego cuando se carga la página
    window.onload = initGame;

    











    