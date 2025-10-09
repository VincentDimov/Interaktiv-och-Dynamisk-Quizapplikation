// Hämta HTML-elementen från sidan
const start = document.getElementById("start");
const app = document.getElementById("app");
const result = document.getElementById("result");

// Quiz Arrays organiserade i kategori
const quizzes = {
  "HTML": [
    { question: "Vad står HTML för?", options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyperlink Text Madeup"], answer: "Hyper Text Markup Language" },
    { question: "Vilken tag används för rubriker?", options: ["&lt;p&gt;", "&lt;h1&gt;", "&lt;head&gt;"], answer: "&lt;h1&gt;" },
    { question: "Vilken tag används för en länk?", options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;url&gt;"], answer: "&lt;a&gt;" },
    { question: "Vilken tag används för bilder?", options: ["&lt;img&gt;", "&lt;picture&gt;", "&lt;src&gt;"], answer: "&lt;img&gt;" },
    { question: "Vilken tag används för stycken?", options: ["&lt;section&gt;", "&lt;p&gt;", "&lt;text&gt;"], answer: "&lt;p&gt;" },
    { question: "Hur skriver man en kommentar i HTML?", options: ["// kommentar", "&lt;!-- kommentar --&gt;", "# kommentar"], answer: "&lt;!-- kommentar --&gt;" },
    { question: "Vilken attribut används för att öppna länk i ny flik?", options: ["target='_blank'", "newTab='true'", "open='new'"], answer: "target='_blank'" },
    { question: "Vilken attribut används för att visa alternativtext för en bild?", options: ["alt", "title", "description"], answer: "alt" },
    { question: "Vilken HTML5-tag används för navigering?", options: ["&lt;nav&gt;", "&lt;menu&gt;", "&lt;dir&gt;"], answer: "&lt;nav&gt;" },
    { question: "Vilken är den översta nivån på rubriker?", options: ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;head&gt;"], answer: "&lt;h1&gt;" }
  ],
  "CSS": [
    { question: "Vad står CSS för?", options: ["Cascading Style Sheets", "Creative Style System", "Colorful Style Syntax"], answer: "Cascading Style Sheets" },
    { question: "Hur refererar man till en klass i CSS?", options: [".klassnamn", "#id", "klassnamn"], answer: ".klassnamn" },
    { question: "Hur refererar man till en id i CSS?", options: [".id", "#id", "id:"], answer: "#id" },
    { question: "Vilken egenskap ändrar textfärg?", options: ["color", "font-color", "text-color"], answer: "color" },
    { question: "Vilken egenskap ändrar bakgrundsfärg?", options: ["background", "background-color", "bg-color"], answer: "background-color" },
    { question: "Vilken egenskap används för att ändra textstorlek?", options: ["text-size", "font-size", "size"], answer: "font-size" },
    { question: "Vilket värde gör text fet?", options: ["bold", "weight", "font-bold"], answer: "bold" },
    { question: "Vilket CSS-attribut används för att ändra avstånd inuti en box?", options: ["padding", "margin", "border"], answer: "padding" },
    { question: "Vilket CSS-attribut används för att ändra avstånd utanför en box?", options: ["padding", "margin", "spacing"], answer: "margin" },
    { question: "Vilken enhet används ofta för procentbaserad storlek?", options: ["%", "px", "em"], answer: "%" }
  ],
  "JavaScript": [
    { question: "Vad står JS för?", options: ["JavaSource", "JavaScript", "JustScript"], answer: "JavaScript" },
    { question: "Vilket kommando skriver ut till konsolen?", options: ["print()", "console.log()", "log.print()"], answer: "console.log()" },
    { question: "Vilken symbol används för kommentarer på en rad?", options: ["//", "&lt;!--", "#"], answer: "//" },
    { question: "Vilken datatype används för text?", options: ["String", "Text", "Char"], answer: "String" },
    { question: "Vilken datatype används för sant/falskt?", options: ["Number", "Boolean", "TrueFalse"], answer: "Boolean" },
    { question: "Vilken operator används för addition?", options: ["+", "-", "*"], answer: "+" },
    { question: "Vilket nyckelord deklarerar en konstant?", options: ["const", "let", "var"], answer: "const" },
    { question: "Vilket nyckelord deklarerar en variabel som kan ändras?", options: ["var", "mutable", "static"], answer: "var" },
    { question: "Vilken funktion används för att visa en popup-alert?", options: ["alert()", "popup()", "message()"], answer: "alert()" },
    { question: "Vilken symbol används för strikt lika med?", options: ["===", "==", "="], answer: "===" }
  ],
  "VS Code": [
    { question: "Vad är VS Code?", options: ["En textredigerare", "Ett operativsystem", "En webbläsare"], answer: "En textredigerare" },
    { question: "Vilket företag utvecklar VS Code?", options: ["Apple", "Google", "Microsoft"], answer: "Microsoft" },
    { question: "Vilken fil används för att installera tillägg?", options: ["Marketplace", "Extensions", "Add-ons"], answer: "Extensions" },
    { question: "Vilken tangentkombination öppnar terminalen?", options: ["Ctrl+ö", "Ctrl+`", "Ctrl+t"], answer: "Ctrl+`" },
    { question: "Vilken fil används för inställningar?", options: ["settings.json", "config.js", "setup.json"], answer: "settings.json" },
    { question: "Vilket språk är VS Code byggt på?", options: ["C++", "JavaScript", "Python"], answer: "JavaScript" },
    { question: "Vilken tangent öppnar kommandopaletten?", options: ["F1", "Ctrl+Shift+P", "Båda"], answer: "Båda" },
    { question: "Vad kallas det när man installerar extra funktioner i VS Code?", options: ["Plugins", "Extensions", "Add-ons"], answer: "Extensions" },
    { question: "Vilken ikon används för att starta en ny fil?", options: ["+ ikon", "Ny fil-ikon", "Båda"], answer: "Båda" },
    { question: "Vilket tema är standard i VS Code?", options: ["Dark+", "Light", "Classic"], answer: "Dark+" }
  ]
};


// Variabler för funktioner
let currentQuiz = []; //Håller aktuella frågor
let currentIndex = 0; //Håller koll på vilken fråga vi är på
let score = 0; //Poängräknare
let answers = []; //Sparar användarens svar
let timer; // Timer för varje fråga
let timeLeft = 10; // Tid kvar för aktuell fråga
let currentCategory = ""; // Vald kategori
let difficulty = "Medel"; // Vald svårighetsgrad

// Funktioner som visar startsidan
function showStart() {
  start.style.display = "block"; // Visa startsidan
  app.style.display = "none"; // Dölj quizdelen
  result.style.display = "result"; // Dölj resultatsidan
  // HTML-innehåll för startsidan
  start.innerHTML = `
    <h1 id="startText">Välkommen till vår Frontend Quiz!</h1>
    <p id="startText">          
                Här kan du testa dina kunskaper inom Frontend-utveckling genom en rad spännande frågor.</br> 
                Applikationen är byggd med HTML, CSS och JavaScript för att ge dig en smidig och engagerande upplevelse. </br>
                Det finns 3 olika ämnen att välja mellan: HTML, CSS och JavaScript. </br>
                Varje ämne innehåller 5 frågor som du kan svara på. Efter att du har svarat på alla frågor kommer du att få din poängsumma och feedback på dina svar.</p>
    <button onclick="showQuiz()">Starta</button>
     `;
}

// Funktion som visar quizens kategori-val
function showQuiz() {
  start.style.display = "none";
  app.style.display = "block";
  const history = JSON.parse(localStorage.getItem("quizHistory")) || []; //LokalStorage
  app.innerHTML = `
    <h1>Frontend Quiz</h1>
    <p>Välj en kategori:</p>
    ${Object.keys(quizzes).map(cat => `<button class="category-btn ${cat.toLowerCase()}" onclick="chooseDifficulty('${cat}')">${cat}</button>`).join("")}
    <h3>Dina tidigare resultat:</h3>
    <ul class="history">
      ${history.length > 0 ? history.map(r => `<li>${r.date} - ${r.category} (${r.difficulty}): ${r.score}</li>`).join("") : "<li>Inga sparade resultat</li>"}
    </ul>
    ${history.length > 0 ? `<button id="resetHistoryButton" onclick="resetHistory()">Radera historik</button>` : ""}
  `;
}

// Välj svårighetsnivå
function chooseDifficulty(category) {
  currentCategory = category; // Spara vald kategori
  // Visa svårighetsknappar
  app.innerHTML = `
    <h2>Välj svårighetsnivå för ${category}:</h2>
    <button id="btn-easy" onclick="startQuiz('Lätt')">Lätt (15 sek)</button>
    <button id="btn-medium" onclick="startQuiz('Medel')">Medel (10 sek)</button>
    <button id="btn-hard" onclick="startQuiz('Svår')">Svår (5 sek)</button>
  `;
}

// Starta quiz
function startQuiz(level) {
  difficulty = level; // Spara vald svårighetsnivå
  currentQuiz = shuffleArray([...quizzes[currentCategory]]);
  currentIndex = 0;
  score = 0;
  answers = [];

  showQuestion(); // Visa första frågan
}

// Visa fråga
function showQuestion() {
  const q = currentQuiz[currentIndex]; // Hämta aktuell fråga
  if (!q) return; // Säkerställ att frågan finns

  // Sätt tid beroende på svårighetsnivå
  if (difficulty === "Lätt") timeLeft = 15;
  if (difficulty === "Medel") timeLeft = 10;
  if (difficulty === "Svår") timeLeft = 5;

  // Visa frågan och timer
  app.innerHTML = `
    <h5>${currentCategory} (${difficulty}) - Fråga ${currentIndex + 1} av ${currentQuiz.length}</h5>
    <p>${q.question}</p>
    <div class="timer">Tid kvar: <span id="time">${timeLeft}</span> sek</div>
    <div id="options"></div>
  `;

  // Skapa svarsalternativ som klickbara element
  const optionsDiv = document.getElementById("options");
  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.innerHTML = opt;
    btn.classList.add("option");
    btn.onclick = () => selectAnswer(opt, btn); //När användaren klickar på ett svar
    optionsDiv.appendChild(btn);
  });

  // "Nästa fråga"-knapp (Döljs när man svarar eller trycker på den)
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Nästa fråga";
  nextBtn.classList.add("next-btn");
  nextBtn.onclick = () => {
    nextBtn.style.display = "none"; // Dölj knappen direkt
    // Om användaren inte svarat ännu → registrera "Inget svar" och visa rätt svar
    if (!answers[currentIndex]) {
      selectAnswer(null, null, true); // tredje argument = klick från "Next"
    }
  };
  app.appendChild(nextBtn);

  // Starta nedräkning
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextBtn.style.display = "none"; // Dölj knappen om tiden tar slut
      selectAnswer(null, null, true);
    }
  }, 1000);
}

// Funktion som hanterar användarens svar
function selectAnswer(option, element, fromNext = false) {
  clearInterval(timer); // Nollställa timern

  const q = currentQuiz[currentIndex];

  // Dölj "Next"-knappen direkt när ett svar väljs
  const nextBtn = document.querySelector(".next-btn");
  if (nextBtn) nextBtn.style.display = "none";

  // Undvik dubbla registreringar
  if (answers[currentIndex]) return;

  // Räkna poäng
  if (option === q.answer) score++;

  // Spara svaret (eller "Inget svar")
  answers[currentIndex] = {
    question: q.question,
    correct: q.answer,
    yourAnswer: option || "Inget svar"
  };

  // Färgmarkera alternativen
  document.querySelectorAll(".option").forEach(btn => {
    if (btn.innerHTML === q.answer) btn.classList.add("correct");
    if (btn.innerHTML === option && option !== q.answer) btn.classList.add("wrong");
    btn.onclick = null;
  });

  // Om svaret kom från "Nästa fråga"-knappen (dvs. inget svar):
  // visa rätt svar och gå vidare automatiskt
  if (fromNext) {
    setTimeout(() => {
      currentIndex++;
      if (currentIndex < currentQuiz.length) showQuestion();
      else showResult();
    }, 1000); // liten paus så användaren ser rätt svar
  }

  // Om användaren klickade på ett svar → gå vidare efter kort paus
  if (option) {
    setTimeout(() => {
      currentIndex++;
      if (currentIndex < currentQuiz.length) showQuestion();
      else showResult();
    }, 1000);
  }
}

// Visa resultat
function showResult() {
  let html = `<h1 style="color: #3149ff;">Resultat</h1>
    <p>Du fick <strong>${score}</strong> av <strong>${currentQuiz.length}</strong> rätt!</p>
    <h2>Rätta svar:</h2><ul style="text-align:left;">`;
  // Visa varje fråga med användarens svar och rätt svar
  answers.forEach(a => {
  const isCorrect = a.yourAnswer === a.correct;
  const color = isCorrect ? "green" : "red";
  html += `
    <li>
      <strong>${a.question}</strong><br>
      <span style="color: ${color};">
        Ditt svar: ${a.yourAnswer}
      </span><br>
      <span style="color: green;">
        Rätt svar: ${a.correct}
      </span>
    </li><br>
  `;
});
  html += `</ul><button onclick="showQuiz()">Tillbaka till start</button>`;
  app.innerHTML = html;

  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push({ date: new Date().toLocaleString(), category: currentCategory, difficulty, score: `${score} / ${currentQuiz.length}` });
  localStorage.setItem("quizHistory", JSON.stringify(history));
}

// Funktion för att radera historik
function resetHistory() {
  localStorage.removeItem("quizHistory");
  showStart(); // Visa startsidan igen efter rensad historik
}

// Blanda arrays slumpmässigt
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Välj en slumpmässig index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Byt plats på elementen i och j
  }
  return arr; // Returnera den blandade arrayen
}

// Funktion som körs när sidan laddas
showStart();
