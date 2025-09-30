### Interaktiv-och-Dynamisk-Quizapplikation

### **Uppgift: Skapa en Interaktiv och Dynamisk Quizapplikation**

**Syfte:**
Den här uppgiften är utformad för att ge dig och din grupp praktisk erfarenhet av att bygga en interaktiv och dynamisk webbapplikation med HTML, CSS och JavaScript. Målet är att skapa en quizapplikation där allt innehåll hanteras på samma sida, vilket ger er möjlighet att träna på att manipulera sidan dynamiskt med JavaScript.

---

### **Instruktioner**

### **1. Strukturera projektet**

Ni ska bygga en quizapplikation som innehåller följande delar, där allt hanteras på **samma HTML-sida**:

1. **Startsida:**
    - Börja med en välkomnande startsida där användaren får en introduktion till quizen.
    - Här kan ni lägga till information om ämnet, hur många frågor som ingår och en "Starta Quiz"-knapp.
    - Det måste finnas minst två tillgängliga ämnen/kategorier.
2. **Quizdel:**
    - När användaren klickar på "Starta Quiz"-knappen ska frågorna visas **dynamiskt på samma sida**.
    - Frågorna ska visas en i taget, med flervalsalternativ där användaren kan välja sitt svar.
    - Nästa fråga ska visas när användaren har valt ett svar.
    - Minst 5 frågor per ämne/kategori.
3. **Resultatdel:**
    - När alla frågor är besvarade ska resultatet visas på samma sida. Här kan ni visa:
        - Hur många rätt användaren fick.
        - Rätt svar på varje fråga (valfritt).

> Notera: Alla dessa delar (introduktion, frågor och resultat) ska hanteras genom att uppdatera och ändra innehållet på samma HTML-sida med hjälp av JavaScript.
>

### **2. Dynamiskt flöde med JavaScript**

För att få quizen att fungera dynamiskt ska ni använda JavaScript för att:

1. **Visa och byta innehåll:**
    - Byt mellan introduktionen, frågorna och resultatdelen genom att uppdatera innehållet i en `<div>` eller liknande element.
2. **Hantera frågor:**
    - Spara alla frågor och svar i en JavaScript-array.
    - Visa en fråga i taget och låt användaren välja ett svar innan nästa fråga visas.
3. **Räkna poäng:**
    - Håll reda på användarens poäng genom att spara hur många rätt svar de har under quizens gång.
4. **Visa resultat:**
    - När alla frågor är besvarade ska resultatet visas dynamiskt utan att ladda om sidan.

---

### **3. Designa med CSS**

- **Enhetlig design:** Använd CSS för att skapa en snygg och tydlig design. Centrera quizens innehåll och använd färger och typsnitt som gör applikationen tilltalande.
- **Responsiv design:** Gör quizen användarvänlig även på mindre skärmar, t.ex. mobiler.
- **Interaktiva effekter:** Lägg till visuella effekter som gör det roligare att använda quizen, t.ex. hover-effekter på knappar.

### **4. Extra funktioner (valfritt)**

Om ni vill utmana er själva kan ni lägga till någon eller några av följande funktioner:

- **Tidsbegränsning:** Lägg till en timer för varje fråga.
- **Direkt feedback:** Visa om användaren svarade rätt eller fel innan nästa fråga visas.
- **Anpassningsbar svårighet:** Låt användaren välja mellan olika svårighetsnivåer innan de startar quizen.
- **Spara resultat:** Använd `localStorage` för att spara användarens resultat och visa deras bästa poäng.

---

### **Bedömning**

När ni är klara med uppgiften ska ni redovisa och lämna in projektet. Ni kommer att bedömas utifrån följande kriterier:

1. **Funktionalitet:**
    - Fungerar applikationen som tänkt? Är det möjligt att starta quizen, svara på frågor och se resultatet?
2. **Användarupplevelse:**
    - Är quizen enkel och trevlig att använda? Är designen tydlig och responsiv?

---

### **Tips för arbetet**

- **Planera tillsammans:** Diskutera först hur ni vill strukturera quizen och dela upp uppgifterna mellan gruppmedlemmarna.
- **Testa ofta:** Testa små delar av applikationen ofta för att säkerställa att allt fungerar.
- **Använd console.log:** Om något inte fungerar som tänkt kan ni använda `console.log` i JavaScript för att felsöka.

### **Saker att tänka på när ni skriver kod**

- **Struktur och läsbarhet:** Se till att koden är lätt att läsa och följa. Använd kommentarer för att förklara vad olika delar av koden gör, speciellt för funktioner och mer komplex logik.
- **Effektivitet:** Undvik att duplicera kod. Om ni märker att ni skriver samma kod flera gånger, fundera på om det går att skapa eller använda funktioner, loopar istället.
- **Testning(manuellt):** Testa koden steg för steg för att hitta och åtgärda fel tidigt.

> Tips: Genom att ha välstrukturerad kod och regelbundet testa den undviker ni många vanliga problem och gör det enklare att samarbeta i gruppen.
> 

**Lycka till!** 🎉 ser fram emot att se era kreativa och dynamiska quizapplikationer!

test test test