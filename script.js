const titleH1 = document.getElementById("titleH1");
const start = document.getElementById("start");
const app = document.getElementById("app");
const result = document.getElementById("result");

// Quizdata
const quizzes = {
  "HTML": [
    { question: "Vad står HTML för?", options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyperlink Text Madeup"], answer: "Hyper Text Markup Language" },
    { question: "Vilken tag används för rubriker?", options: ["<p>", "<h1>", "<head>"], answer: "<h1>" },
    { question: "Vilken tag används för en länk?", options: ["<a>", "<link>", "<url>"], answer: "<a>" },
    { question: "Vilken tag används för bilder?", options: ["<img>", "<picture>", "<src>"], answer: "<img>" },
    { question: "Vilken tag används för stycken?", options: ["<section>", "<p>", "<text>"], answer: "<p>" },
    { question: "Hur skriver man en kommentar i HTML?", options: ["// kommentar", "<!-- kommentar -->", "# kommentar"], answer: "<!-- kommentar -->" },
    { question: "Vilken attribut används för att öppna länk i ny flik?", options: ["target='_blank'", "newTab='true'", "open='new'"], answer: "target='_blank'" },
    { question: "Vilken attribut används för att visa alternativtext för en bild?", options: ["alt", "title", "description"], answer: "alt" },
    { question: "Vilken HTML5-tag används för navigering?", options: ["<nav>", "<menu>", "<dir>"], answer: "<nav>" },
    { question: "Vilken är den översta nivån på rubriker?", options: ["<h1>", "<h6>", "<head>"], answer: "<h1>" }
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
    { question: "Vad står JS för?", options: ["Java Source", "JavaScript", "Just Script"], answer: "JavaScript" },
    { question: "Vilket kommando skriver ut till konsolen?", options: ["print()", "console.log()", "log.print()"], answer: "console.log()" },
    { question: "Vilken symbol används för kommentarer på en rad?", options: ["//", "<!--", "#"], answer: "//" },
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
let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let answers = [];
let timer;
let timeLeft = 10;
let currentCategory = "";
let difficulty = "Medel";

// Startvy
function showStart() {
  start.style.display = "block";
  app.style.display = "none";
  result.style.display = "result";
  start.innerHTML = `
    <h1>Välkommen till vår Frontend Quiz!</h1>
    <p>          
                Här kan du testa dina kunskaper inom Frontend-utveckling genom en rad spännande frågor.</br> 
                Applikationen är byggd med HTML, CSS och JavaScript för att ge dig en smidig och engagerande upplevelse. </br>
                Det finns 3 olika ämnen att välja mellan: HTML, CSS och JavaScript. </br>
                Varje ämne innehåller 5 frågor som du kan svara på. Efter att du har svarat på alla frågor kommer du att få din poängsumma och feedback på dina svar.</p>
    <button onclick="showQuiz()">Starta</button>
     `;
}

// Quizvy
function showQuiz() {
  start.style.display = "none";
  app.style.display = "block";
  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  app.innerHTML = `
    <h1>Frontend Quiz</h1>
    <p>Välj en kategori:</p>
    ${Object.keys(quizzes).map(cat => `<button onclick="chooseDifficulty('${cat}')">${cat}</button>`).join("")}
    <h3>Dina tidigare resultat:</h3>
    <ul class="history">
      ${history.length > 0 ? history.map(r => `<li>${r.date} - ${r.category} (${r.difficulty}): ${r.score}</li>`).join("") : "<li>Inga sparade resultat</li>"}
    </ul>
    ${history.length > 0 ? `<button onclick="resetHistory()">Radera historik</button>` : ""}
  `;
}

// Välj svårighetsnivå
function chooseDifficulty(category) {
  currentCategory = category;
  app.innerHTML = `
    <h2>Välj svårighetsnivå för ${category}:</h2>
    <button id="btn-easy" onclick="startQuiz('Lätt')">Lätt (15 sek)</button>
    <button id="btn-medium" onclick="startQuiz('Medel')">Medel (10 sek)</button>
    <button id="btn-hard" onclick="startQuiz('Svår')">Svår (5 sek)</button>
  `;
}

// Starta quiz
function startQuiz(level) {
  difficulty = level;
  currentQuiz = shuffleArray([...quizzes[currentCategory]]);
  currentIndex = 0;
  score = 0;
  answers = [];

  showQuestion();
}

// Visa fråga
function showQuestion() {
  const q = currentQuiz[currentIndex];
  if (!q) return;

  if (difficulty === "Lätt") timeLeft = 15;
  if (difficulty === "Medel") timeLeft = 10;
  if (difficulty === "Svår") timeLeft = 5;

  app.innerHTML = `
    <h2>${currentCategory} (${difficulty}) - Fråga ${currentIndex + 1} av ${currentQuiz.length}</h2>
    <p>${q.question}</p>
    <div class="timer">Tid kvar: <span id="time">${timeLeft}</span> sek</div>
    <div id="options"></div>
  `;

  const optionsDiv = document.getElementById("options");
  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.onclick = () => selectAnswer(opt, btn);
    optionsDiv.appendChild(btn);
  });

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      selectAnswer(null, null);
    }
  }, 1000);
}

// Välj svar
function selectAnswer(option, element) {
  clearInterval(timer);

  const q = currentQuiz[currentIndex];
  if (option === q.answer) score++;

  answers.push({ question: q.question, correct: q.answer, yourAnswer: option || "Inget svar" });

  document.querySelectorAll(".option").forEach(btn => {
    if (btn.textContent === q.answer) btn.classList.add("correct");
    if (btn.textContent === option && option !== q.answer) btn.classList.add("wrong");
    btn.onclick = null;
  });

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Nästa fråga";
  nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < currentQuiz.length) showQuestion();
    else showResult();
  };
  app.appendChild(nextBtn);
}

// Visa resultat
function showResult() {
  let html = `<h1>Resultat</h1>
    <p>Du fick ${score} av ${currentQuiz.length} rätt!</p>
    <h2>Rätta svar:</h2><ul style="text-align:left;">`;

  answers.forEach(a => {
    html += `<li><strong>${a.question}</strong><br>Ditt svar: ${a.yourAnswer}<br>Rätt svar: ${a.correct}</li><br>`;
  });
  html += `</ul><button onclick="showQuiz()">Tillbaka till start</button>`;
  app.innerHTML = html;

  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push({ date: new Date().toLocaleString(), category: currentCategory, difficulty, score: `${score} / ${currentQuiz.length}` });
  localStorage.setItem("quizHistory", JSON.stringify(history));
}

// Radera historik
function resetHistory() {
  localStorage.removeItem("quizHistory");
  showStart();
}

// Blanda array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Start
showStart();