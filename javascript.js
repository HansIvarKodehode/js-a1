/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html
// Done

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her
console.log("----------------------");
console.log("O: 2");
let str = "string";
let num = 42;
let bol = true;
const arr = [str, num, bol];
console.log(typeof str, typeof num, typeof bol, typeof arr);
console.log("----------------------");
/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her
console.log("----------------------");
console.log("O: 3");
const n1 = 10 * 2;
const n2 = 10 + 2;
const s1 = "12";

console.log(n1 + n2);
console.log(n1 - n2);

console.log(n1);
console.log(n2);
let n3 = 0;
n3 += n1;
n3 -= n2;
console.log("n3 = " + n3);
n3++;
console.log("n3++ = " + n3);
n3--;
console.log("n3-- = " + n3);
console.log(s1 + n3);

s2 = "";
console.log(typeof s2);
if (!s2) {
  console.log(
    `an empty string is considered to be both false and typeOf ${typeof s2}`,
  );
  console.log(
    "guess that's javascript for you. Not all languages accept that.",
  );
  console.log("especially not for other datatypes.");
} else {
  console.log(
    `an empty string is considered to be both true and typeOf ${typeof s2}`,
  );
}

console.log("----------------------");
console.log(
  "got a little carried away, and brought in some boolean logic instead",
);
if (n1 == n2) {
  console.log("That's not right");
} else {
  console.log("12 != 20");
}
if (n1 != n2) {
  console.log("12 != 20");
} else {
  console.log("That's not right");
}
if (s1 == n2) {
  console.log("string and int can have the same value, but different types");
} else {
  console.log("That's not right");
}
if (s1 === n2) {
  console.log("That's not right");
} else {
  console.log("=== also checks type");
}

console.log("----------------------");

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her
console.log("----------------------");
console.log("O: 4");
if (userName && userAge >= 18 && userIsBlocked == false) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log(`Welcome ${userName}, you are now logged in`);
} else {
  console.log("error");
  if (!userName) {
    console.log("user has no name");
  }
  if (userAge < 18) {
    console.log("user is underage");
  }
  if (userIsBlocked == true) {
    console.log("user is blocked");
  }
}
console.log("----------------------");

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;
console.log("----------------------");
console.log("O: 5");
const userTitle = userMale ? "Mr." : "Mrs.";

console.log(`user title is: ${userTitle}`);
console.log("----------------------");
