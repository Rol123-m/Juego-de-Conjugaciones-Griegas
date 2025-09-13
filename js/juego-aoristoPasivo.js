 // Configuración del juego
    const gameName = 'presente';
    let currentQuestion = 0;
    let score = 0;
    let answeredQuestions = 0;
    let correctAnswers = 0;

    // Preguntas del juego
   const questions = [
  {
    type: "form",
    verb: "ἐλύθην",
    options: [
      "Futuro pasivo, 3ª persona singular",
      "Aoristo pasivo, 1ª persona singular",
      "Perfecto medio, 2ª persona singular",
      "Aoristo activo, 1ª persona singular"
    ],
    answer: 1
  },
  {
    type: "form",
    verb: "λυθήσῃ",
    options: [
      "Futuro activo, 2ª persona singular",
      "Aoristo pasivo, 2ª persona singular",
      "Futuro pasivo, 2ª persona singular",
      "Imperfecto pasivo, 2ª persona singular"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "ἐγράφησαν",
    options: [
      "Perfecto pasivo, 3ª persona plural",
      "Aoristo medio, 3ª persona plural",
      "Futuro pasivo, 3ª persona plural",
      "Aoristo pasivo, 3ª persona plural"
    ],
    answer: 3
  },
  {
    type: "form",
    verb: "γραφήσομαι",
    options: [
      "Futuro pasivo, 1ª persona singular",
      "Presente pasivo, 1ª persona singular",
      "Aoristo pasivo, 1ª persona singular",
      "Futuro medio, 1ª persona singular"
    ],
    answer: 0
  },
  {
    type: "form",
    verb: "ἐβαπτίσθη",
    options: [
      "Perfecto pasivo, 3ª persona singular",
      "Aoristo activo, 3ª persona singular",
      "Aoristo pasivo, 3ª persona singular",
      "Futuro pasivo, 3ª persona singular"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "βαπτισθήσομαι",
    options: [
      "Presente medio, 1ª persona singular",
      "Aoristo pasivo, 1ª persona singular",
      "Futuro pasivo, 1ª persona singular",
      "Imperfecto pasivo, 1ª persona singular"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "ἠκούσθησαν",
    options: [
      "Aoristo activo, 3ª persona plural",
      "Perfecto pasivo, 3ª persona plural",
      "Aoristo pasivo, 3ª persona plural",
      "Futuro pasivo, 3ª persona plural"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "ἀκουσθήσεται",
    options: [
      "Perfecto medio, 3ª persona singular",
      "Aoristo pasivo, 3ª persona singular",
      "Presente pasivo, 3ª persona singular",
      "Futuro pasivo, 3ª persona singular"
    ],
    answer: 3
  },
  {
    type: "form",
    verb: "ἐδιδάχθην",
    options: [
      "Futuro pasivo, 1ª persona singular",
      "Aoristo activo, 1ª persona singular",
      "Aoristo pasivo, 1ª persona singular",
      "Perfecto pasivo, 1ª persona singular"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "διδαχθήσεσθε",
    options: [
      "Aoristo pasivo, 2ª persona plural",
      "Perfecto pasivo, 2ª persona plural",
      "Futuro pasivo, 2ª persona plural",
      "Imperfecto pasivo, 2ª persona plural"
    ],
    answer: 2
  },
  {
    type: "desc",
    desc: "Aoristo pasivo, 1ª persona plural",
    options: ["λυθήσομεν", "ἐλύθημεν", "λελύκαμεν", "ἐλύσαμεν"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Futuro pasivo, 3ª persona plural",
    options: ["λύσουσιν", "λελύκασι", "λυθήσονται", "ἔλυσαν"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Aoristo pasivo, 2ª persona singular",
    options: ["βαπτίζεις", "ἐβαπτίσθης", "ἐβαπτίσω", "βαπτισθήσῃ"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Futuro pasivo, 2ª persona singular",
    options: ["βαπτίσει", "βαπτίζεις", "βαπτισθήσῃ", "ἐβαπτίσθης"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Aoristo pasivo, 3ª persona plural",
    options: ["ἐκήρυξαν", "ἐκηρύχθησαν", "κεκήρυγαν", "κηρύξουσιν"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Futuro pasivo, 1ª persona singular",
    options: ["κηρύσσω", "κηρυχθήσομαι", "ἐκήρυξа", "ἐκηρύχθην"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Aoristo pasivo, 3ª persona singular",
    options: ["ἤνεγκεν", "ἠνέχθη", "ἐνήνεγκε", "οἴσει"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Futuro pasivo, 3ª persona singular",
    options: ["ἀποστέλλει", "ἀποστελεῖ", "ἀπέστειλεν", "ἀποσταλήσεται"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo pasivo, 2ª persona plural",
    options: ["ἐσώσατε", "σώσετε", "ἐσώθητε", "σεσῴκατε"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Futuro pasivo, 2ª persona plural",
    options: ["ἐσώθητε", "σωθήσεσθε", "σώζετε", "ἐσώσατε"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Aoristo pasivo, 1ª persona singular",
    options: ["ἐγείρω", "ἠγέρθην", "ἤγειρα", "ἐγήγερμαι"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Futuro pasivo, 1ª persona singular",
    options: ["ἐγείρω", "ἤγειρα", "ἐγερθήσομαι", "ἠγέρθην"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Aoristo pasivo, 2ª persona singular",
    options: ["γράψεις", "γέγραπται", "ἐγράφης", "ἔγραψας"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Futuro pasivo, 3ª persona plural",
    options: ["γράψουσιν", "γραφήσονται", "γεγράφατε", "ἔγραψαν"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Aoristo pasivo, 1ª persona singular",
    options: ["ἠγάπησα", "ἀγαπῶ", "ἠγαπήθην", "ἀγαπήσω"],
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







    