
/*
#### Bonusopdracht

Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code die
je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de
buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de
bijbehorende knop klikt. _Tip_: lees hiervoor paragraaf 7.4 op EdHub eens door!

2b
 */

const buttontvSoldOut = document.getElementById("button-tv-sold-Out");
// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
buttontvSoldOut.addEventListener('click', makeTableTvSoldOut);

function makeTableTvSoldOut() {

    const tvSoldOut = inventory.filter((item) => {
        return item.originalStock === item.sold;
    });

    makeTable("bonusopdracht", tvSoldOut, "originalStock", "sold", "red");
}

const buttontvAmbilight = document.getElementById("button-ambilight");
// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
buttontvAmbilight.addEventListener('click', makeTableTvAmbilight);

function makeTableTvAmbilight() {
    const tvAmbiLight = inventory.filter((item) => {
        return item.options.ambiLight === true ;
    });

    makeTable("bonusopdracht", tvAmbiLight, "ambiLight", "nvt", "red");
}

const buttontvSortHighLow = document.getElementById("button-sort-price-high-low");
// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
buttontvSortHighLow.addEventListener('click', makeTableTvSortHighLow);

function makeTableTvSortHighLow(){
    inventory.sort((a, b) => {
        if (a.price > b.price ) {
            return -1;
        }
        if (a.price < b.price ) {
            return 1;
        }
        return 0;
    });

    makeTable("bonusopdracht", inventory, "price", "nvt" , "red");
}

const buttontvSortLowHigh = document.getElementById("button-sort-price-low-high");
// plaats er een event listener op zodat wanneer deze getriggerd wordt, deze functie uitgevoerd wordt
buttontvSortLowHigh.addEventListener('click', makeTableTvSortLowHigh);

function makeTableTvSortLowHigh(){
    inventory.sort((a, b) => {
        if (a.price < b.price ) {
            return -1;
        }
        if (a.price > b.price ) {
            return 1;
        }
        return 0;
    });

    makeTable("bonusopdracht", inventory, "price", "nvt" , "red");
}