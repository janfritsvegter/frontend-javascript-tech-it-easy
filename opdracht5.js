
/*
#### Opdracht 5 - Functies

Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:

  ```
  Philips 43PUS6504/12 - 4K TV
  €379,-
  43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

  NIKKEI NH3216SMART - HD smart TV
  €159,-
  32 inch (81 cm)
  ```

* **Opdracht 5a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
  enkel tv-object (zoals `inventory[0]` of `inventory[6]`) verwacht en de naam op de volgende manier
  samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`. Test
  of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

* **Opdracht 5b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
  parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Test of jouw functie ook werkt
  wanneer er een andere tv-prijs wordt meegegeven.

* **Opdracht 5c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
  zowel _inches_ als _cm_. Doe dit door een functie te schrijven die één screen-sizes array verwacht (
  zoals `inventory[0].availableSizes`) en de groottes op de volgende manier
  samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
  etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
  schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
  Test of jouw functie werkt in alle mogelijke gevallen.

* **Opdracht 5d:** Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
  Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

* **Opdracht 5e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je
  natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
  Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De
  overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan
  te roepen!
 */

function tvNameType(arr,index){
    return arr[index].brand + " " + arr[index].type + " " + arr[index].name;
}

function tvPrice(arr,index){
    return "€" + arr[index].price + ",-" ;
}

function tvSizes(arr,index){
    let size = arr[index].availableSizes[0];
    let sizes = size + "inch (" + Math.round(size*2.54) + " cm)";
    if (arr[index].availableSizes.length > 1){
        for (let i = 1; i < arr[index].availableSizes.length; i++) {
            size = arr[index].availableSizes[i];
            sizes = sizes + " | " + size + "inch (" + Math.round(size*2.54) + " cm)";
        }
    }
    return sizes;
}
for (let i = 0; i < inventory.length; i++) {
    console.log(tvNameType(inventory,i));
    console.log(tvPrice(inventory,i));
    console.log(tvSizes(inventory,i));
}
const opdracht5d = document.getElementById("opdracht5d");
const parOpdr5dReg1 = document.createElement("p");
parOpdr5dReg1.textContent = tvNameType(inventory,2);
opdracht5d.appendChild(parOpdr5dReg1);
const parOpdr5dReg2 = document.createElement("p");
parOpdr5dReg2.textContent = tvPrice(inventory,2);
opdracht5d.appendChild(parOpdr5dReg2);
const parOpdr5dReg3 = document.createElement("p");
parOpdr5dReg3.textContent = tvSizes(inventory,2);
opdracht5d.appendChild(parOpdr5dReg3);

function showDataAll(arr,id){
    const element = document.getElementById(id);
    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "margin-bottom");
        const parReg1 = document.createElement("p");
        parReg1.textContent = tvNameType(arr,i);
        div.appendChild(parReg1);
        const parReg2 = document.createElement("p");
        parReg2.textContent = tvPrice(arr,i);
        div.appendChild(parReg2);
        const parReg3 = document.createElement("p");
        parReg3.textContent = tvSizes(arr,i);
        div.appendChild(parReg3);
        element.appendChild(div);
    }
}

showDataAll(inventory,"opdracht5e");