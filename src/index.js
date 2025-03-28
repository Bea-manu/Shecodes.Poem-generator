function displayPoem(response){

    new Typewriter("#poem", {
        strings: "roses are red",
        autoStart: true,
        delay: 1,
    });
}
function generatePoem(event){
    event.preventDefault();

    let topicInput = document.querySelector("#topic");
    let context = document.querySelector("You are famous poetYou mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning");
    let prompt = document.querySelector("").value;
    let apiKey = "8f0ab40o57b12e2t3b934b3b4137cfbc";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let peomElement = document.querySelector("#poem");
    peomElement.classList.remove("hide");
    peomElement.innerHTML = `<div class="generating"> Generating a love poem ${topicInput.value}</div>`;
    
    axios.get(apiUrl).then(displayPoem);}

let authorElement = document.querySelector("poem-generator-form");
authorElement.addEventListener("submit", generatePoem);