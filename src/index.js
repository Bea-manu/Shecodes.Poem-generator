function generatePoem(event){
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "roses are red",
        autoStart: true,
        delay: 20,

    });
}

let authorElement = document.querySelector("poem-generator-form");
authorElement.addEventListener("submit", generatePoem);