function displayPoem(response){

    new Typewriter("#poem", {
        strings: "roses are red",
        autoStart: true,
        delay: 1,
        cursor: "",
        loop: true
    });
}
function generatePoem(event){
    event.preventDefault();

    let topicInput = document.querySelector("#author");
    let context = "You are famous poet Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let prompt = `topic: generate a simple love poem ${topicInput.value}`;
    let apiKey = "8f0ab40o57b12e2t3b934b3b4137cfbc";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let peomElement = document.querySelector("#poem");
    peomElement.classList.remove("hide");
    peomElement.innerHTML = `<div class="generating"> Generating a love poem ${topicInput.value}</div>`;
     console.log(`context: ${context}`);
     console.log("generate poem");
     console.log(`prompt: ${prompt}`);

    axios.get(apiUrl).then(displayPoem);}

let poemElement = document.querySelector("poem-generator-form");
poemElement.addEventListener("submit", generatePoem);