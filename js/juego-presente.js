// Configuración del juego
    const gameName = 'presente';
    let currentQuestion = 0;
    let score = 0;
    let answeredQuestions = 0;
    let correctAnswers = 0;

    // Preguntas del juego
   const questions = [
  // === Primer bloque: forma -> descripción ===
  {type:"form", verb:"λύω", options:["Futuro activo, 1ª persona singular","Presente activo, 1ª persona singular","Presente medio, 1ª persona singular","Aoristo activo, 1ª persona singular"], answer:1},
  {type:"form", verb:"λύεις", options:["Futuro activo, 2ª persona singular","Presente medio, 2ª persona singular","Presente activo, 2ª persona singular","Aoristo pasivo, 2ª persona singular"], answer:2},
  {type:"form", verb:"λύει", options:["Perfecto activo, 3ª persona singular","Presente activo, 3ª persona singular","Presente medio, 3ª persona singular","Aoristo activo, 3ª persona singular"], answer:1},
  {type:"form", verb:"λύομεν", options:["Presente medio, 1ª persona plural","Futuro activo, 1ª persona plural","Presente activo, 1ª persona plural","Aoristo activo, 1ª persona plural"], answer:2},
  {type:"form", verb:"λύεσθε", options:["Futuro pasivo, 2ª persona plural","Presente medio/pasivo, 2ª persona plural","Aoristo medio, 2ª persona plural","Presente activo, 2ª persona plural"], answer:1},
  {type:"form", verb:"λύονται", options:["Presente activo, 3ª persona plural","Futuro medio, 3ª persona plural","Presente medio/pasivo, 3ª persona plural","Aoristo pasivo, 3ª persona plural"], answer:2},
  {type:"form", verb:"λύομαι", options:["Presente activo, 1ª persona singular","Futuro pasivo, 1ª persona singular","Presente medio/pasivo, 1ª persona singular","Aoristo medio, 1ª persona singular"], answer:2},
  {type:"form", verb:"λύη", options:["Presente activo, 3ª persona singular","Futuro medio, 3ª persona singular","Presente medio/pasivo, 2ª persona singular","Aoristo pasivo, 3ª persona singular"], answer:2},
  {type:"form", verb:"λύομεθα", options:["Futuro medio, 1ª persona plural","Presente medio/pasivo, 1ª persona plural","Presente activo, 1ª persona plural","Aoristo medio, 1ª persona plural"], answer:1},
  {type:"form", verb:"λύεσθε", options:["Futuro medio, 2ª persona plural","Presente activo, 2ª persona plural","Presente medio/pasivo, 2ª persona plural","Aoristo pasivo, 2ª persona plural"], answer:2},

  // === Segundo bloque: descripción -> forma ===
  {type:"desc", desc:"Presente activo, 3ª persona plural de λύω", options:["λύονται","λύουσι(ν)","λύετε","λύομεν"], answer:1},
  {type:"desc", desc:"Presente medio/pasivo, 1ª persona singular de λύω", options:["λύει","λύομαι","λύω","λύομεν"], answer:1},
  {type:"desc", desc:"Presente medio/pasivo, 2ª persona singular de λύω", options:["λύεσθε","λύῃ","λύεις","λύομαι"], answer:1},
  {type:"desc", desc:"Presente activo, 2ª persona plural de λύω", options:["λύεσθε","λύουσιν","λύετε","λύομεν"], answer:2},
  {type:"desc", desc:"Presente medio/pasivo, 3ª persona singular de λύω", options:["λύει","λύομαι","λύεται","λύονται"], answer:2},
  {type:"desc", desc:"Presente activo, 1ª persona plural de λύω", options:["λύεσθε","λύομεν","λύομαι","λύουσιν"], answer:1},
  {type:"desc", desc:"Presente medio/pasivo, 1ª persona plural de λύω", options:["λύεσθε","λύομεθα","λύονται","λύομεν"], answer:1},
  {type:"desc", desc:"Presente activo, 3ª persona singular de γράφω", options:["γράφεται","γράφει","γράφουσιν","γράφω"], answer:1},
  {type:"desc", desc:"Presente medio/pasivo, 2ª persona plural de γράφω", options:["γράφουσιν","γράφεσθε","γράφετε","γράφει"], answer:1},
  {type:"desc", desc:"Presente activo, 1ª persona singular de ἀκούω", options:["ἀκούεις","ἀκούομαι","ἀκούομεν","ἀκούω"], answer:3}
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