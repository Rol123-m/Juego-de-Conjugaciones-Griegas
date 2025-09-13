// Configuración del juego
    const gameName = 'presente';
    let currentQuestion = 0;
    let score = 0;
    let answeredQuestions = 0;
    let correctAnswers = 0;

    // Preguntas del juego
    const questions = [
      // === Primer bloque: forma -> descripción (20 preguntas) ===
      // Presente
      {type:"form", verb:"λύω", options:["Presente medio, 1ª persona singular","Imperfecto activo, 1ª persona singular","Presente activo, 1ª persona singular","Futuro activo, 1ª persona singular"], answer:2},
      {type:"form", verb:"λύεσαι", options:["Presente medio/pasivo, 2ª persona singular","Presente activo, 2ª persona singular","Imperfecto medio, 2ª persona singular","Futuro medio, 2ª persona singular"], answer:0},
      // Imperfecto
      {type:"form", verb:"ἔλυον", options:["Imperfecto medio/pasivo, 1ª persona singular","Imperfecto activo, 1ª persona singular","Presente activo, 1ª persona singular","Futuro activo, 1ª persona singular"], answer:1},
      {type:"form", verb:"ἐλυόμην", options:["Imperfecto medio/pasivo, 1ª persona singular","Imperfecto activo, 1ª persona singular","Presente medio, 1ª persona singular","Futuro medio, 1ª persona singular"], answer:0},
      // Futuro
      {type:"form", verb:"λύσω", options:["Futuro activo, 1ª persona singular","Futuro medio, 1ª persona singular","Futuro líquido activo, 1ª persona singular","Futuro líquido medio, 1ª persona singular"], answer:0},
      {type:"form", verb:"λύσομαι", options:["Futuro activo, 1ª persona singular","Futuro líquido medio, 1ª persona singular","Futuro líquido activo, 1ª persona singular","Futuro medio, 1ª persona singular"], answer:3},
      // Aoristo
      {type:"form", verb:"ἔλυσα", options:["Aoristo medio, 1ª persona singular","Aoristo pasivo, 1ª persona singular","Aoristo activo, 1ª persona singular","Perfecto activo, 1ª persona singular"], answer:2},
      {type:"form", verb:"ἐλύθην", options:["Aoristo pasivo, 1ª persona singular","Aoristo medio, 1ª persona singular","Aoristo activo, 1ª persona singular","Perfecto medio, 1ª persona singular"], answer:0},
      // Perfecto
      {type:"form", verb:"λέλυκα", options:["Perfecto medio/pasivo, 1ª persona singular","Perfecto activo, 1ª persona singular","Aoristo activo, 1ª persona singular","Presente activo, 1ª persona singular"], answer:1},
      {type:"form", verb:"λέλυμαι", options:["Perfecto activo, 1ª persona singular","Perfecto medio/pasivo, 1ª persona singular","Aoristo medio, 1ª persona singular","Presente medio, 1ª persona singular"], answer:1},
      // Más preguntas combinadas
      {type:"form", verb:"λύεις", options:["Presente medio, 2ª persona singular","Imperfecto activo, 2ª persona singular","Futuro activo, 2ª persona singular","Presente activo, 2ª persona singular"], answer:3},
      {type:"form", verb:"ἐλύες", options:["Imperfecto medio/pasivo, 2ª persona singular","Presente activo, 2ª persona singular","Imperfecto activo, 2ª persona singular","Futuro activo, 2ª persona singular"], answer:2},
      {type:"form", verb:"λύσει", options:["Futuro activo, 3ª persona singular","Futuro medio, 3ª persona singular","Futuro líquido activo, 3ª persona singular","Futuro líquido medio, 3ª persona singular"], answer:0},
      {type:"form", verb:"λύσεται", options:["Futuro medio, 3ª persona singular","Futuro activo, 3ª persona singular","Futuro líquido medio, 3ª persona singular","Futuro líquido activo, 3ª persona singular"], answer:0},
      {type:"form", verb:"ἔλυσε", options:["Aoristo medio, 3ª persona singular","Aoristo pasivo, 3ª persona singular","Aoristo activo, 3ª persona singular","Perfecto activo, 3ª persona singular"], answer:2},
      {type:"form", verb:"ἐλύθη", options:["Aoristo medio, 3ª persona singular","Aoristo pasivo, 3ª persona singular","Aoristo activo, 3ª persona singular","Perfecto activo, 3ª persona singular"], answer:1},
      {type:"form", verb:"λέλυκεν", options:["Perfecto activo, 3ª persona singular","Perfecto medio/pasivo, 3ª persona singular","Aoristo activo, 3ª persona singular","Presente activo, 3ª persona singular"], answer:0},
      {type:"form", verb:"λέλυται", options:["Perfecto medio/pasivo, 3ª persona singular","Perfecto activo, 3ª persona singular","Aoristo medio, 3ª persona singular","Presente medio, 3ª persona singular"], answer:0},
      {type:"form", verb:"λύομεν", options:["Presente medio, 1ª persona plural","Imperfecto activo, 1ª persona plural","Futuro activo, 1ª persona plural","Presente activo, 1ª persona plural"], answer:3},
      {type:"form", verb:"ἐλύομεθα", options:["Imperfecto medio/pasivo, 1ª persona plural","Imperfecto activo, 1ª persona plural","Presente activo, 1ª persona plural","Futuro medio, 1ª persona plural"], answer:0},

      // === Segundo bloque: descripción -> forma (20 preguntas) ===
      {type:"desc", desc:"Presente activo, 2ª persona singular de λύω", options:["λύομεν","λύω","λύεις","ἐλύομεθα"], answer:2},
      {type:"desc", desc:"Presente medio, 3ª persona singular de λύω", options:["λύει","λέλυκεν","λύεται","ἐλύετο"], answer:2},
      {type:"desc", desc:"Imperfecto activo, 1ª persona plural de λύω", options:["ἐλύετο","λύομεν","ἔλυον","ἐλύομεν"], answer:3},
      {type:"desc", desc:"Imperfecto medio/pasivo, 2ª persona singular de λύω", options:["ἐλύου","ἔλυες","λύεις","ἐλύομεθα"], answer:0},
      {type:"desc", desc:"Futuro activo, 1ª persona singular de λύω", options:["λύσω","λύσομαι","ἔλυσα","λέλυκα"], answer:0},
      {type:"desc", desc:"Futuro medio, 3ª persona singular de λύω", options:["λύσομαι","λύσεται","λύσω","ἐλύομεθα"], answer:1},
      {type:"desc", desc:"Aoristo activo, 1ª persona singular de λύω", options:["ἔλυον","ἔλυσα","λέλυκα","λύσω"], answer:1},
      {type:"desc", desc:"Aoristo pasivo, 3ª persona singular de λύω", options:["ἐλύθη","ἔλυσα","ἐλύομεθα","λέλυκε"], answer:0},
      {type:"desc", desc:"Perfecto activo, 1ª persona singular de λύω", options:["λέλυμαι","ἔλυσα","λέλυκα","λύω"], answer:2},
      {type:"desc", desc:"Perfecto medio/pasivo, 3ª persona singular de λύω", options:["λέλυκα","ἐλύομεθα","ἐλύθη","λέλυται"], answer:3},
      {type:"desc", desc:"Futuro líquido activo, 1ª persona singular de ἀπολύω", options:["ἀπολύσω","ἀπολύσομαι","ἀπολύω","ἀπολύθην"], answer:0},
      {type:"desc", desc:"Futuro líquido medio, 1ª persona singular de καλέω", options:["καλέσομαι","καλέσω","καλέσῃ","καλέσουσιν"], answer:0},
      {type:"desc", desc:"Imperfecto activo, 2ª persona singular de λύω", options:["ἐλύες","ἐλύομεν","ἔλυον","λύεις"], answer:0},
      {type:"desc", desc:"Presente activo, 1ª persona singular de λύω", options:["λύομεν","λύω","ἔλυον","λέλυκα"], answer:1},
      {type:"desc", desc:"Presente medio/pasivo, 2ª persona singular de λύω", options:["λύεις","λύεσαι","ἐλύου","ἐλύετο"], answer:1},
      {type:"desc", desc:"Perfecto activo, 3ª persona singular de λύω", options:["λέλυκεν","λέλυται","ἔλυσε","ἐλύθη"], answer:0},
      {type:"desc", desc:"Perfecto medio/pasivo, 1ª persona singular de λύω", options:["λέλυκα","ἐλύομεθα","λέλυμαι","ἔλυον"], answer:2},
      {type:"desc", desc:"Aoristo activo, 3ª persona singular de λύω", options:["ἔλυσε","ἐλύθη","λέλυκεν","λέλυται"], answer:0},
      {type:"desc", desc:"Futuro activo, 3ª persona singular de λύω", options:["λύσει","λύσεται","λύσουσιν","λύσομαι"], answer:0},
      {type:"desc", desc:"Futuro medio, 1ª persona plural de λύω", options:["λύσομεν","λύσομαι","λύσομεν","λυσόμεθα"], answer:3}
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





   