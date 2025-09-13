// Configuración del juego
    const gameName = 'presente';
    let currentQuestion = 0;
    let score = 0;
    let answeredQuestions = 0;
    let correctAnswers = 0;

    // Preguntas del juego
 
const questions = [
      // === Primer bloque: forma -> descripción (10 preguntas) ===
      {type:"form", verb:"ἔλυον", options:["Imperfecto medio/pasivo, 3ª persona plural","Imperfecto activo, 1ª persona singular","Imperfecto medio/pasivo, 1ª persona singular","Imperfecto activo, 3ª persona singular"], answer:1},
      {type:"form", verb:"ἔλυες", options:["Imperfecto medio/pasivo, 2ª persona singular","Imperfecto activo, 2ª persona plural","Imperfecto activo, 2ª persona singular","Imperfecto medio/pasivo, 2ª persona plural"], answer:2},
      {type:"form", verb:"ἔλυε(ν)", options:["Imperfecto medio/pasivo, 3ª persona singular","Imperfecto activo, 3ª persona plural","Imperfecto activo, 3ª persona singular","Imperfecto medio/pasivo, 3ª persona plural"], answer:2},
      {type:"form", verb:"ἐλύομεν", options:["Imperfecto medio/pasivo, 1ª persona plural","Imperfecto activo, 2ª persona plural","Imperfecto activo, 1ª persona plural","Imperfecto medio/pasivo, 2ª persona plural"], answer:2},
      {type:"form", verb:"ἐλύετε", options:["Imperfecto medio/pasivo, 2ª persona plural","Imperfecto activo, 1ª persona plural","Imperfecto activo, 2ª persona plural","Imperfecto medio/pasivo, 1ª persona plural"], answer:2},
      {type:"form", verb:"ἔλυον", options:["Imperfecto medio/pasivo, 1ª persona singular","Imperfecto activo, 1ª persona singular","Imperfecto activo, 3ª persona plural","Imperfecto medio/pasivo, 3ª persona plural"], answer:2},
      {type:"form", verb:"ἐλυόμην", options:["Imperfecto activo, 1ª persona singular","Imperfecto medio/pasivo, 3ª persona singular","Imperfecto medio/pasivo, 1ª persona singular","Imperfecto activo, 3ª persona singular"], answer:2},
      {type:"form", verb:"ἐλύου", options:["Imperfecto activo, 2ª persona singular","Imperfecto medio/pasivo, 1ª persona singular","Imperfecto activo, 1ª persona singular","Imperfecto medio/pasivo, 2ª persona singular"], answer:3},
      {type:"form", verb:"ἐλύετο", options:["Imperfecto activo, 3ª persona singular","Imperfecto medio/pasivo, 1ª persona plural","Imperfecto activo, 1ª persona plural","Imperfecto medio/pasivo, 3ª persona singular"], answer:3},
      {type:"form", verb:"ἐλυόμεθα", options:["Imperfecto activo, 1ª persona plural","Imperfecto medio/pasivo, 2ª persona plural","Imperfecto activo, 2ª persona plural","Imperfecto medio/pasivo, 1ª persona plural"], answer:3},

      // === Segundo bloque: descripción -> forma (10 preguntas) ===
      {type:"desc", desc:"Imperfecto activo, 2ª persona singular de λύω", options:["ἐλύετε","ἐλύου","ἔλυες","ἐλύομεν"], answer:2},
      {type:"desc", desc:"Imperfecto medio/pasivo, 3ª persona singular de λύω", options:["ἐλυόμην","ἐλύετο","ἔλυε(ν)","ἐλυόμεθα"], answer:1},
      {type:"desc", desc:"Imperfecto activo, 1ª persona plural de λύω", options:["ἐλυόμεθα","ἐλύετε","ἐλύομεν","ἐλυόμην"], answer:2},
      {type:"desc", desc:"Imperfecto medio/pasivo, 2ª persona plural de λύω", options:["ἐλύετε","ἔλυον","ἐλυόμεθа","ἐλύεσθε"], answer:3},
      {type:"desc", desc:"Imperfecto activo, 3ª persona plural de λύω", options:["ἐλύετο","ἐλυόμεθα","ἔλυον","ἐλύου"], answer:2},
      {type:"desc", desc:"Imperfecto medio/pasivo, 1ª persona singular de λύω", options:["ἐλύεσθε","ἐλύετο","ἔλυον","ἐλυόμην"], answer:3},
      {type:"desc", desc:"Imperfecto medio/pasivo, 2ª persona singular de λύω", options:["ἐλύετε","ἐλυόμεθα","ἐλύου","ἐλύετο"], answer:2},
      {type:"desc", desc:"Imperfecto medio/pasivo, 1ª persona plural de λύω", options:["ἐλύετε","ἐλύομεν","ἔλυον","ἐλυόμεθα"], answer:3},
      {type:"desc", desc:"Imperfecto activo, 3ª persona singular de λύω", options:["ἐλυόμεθα","ἐλύου","ἔλυε(ν)","ἐλύετο"], answer:2},
      {type:"desc", desc:"Imperfecto activo, 2ª persona plural de λύω", options:["ἐλύου","ἐλυόμεθα","ἔλυον","ἐλύετε"], answer:3}
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


















