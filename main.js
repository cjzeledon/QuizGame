let section = document.querySelector("section");

function convertJson(response) {
  return response.json();
}

let question = "";

function playgame(response) {
    console.log(response[0].answer);
      let form =`
        <h1>Let's play Jeporday!</h1>
        <h2>${response[0].question} --- Point Value ${response[0].value}</h2>
        <label for="answer">Answer: </label>
        <textarea rows="5" cols="51" name="answer" id="answer" placeholder="Enter your answer"></textarea>
        <input type="submit" value="submit"></button>
      `;

section.innerHTML = form;

let input = document.querySelector("#answer");
console.log(response[0].id);
if (response[0].answer !== input){
  console.log("Hello from the if statement");

  section.innerHTML = form;
}

}

function wrong () {
  console.log("Nice Try");
}

fetch("http://jservice.io/api/random")
  .then(convertJson)
  .then(playgame)
  .catch(wrong);
