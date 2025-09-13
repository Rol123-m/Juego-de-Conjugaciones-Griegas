// Configuración del juego
    const gameName = 'presente';
    let currentQuestion = 0;
    let score = 0;
    let answeredQuestions = 0;
    let correctAnswers = 0;

    // Preguntas del juego
 
const questions = [
      // === Primer bloque: forma -> descripción ===
      {
        type: "form",
        verb: "λέλυκα",
        options: [
          "Perfecto activo, 1ª persona singular",
          "Perfecto medio, 1ª persona singular",
          "Aoristo activo, 1ª persona singular",
          "Futuro activo, 1ª persona singular"
        ],
        answer: 0
      },
      {
        type: "form",
        verb: "λελύκασι",
        options: [
          "Perfecto pasivo, 3ª persona plural",
          "Aoristo activo, 3ª persona plural",
          "Perfecto activo, 3ª persona plural",
          "Futuro medio, 3ª persona plural"
        ],
        answer: 2
      },
      {
        type: "form",
        verb: "λέλυμαι",
        options: [
          "Perfecto activo, 1ª persona singular",
          "Presente medio, 1ª persona singular",
          "Futuro pasivo, 1ª persona singular",
          "Perfecto medio/pasivo, 1ª persona singular"
        ],
        answer: 3
      },
      {
        type: "form",
        verb: "ἐγήγερται",
        options: [
          "Perfecto activo, 3ª persona singular",
          "Aoristo pasivo, 3ª persona singular",
          "Perfecto medio/pasivo, 3ª persona singular",
          "Imperfecto pasivo, 3ª persona singular"
        ],
        answer: 2
      },
      {
        type: "form",
        verb: "γέγραφα",
        options: [
          "Perfecto activo, 1ª persona singular",
          "Perfecto pasivo, 1ª persona singular",
          "Aoristo activo, 1ª persona singular",
          "Presente activo, 1ª persona singular"
        ],
        answer: 0
      },
      {
        type: "form",
        verb: "γέγραπται",
        options: [
          "Perfecto medio/pasivo, 3ª persona singular",
          "Perfecto activo, 3ª persona singular",
          "Aoristo pasivo, 3ª persona singular",
          "Presente pasivo, 3ª persona singular"
        ],
        answer: 0
      },
      {
        type: "form",
        verb: "ἑώρακα",
        options: [
          "Perfecto medio, 1ª persona singular",
          "Segundo perfecto activo, 1ª persona singular",
          "Aoristo activo, 1ª persona singular",
          "Futuro activo, 1ª persona singular"
        ],
        answer: 1
      },
      {
        type: "form",
        verb: "ἑώραμαι",
        options: [
         "Perfecto activo, 1ª persona singular",
         "Segundo perfecto medio/pasivo, 1ª persona singular",
          "Aoristo pasivo, 1ª persona singular",
          "Imperfecto pasivo, 1ª persona singular"
        ],
        answer: 1
      },
      {
        type: "form",
        verb: "πέποιθα",
        options: [
          "Segundo perfecto activo, 1ª persona singular (con valor de presente: confiar)",
          "Perfecto pasivo, 1ª persona singular",
          "Aoristo activo, 1ª persona singular",
          "Presente activo, 1ª persona singular"
        ],
        answer: 0
      },
      {
        type: "form",
        verb: "πέπεισμαι",
        options: [         
          "Perfecto activo, 1ª persona singular",
          "Aoristo pasivo, 1ª persona singular",
          "Presente pasivo, 1ª persona singular",
           "Perfecto medio/pasivo, 1ª persona singular",
        ],
        answer: 3
      },

      // === Segundo bloque: descripción -> forma ===
      {
        type: "desc",
        desc: "Perfecto activo, 2ª persona singular de λύω",
        options: [ "λέλυσαι","λέλυκας", "ἔλυσας", "λύσεις"],
        answer: 1
      },
      {
        type: "desc",
        desc: "Perfecto medio/pasivo, 2ª persona singular de λύω",
        options: ["λέλυσαι", "λέλυκας", "ἐλύθης", "λύῃ"],
        answer: 0
      },
      {
        type: "desc",
        desc: "Perfecto activo, 1ª persona plural de λύω",
        options: ["λελύκαμεν", "ἐλύσαμεν", "λύσομεν", "λελύμεθα"],
        answer: 0
      },
      {
        type: "desc",
        desc: "Perfecto medio/pasivo, 1ª persona plural de λύω",
        options: [ "λελύκαμεν","λελύμεθα", "ἐλυόμεθα", "λύσομεν"],
        answer: 1
      },
      {
        type: "desc",
        desc: "Perfecto activo, 3ª persona singular de γινώσκω",
        options: [ "ἔγνω", "γνώσεται", "γινώσκει","ἔγνωκε(ν)"],
        answer: 3
      },
      {
        type: "desc",
        desc: "Perfecto medio/pasivo, 3ª persona singular de γινώσκω",
        options: ["ἔγνωσται", "ἔγνωκε(ν)", "ἔγνω", "γινώσκεται"],
        answer: 0
      },
      {
        type: "desc",
        desc: "Segundo perfecto activo, 1ª persona singular de ἵστημι",
        options: [ "ἔστην", "ἕστηκα","στήσω", "ἑστήκειν"],
        answer: 1
      },
      {
        type: "desc",
        desc: "Segundo perfecto medio/pasivo, 3ª persona plural de ἵστημι",
        options: [ "ἔστησαν","ἑστήκασι", "ἑστάθησαν", "ἕστασιν"],
        answer: 1
      },
      {
        type: "desc",
        desc: "Perfecto activo, 2ª persona plural de γράφω",
        options: [ "ἔγραψατε", "γράφετε","γεγράφατε", "γράψετε"],
        answer: 2
      },
      {
        type: "desc",
        desc: "Perfecto medio/pasivo, 2ª persona plural de γράφω",
        options: ["γέγραπται", "γέγραφθε", "γεγράφατε", "γράφεσθε"],
        answer: 1
      },
      {
        type: "desc",
        desc: "Perfecto activo, 1ª persona singular de πείθω",
        options: [ "πέπεισμαι", "ἔπεισα", "πέποιθα","πείσω"],
        answer: 2
      },
      {
        type: "desc",
        desc: "Perfecto medio/pasivo, 1ª persona singular de πείθω",
        options: ["πέπεισμαι", "πέποιθα", "ἔπεισα", "πείθομαι"],
        answer: 0
      },
      {
        type: "desc",
        desc: "Perfecto activo, 3ª persona plural de ὁράω",
        options: ["ἑώρακασι", "ἑώρανται", "εἶδον", "ὄψονται"],
        answer: 0
      },
      {
        type: "desc",
        desc: "Perfecto medio/pasivo, 3ª persona singular de ὁράω",
        options: [ "ἑώρακε","ἑώραται", "εἶδε", "ὄψεται"],
        answer: 1
      },
      {
        type: "desc",
        desc: "Perfecto activo, 1ª persona plural de λέγω",
        options: ["εἴρηκαμεν", "εἴρηται", "εἴπαμεν", "ἐροῦμεν"],
        answer: 0
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


























