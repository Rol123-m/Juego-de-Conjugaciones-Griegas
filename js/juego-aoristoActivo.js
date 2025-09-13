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
    verb: "ἔλυσα",
    options: [
      "Futuro activo, 1ª persona singular",
      "Aoristo activo, 1ª persona singular",
      "Presente activo, 1ª persona singular",
      "Aoristo medio, 1ª persona singular"
    ],
    answer: 1
  },
  {
    type: "form",
    verb: "ἐλύσω",
    options: [
      "Aoristo medio, 1ª persona singular",
      "Presente medio, 1ª persona singular",
      "Futuro activo, 1ª persona singular",
      "Aoristo activo, 1ª persona singular"
    ],
    answer: 3
  },
  {
    type: "form",
    verb: "ἔλυσεν",
    options: [
      "Perfecto activo, 3ª persona singular",
      "Aoristo medio, 3ª persona singular",
      "Aoristo activo, 3ª persona singular",
      "Presente activo, 3ª persona singular"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "ἐλύσατο",
    options: [
      "Aoristo medio, 3ª persona singular",
      "Futuro medio, 3ª persona singular",
      "Presente medio, 3ª persona singular",
      "Aoristo activo, 3ª persona singular"
    ],
    answer: 0
  },
  {
    type: "form",
    verb: "ἐλύσαμεν",
    options: [
      "Aoristo medio, 1ª persona plural",
      "Presente activo, 1ª persona plural",
      "Aoristo activo, 1ª persona plural",
      "Futuro activo, 1ª persona plural"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "ἐλυσάμεθα",
    options: [
      "Aoristo medio, 1ª persona plural",
      "Perfecto medio, 1ª persona plural",
      "Presente medio, 1ª persona plural",
      "Aoristo activo, 1ª persona plural"
    ],
    answer: 0
  },
  {
    type: "form",
    verb: "ἔλυτε",
    options: [
      "Aoristo medio, 2ª persona plural",
      "Aoristo activo, 2ª persona plural",
      "Imperativo aoristo activo, 2ª persona plural",
      "Presente activo, 2ª persona plural"
    ],
    answer: 1
  },
  {
    type: "form",
    verb: "ἐλύσασθε",
    options: [
      "Presente medio, 2ª persona plural",
      "Aoristo activo, 2ª persona plural",
      "Aoristo medio, 2ª persona plural",
      "Imperativo aoristo medio, 2ª persona plural"
    ],
    answer: 2
  },
  {
    type: "form",
    verb: "ἔλιπον",
    options: [
      "Presente activo, 1ª persona singular",
      "Aoristo activo, 1ª persona singular (2º aoristo)",
      "Imperfecto activo, 1ª persona singular",
      "Aoristo medio, 1ª persona singular (2º aoristo)"
    ],
    answer: 1
  },
  {
    type: "form",
    verb: "ἐλιπόμην",
    options: [
      "Imperfecto medio, 1ª persona singular",
      "Aoristo activo, 1ª persona singular (2º aoristo)",
      "Presente medio, 1ª persona singular",
      "Aoristo medio, 1ª persona singular (2º aoristo)"
    ],
    answer: 3
  },
  {
    type: "form",
    verb: "ἔλαβον",
    options: [
      "Aoristo medio, 1ª persona singular (2º aoristo)",
      "Presente activo, 1ª persona singular",
      "Futuro activo, 1ª persona singular",
      "Aoristo activo, 1ª persona singular (2º aoristo)"
    ],
    answer: 3
  },
  {
    type: "form",
    verb: "ἐγενόμην",
    options: [
      "Perfecto medio, 1ª persona singular",
      "Aoristo activo, 1ª persona singular (2º aoristo)",
      "Presente medio, 1ª persona singular",
      "Aoristo medio, 1ª persona singular (2º aoristo)"
    ],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo activo, 2ª persona singular de λύω",
    options: ["ἐλύσω", "λύεις", "ἔλυσας", "ἔλυες"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Aoristo medio, 2ª persona singular de λύω",
    options: ["λύῃ", "ἔλυε", "ἐλύσω", "ἔλυσας"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Aoristo activo, 3ª persona plural de λύω",
    options: ["λύουσιν", "ἔλυσαν", "ἐλύσαντο", "ἔλυον"],
    answer: 1
  },
  {
    type: "desc",
    desc: "Aoristo medio, 3ª persona plural de λύω",
    options: ["λύονται", "ἐλύοντο", "ἔλυσαν", "ἐλύσαντο"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo activo, 1ª persona singular de γράφω",
    options: ["γράψω", "γράφω", "ἐγραψάμην", "ἔγραψα"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo medio, 1ª persona singular de γράφω",
    options: ["γράφομαι", "ἐγράφην", "ἔγραψα", "ἐγραψάμην"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo activo, 2ª persona plural de ἀκούω",
    options: ["ἀκούσετε", "ἠκούσασθε", "ἀκούετε", "ἠκούσατε"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo medio, 2ª persona plural de ἀκούω",
    options: ["ἀκούεσθε", "ἠκούσθητε", "ἠκούσατε", "ἠκούσασθε"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo activo, 3ª persona singular de βάλλω (2º aoristo)",
    options: ["βάλλει", "ἐβλήθη", "ἔβαλεν", "βαλεῖ"],
    answer: 2
  },
  {
    type: "desc",
    desc: "Aoristo medio, 3ª persona singular of λαμβάνω (2º aoristo)",
    options: ["λαμβάνεται", "λήμψεται", "ἔλαβεν", "ἐλάβετο"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo activo, 1ª persona plural of λείπω (2º aoristo)",
    options: ["λείψομεν", "ἐλιπόμεθα", "λείπομεν", "ἐλίπομεν"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo medio, 1ª persona plural of γίνομαι (2º aoristo)",
    options: ["γινόμεθα", "ἐγενήθημεν", "ἐγένομεν", "ἐγενόμεθа"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo activo, 2ª persona singular of εὑρίσκω (2º aoristo)",
    options: ["εὑρήσεις", "ηὑρέθης", "εὑρίσκεις", "εὗρες"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo medio, 2ª persona singular of ἵστημι (2º aoristo)",
    options: ["ἵστασαι", "στήσῃ", "ἔστης", "ἐστώ"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo activo, 3ª persona plural of φέρω (2º aoristo)",
    options: ["φέρουσιν", "οἴσουσιν", "ἠνέχθησαν", "ἤνεγκαν"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo medio, 3ª persona plural of ἁμαρτάνω (2º aoristo)",
    options: ["ἁμαρτήσονται", "ἥμαρτον", "ἁμαρτάνουσιν", "ἡμάρτοντο"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo activo, 1ª persona singular of τίθημι (2º aoristo)",
    options: ["τίθημι", "θήσω", "ἐθέμην", "ἔθηκα"],
    answer: 3
  },
  {
    type: "desc",
    desc: "Aoristo medio, 1ª persona singular of δίδωμι (2º aoristo)",
    options: ["δίδωμι", "δώσω", "ἔδωκα", "ἐδόμην"],
    answer: 3
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








