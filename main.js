let section = document.querySelector("section");
  let input = document.querySelector("input");
let textarea;


function convertJson(response) {
  return response.json();
}
function timeout(answer) {
window.setTimeout(function() {
  if (textarea.value !== answer) {
    console.log("Wrong Answer");
  } else
    console.log("Congradulations");

}, 1000);
};

function playgame(response) {

      let form =`
        <h1>Let's play Jeporday!</h1>
        <h2>${response[0].question} --- Point Value ${response[0].value}</h2>
        <label for="answer">Answer: </label>
        <textarea rows="3" cols="51" name="answer" id="answer" placeholder="Enter your answer"></textarea>
        <input type="button" value="submit" onclick="timeout('${response[0].answer}')"></button>
      `;

section.innerHTML = form;
//}
  console.log(response[0].answer);
  textarea = document.querySelector("textarea");
}

function wrong () {
  console.log("Nice Try");
}

fetch("http://jservice.io/api/random")
  .then(convertJson)
  .then(playgame)
  .catch(wrong);
