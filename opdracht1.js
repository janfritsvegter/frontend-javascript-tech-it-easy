/*
#### Opdracht 1 - Array Methoden

* **Opdracht 1a:** Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de
console.
 */

const listTvTypeNames = document.getElementById("list-tv-type-names");

const tvTypeNames = inventory.map((tv) => {
    return tv.type;
});

for (let i = 0; i < tvTypeNames.length; i++) {
    const item = document.createElement("li");
    item.textContent = tvTypeNames[i];
    listTvTypeNames.appendChild(item);
}

// voor het vervolg van opdracht 1 een functie die van een arr met de volledige objecten een tabel maakt.

/*
* **Opdracht 1b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
zijn. Log de uitkomst in de console.
 */
const tvSoldOut = inventory.filter((item) => {
    return item.originalStock === item.sold;
});

makeTable("list-tv-type-sold-out", tvSoldOut, "originalStock", "sold",  "red");
/*
* **Opdracht 1c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight
beschikken. Log de uitkomst in de console.
 */
const tvAmbiLight = inventory.filter((item) => {
    return item.options.ambiLight === true ;
});

makeTable("list-tv-ambi-light", tvAmbiLight, "ambiLight", "nvt" , "red");
/*
* **Opdracht 1d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de
console.
 */
inventory.sort((a, b) => {
    if (a.price < b.price ) {
        return -1;
    }
    if (a.price > b.price ) {
        return 1;
    }
    return 0;
});

makeTable("list-tv-price-low-high", inventory, "price", "nvt" , "red");

inventory.sort((a, b) => {
    if (a.price > b.price ) {
        return -1;
    }
    if (a.price < b.price ) {
        return 1;
    }
    return 0;
});

makeTable("list-tv-price-high-low", inventory, "price", "nvt","red");
