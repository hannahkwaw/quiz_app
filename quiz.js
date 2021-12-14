const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const answer = document.querySelector(".answer");

h1.textContent = "hey Hannah";
const quiz = [
  ["What does HTML stand for?", "hypertext markup language"],
  ["what does CSS stand for", "Cascading Style Sheeet"],
];
let correct = 0;
let incorrect = 0;
for (let i = 0; i < quiz.length; i++) {
  const answer = prompt(quiz[i][0]);
  if (answer == quiz[i][1]) {
    correct += 1;
  } else {
    incorrect += 1;
  }
}

console.log(incorrect);
console.log(correct);
