function generatePoem(event){
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "roses are red",
        autoStart: true,
        delay: 20,

    });
}

let poemFormElement = document.querySelector("poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);