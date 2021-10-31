
/*
* **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
* **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.
 */

const opdracht2 = document.getElementById("opdracht2");


let soldTvs = 0;
for (let i = 0; i < inventory.length; i++) {
    soldTvs = soldTvs + inventory[i].sold;
}
console.log(soldTvs);
const rowOpdr2a = document.createElement("tr");
const celOpdr2aCol1 = document.createElement("td");
const parOpdr2aCol1 = document.createElement("p");
parOpdr2aCol1.textContent = "2a/b)";
celOpdr2aCol1.appendChild(parOpdr2aCol1);
rowOpdr2a.appendChild(celOpdr2aCol1);
const celOpdr2aCol2 = document.createElement("td");
const parOpdr2aCol2 = document.createElement("p");
parOpdr2aCol2.textContent = "Totaal aantal verkochte tv\'s";
celOpdr2aCol2.appendChild(parOpdr2aCol2);
rowOpdr2a.appendChild(celOpdr2aCol2);
const celOpdr2aCol3 = document.createElement("td");
const parOpdr2aCol3 = document.createElement("p");
parOpdr2aCol3.setAttribute("class", "green");
parOpdr2aCol3.textContent = soldTvs;
celOpdr2aCol3.appendChild(parOpdr2aCol3);
rowOpdr2a.appendChild(celOpdr2aCol3);

opdracht2.appendChild(rowOpdr2a);
/*
* **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
  console.
* **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.
 */

let boughtTvs = 0;
for (let i = 0; i < inventory.length; i++) {
    boughtTvs = boughtTvs + inventory[i].originalStock;
}
console.log(boughtTvs);

const rowOpdr2b = document.createElement("tr");
const celOpdr2bCol1 = document.createElement("td");
const parOpdr2bCol1 = document.createElement("p");
parOpdr2bCol1.textContent = "2c/d)";
celOpdr2bCol1.appendChild(parOpdr2bCol1);
rowOpdr2b.appendChild(celOpdr2bCol1);
const celOpdr2bCol2 = document.createElement("td");
const parOpdr2bCol2 = document.createElement("p");
parOpdr2bCol2.textContent = "Totaal aantal gekochte tv\'s";
celOpdr2bCol2.appendChild(parOpdr2bCol2);
rowOpdr2b.appendChild(celOpdr2bCol2);
const celOpdr2bCol3 = document.createElement("td");
const parOpdr2bCol3 = document.createElement("p");
parOpdr2bCol3.setAttribute("class", "blue");
parOpdr2bCol3.textContent = boughtTvs;
celOpdr2bCol3.appendChild(parOpdr2bCol3);
rowOpdr2b.appendChild(celOpdr2bCol3);

opdracht2.appendChild(rowOpdr2b);
/*
* **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.
 */

const rowOpdr2c = document.createElement("tr");
const celOpdr2cCol1 = document.createElement("td");
const parOpdr2cCol1 = document.createElement("p");
parOpdr2cCol1.textContent = "2e)";
celOpdr2cCol1.appendChild(parOpdr2cCol1);
rowOpdr2c.appendChild(celOpdr2cCol1);
const celOpdr2cCol2 = document.createElement("td");
const parOpdr2cCol2 = document.createElement("p");
parOpdr2cCol2.textContent = "Totaal aantal nog te verkopen tv\'s";
celOpdr2cCol2.appendChild(parOpdr2cCol2);
rowOpdr2c.appendChild(celOpdr2cCol2);
const celOpdr2cCol3 = document.createElement("td");
const parOpdr2cCol3 = document.createElement("p");
parOpdr2cCol3.setAttribute("class", "red");
parOpdr2cCol3.textContent = (boughtTvs - soldTvs);
celOpdr2cCol3.appendChild(parOpdr2cCol3);
rowOpdr2c.appendChild(celOpdr2cCol3);

opdracht2.appendChild(rowOpdr2c);
