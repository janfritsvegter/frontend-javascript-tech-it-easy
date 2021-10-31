
/*
#### Opdracht 3 - Array methoden en functies
* **Opdracht 3a:** Gebruik een array-methode om alle tv merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
  pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
  dubbele namen in zitten, is niet erg.
* **Opdracht 4b:** Schrijf de code uit 4a om naar een functie die een array met tv-objecten verwacht. Het is handig om
  onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. _Tip_: vergeet deze functie
  -declaratie niet aan te roepen!
 */

const tvBrandNames = inventory.map((tv) => {
    return tv.brand;
});
const listTvBrandNames = document.getElementById("list-tv-brand-names");
for (let i = 0; i < tvBrandNames.length; i++) {
    const item = document.createElement("li");
    item.textContent = tvBrandNames[i];
    listTvBrandNames.appendChild(item);
}



function makeTvList(arr,id,spec){
    const tvList = document.getElementById(id);
    arr.map((tv) => {
        const item = document.createElement("li");
        item.textContent = tv[spec];
        tvList.appendChild(item);
    });
}

makeTvList(inventory,"list-tv-brand-names-function","brand");