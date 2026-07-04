const nome = document.getElementById("name");
const species = document.getElementById("species");
const status = document.getElementById("status");
const image = document.getElementById("image");
const nome1 = document.getElementById("name1");
const species1 = document.getElementById("species1");
const status1 = document.getElementById("status1");
const image1 = document.getElementById("image1");
const nome2 = document.getElementById("name2");
const species2 = document.getElementById("species2");
const status2 = document.getElementById("status2");
const image2 = document.getElementById("image2");

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then(data => {
        console.log(data.results[0]);
        nome.innerText = data.results[0].name;
        species.innerText = data.results[0].species;
        status.innerText = data.results[0].status;
        image.src = data.results[0].image;

        nome1.innerText = data.results[1].name;
        species1.innerText = data.results[1].species;
        status1.innerText = data.results[1].status;
        image1.src = data.results[1].image;

        nome2.innerText = data.results[2].name;
        species2.innerText = data.results[2].species;
        status2.innerText = data.results[2].status;
        image2.src = data.results[2].image;
    })