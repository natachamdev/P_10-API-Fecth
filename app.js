


document.addEventListener("DOMContentLoaded", () => {
    fechtData();
});

const fechtData = async ()=>  {

    try {
        loadingData(true);

        const res = await fetch("https://rickandmortyapi.com/api/character")

        const data = await res.json();

        pintarCard(data);

    } catch (error) {
        
    } finally {
        loadingData(false);
    }

};

const loadingData = (estado) => {
    const loading = document.getElementById("loading");
    if (estado) {
        loading.classList.remove("d-none");
    } else {
        loading.classList.add("d-none");
    }
};

const pintarCard = (data) => {

    const cards = document.getElementById("card-dinamicas");
    const templateCard = document.getElementById("template-card").content;
    const fragment = document.createDocumentFragment();

    data.results.forEach((item) => {
        const clone = templateCard.cloneNode(true)
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src", item.image)

        fragment.appendChild(clone)
    });

    cards.appendChild(fragment)
};

