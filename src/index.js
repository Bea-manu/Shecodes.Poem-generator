function generatePoem(event){
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "roses are red",
        autoStart: true,
        delay: 20,

    });
}

let poemElement = document.querySelector("poem-generator-form");
poemElement.addEventListener("submit", generatePoem);