const image = document.querySelector("#myImage");
const text = document.querySelector("h4");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonFour = document.querySelector("#four");
const buttonAgain = document.querySelector("#again");

/* БИЛЛ */
buttonOne.addEventListener("click", Bill);
function Bill() {
  image.setAttribute(
    "src",
    "Bill.jpeg"
  );
  text.textContent = "Will he be a good husband??";
  buttonOne.textContent = "Yes, but...";
  buttonTwo.textContent = "He will leave her!";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  /* вторая часть с Биллом */
  buttonOne.addEventListener("click", BillAndDonna);
  buttonTwo.addEventListener("click", BadBill);
}
function BillAndDonna() {
  image.setAttribute("src", "BillAndDonna.jpeg");
  text.textContent = "Donna will cheat on him with Sam!!!";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  buttonAgain.style = "display: block";
  /* третья часть с Биллом */
  buttonAgain.addEventListener("click", Back);
}
function BadBill() {
  image.setAttribute("src", "BadBill.jpeg");
  text.textContent =
    "Donna won't be able to bear this and will spend the rest of her days in a mental hospital!";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  buttonAgain.style = "display: block";
  /* третья часть с Биллом */
  buttonAgain.addEventListener("click", Back);
}

/* СЭМ */
buttonTwo.addEventListener("click", Sam);
function Sam() {
  image.setAttribute("src", "Sam.jpeg");
  text.textContent = "Will happiness await them??";
  buttonOne.textContent = "They will be together!";
  buttonTwo.textContent = "Donna will run away from Sam...";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  /* вторая часть с Сэмом */
  buttonOne.addEventListener("click", SamAndDonna);
  buttonTwo.addEventListener("click", RunDonna);
}
function SamAndDonna() {
  image.setAttribute("src", "SamAndDonna.jpeg");
  text.textContent = "Sam will force Donna to work and she will leave him!";
  buttonOne.textContent = "Sam will...";
  buttonTwo.textContent = "Sam will never...";
  buttonOne.addEventListener("click", SamAndSofie);
  buttonTwo.addEventListener("click", AloneSam);
}
/* третья часть с Сэмом */
function SamAndSofie() {
  image.setAttribute("src", "Sam&Sofie.jpeg");
  text.textContent = "see his daughter Sophie on weekends.";
  buttonAgain.style = "display: block";
  buttonTwo.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function AloneSam() {
  image.setAttribute("src", "just sam.jpeg");
  text.textContent = "see his daughter Sophie.";
  buttonAgain.style = "display: block";
  buttonOne.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function RunDonna() {
  image.setAttribute("src", "sam&donna.jpeg");
  text.textContent = "They will go their separate ways. Is this the end?";
  buttonOne.textContent = "No...";
  buttonTwo.textContent = "Yes...";
  buttonOne.addEventListener("click", Love);
  buttonTwo.addEventListener("click", Divorce);
}
function Love() {
  image.setAttribute("src", "love.jpeg");
  text.textContent = "Sam and Donna will be together again after many years!";
  buttonAgain.style = "display: block";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function Divorce() {
  image.setAttribute("src", "divorce.jpeg");
  text.textContent = "But Sam will unexpectedly appear at his daughter's wedding!";
  buttonAgain.style = "display: block";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}

/* ГАРРИ */
buttonThree.addEventListener("click", Garry);
function Garry() {
  image.setAttribute("src", "just_garry.jpeg");
  text.textContent = "How long will their happiness last?";
  buttonThree.textContent = "They will get married";
  buttonFour.textContent = "They will soon disperse";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  /* вторая часть с Гарри */
  buttonThree.addEventListener("click", GarryAndDonna);
  buttonFour.addEventListener("click", Break);
}
function GarryAndDonna() {
  image.setAttribute("src", "garry&donna.jpeg");
  text.textContent =
    "Harry and Donna will soon separate because of Harry's career. But what will happen to Sophie??";
  buttonThree.textContent = "Sophie and father";
  buttonFour.textContent = "Sophie and mom";
  buttonThree.addEventListener("click", Dad);
  buttonFour.addEventListener("click", Mom);
}
function Break() {
  image.setAttribute("src", "garry&son.jpeg");
  text.textContent = "Donna learns about Harry's illegitimate son and leaves him!";
  buttonAgain.style = "display: block";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
/* третья часть с Гарри */
function Dad() {
  image.setAttribute("src", "garry&sofie.jpeg");
  text.textContent = "Harry will take his daughter with him!";
  buttonAgain.style = "display: block";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function Mom() {
  image.setAttribute("src", "donna&sofie.jpeg");
  text.textContent = "Sophie will stay with her mother on the island.";
  buttonAgain.style = "display: block";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}

/* ДОННА */
buttonFour.addEventListener("click", Donna);
function Donna() {
  image.setAttribute("src", "donnaHerself.jpeg");
  text.textContent = "What will our heroine do?";
  buttonThree.textContent = "Music";
  buttonFour.textContent = "Island";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  /* вторая часть о Донне */
  buttonThree.addEventListener("click", Music);
  buttonFour.addEventListener("click", Island);
}
function Music() {
  image.setAttribute("src", "SuperTrouper.jpeg");
  text.textContent =
    "Donna will be a member of a musical group! Will they be successful?";
  buttonThree.textContent = "Yes";
  buttonFour.textContent = "No";
  buttonThree.addEventListener("click", Solo);
  buttonFour.addEventListener("click", Drunk);
}
function Solo() {
  image.setAttribute("src", "famous.jpeg");
  text.textContent = "In a few years, Donna will have a solo career!!!";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.style = "display: block";
  buttonAgain.addEventListener("click", Back);
}
function Drunk() {
  image.setAttribute("src", "drunk.jpeg");
  text.textContent = "She will soon be kicked out because of alcohol...";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.style = "display: block";
  buttonAgain.addEventListener("click", Back);
}
function Island() {
  image.setAttribute("src", "island.jpeg");
  text.textContent = "Donna is going to a Greek island. What awaits her there?";
  buttonThree.textContent = "Child";
  buttonFour.textContent = "Loneliness";
  buttonThree.addEventListener("click", Child);
  buttonFour.addEventListener("click", Loneless);
}
/* третья часть о Донне */
function Child() {
  image.setAttribute("src", "dads&sofie.jpeg");
  text.textContent =
    "On the island, she will give birth to a child from one of her suitors. And later, the daughter will search for her father!";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.style = "display: block";
  buttonAgain.addEventListener("click", Back);
}
function Loneless() {
  image.setAttribute("src", "crazy.jpeg");
  text.textContent =
    "She will enjoy solitude for the rest of her life.";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.style = "display: block";
  buttonAgain.addEventListener("click", Back);
}
function Back() {
  location.reload();
}
