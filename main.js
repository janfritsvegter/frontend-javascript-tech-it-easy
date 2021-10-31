// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// array voor de tabelhoofd namen
const specs = [
  "type",
  "name",
  "brand",
  "price",
  "availableSizes",
  "refreshRate",
  "screenType",
  "screenQuality",
  "smartTv",
  "originalStock",
  "sold",];

// voor de tabelhoofdnamen maar dan de options
const options = [
  "wifi",
  "speech",
  "hdr",
  "bluetooth",
  "ambiLight",
];

//functie die een tabel creert
// voor de bonusopdracht is al ingebakken dat als er al een tabel is die eerst wordt leeggemaakt/verwijderd
// voordat de nieuwe wordt geplaatst
function makeTable(id, arr, colRed, colRed2 , cssClass) {
  const listTvSpecial = document.getElementById(id);
  // indien er al een tabel is deze leegmaken
  while (listTvSpecial.firstChild) {
    listTvSpecial.removeChild(listTvSpecial.lastChild);
  }

  const rowHead = document.createElement("tr");
  for (let i = 0; i < specs.length; i++) {
    const cel = document.createElement("td");
    const paragraph = document.createElement("p");
    paragraph.textContent = specs[i];
    cel.appendChild(paragraph);
    rowHead.appendChild(cel);
  }
  for (let i = 0; i < options.length; i++) {
    const cel = document.createElement("td");
    const paragraph = document.createElement("p");
    paragraph.textContent = options[i];
    cel.appendChild(paragraph);
    rowHead.appendChild(cel);
  }

  listTvSpecial.appendChild(rowHead);

  for (let i = 0; i < arr.length; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < specs.length; j++) {
      const cel = document.createElement("td");
      const temp = specs[j];
      if (temp === colRed || temp === colRed2) {
        const paragraph2 = document.createElement("p");
        paragraph2.textContent = arr[i][temp];
        paragraph2.setAttribute("class", cssClass);
        cel.appendChild(paragraph2);
      } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = arr[i][temp];
        cel.appendChild(paragraph);
      }
      row.appendChild(cel);
    }
    for (let j = 0; j < options.length; j++) {
      const cel = document.createElement("td");
      const temp = options[j];
      if (temp === colRed || temp === colRed2) {
        const paragraph2 = document.createElement("p");
        paragraph2.textContent = arr[i].options[temp];
        paragraph2.setAttribute("class", cssClass);
        cel.appendChild(paragraph2);
      } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = arr[i].options[temp];
        cel.appendChild(paragraph);
      }

      row.appendChild(cel);
    }
    listTvSpecial.appendChild(row);

  }
}
