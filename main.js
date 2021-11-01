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
console.log(inventory);

///////////////////////
// Opdracht 1
///////////////////////
const eersteOpdracht = () => {

// a. alle tv-type namen. Log de uitkomst in de console.

    const tvType = inventory.map((item) => {
        return item.type;
    });

    console.log(tvType);

// b. tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn

    const tvUitverkocht = inventory.filter((item) => item.originalStock - item.sold === 0)

    console.log(tvUitverkocht);

// c. de hele objecten die over AmbiLight beschikken.

    const tvAmbilight = inventory.filter((item) => item.options.ambiLight === true);

    console.log(tvAmbilight);

// d. laagste naar hoogste prijs sorteert.

    const tvLaagHoog = inventory.sort((a, b) => a.price - b.price);

    console.log(tvLaagHoog);
}

eersteOpdracht()

///////////////////////
// Opdracht 2
///////////////////////

const tweedeOpdracht = () => {

    // a. Hoeveel verkocht
    const totaalVerkocht = () => {
        let tvVerkocht = 0;
        for (let i = 0; i < inventory.length; i++) {
            tvVerkocht += inventory[i].sold;
        }

        return tvVerkocht;
    }
    console.log(totaalVerkocht())

    // b
    const verkoop = document.getElementById('verkoop');

    verkoop.innerHTML = `
    <h1>Televisie verkoop</h1>
    <div>We verkopen ons helemaal gek! We hebben vandaag al <span class="verkoop">${totaalVerkocht()}</span> televisie's verkocht </div>
    `

    // c
    const totaalGekocht = () => {
        let tvGekocht = 0;
        for (let i = 0; i < inventory.length; i++) {
            tvGekocht += inventory[i].originalStock;
        }
        return tvGekocht;
    };
    console.log(`Er zijn totaal ${totaalGekocht()} televisies gekocht`);

    // d
    const inkoop = document.getElementById('inkoop');
    inkoop.innerHTML = `
    <h1>Televisie Inkoop</h1>
    <div>We hebben <span class="inkoop">${totaalGekocht()}</span> televisies ingekocht</div>
    `

    // e
    const teVerkopen = document.getElementById('teVerkopen');
    teVerkopen.innerHTML = `
    <h1>Televisies om te verkopen</h1>
    <div>We nog <span class="teVerkopen">${totaalGekocht() - totaalVerkocht()}</span> televisies om te verkopen</div>
    `

};

tweedeOpdracht()

///////////////////////
// Opdracht 3
///////////////////////

// a
const derdeOpdracht = () => {

    const televisieNamen = document.getElementById("televisieNamen");

    televisieNamen.innerHTML =
        `
<h1 className="Assortiment">Assortiment</h1>
        <ul class="list-group">
        ${inventory.map((tv) => {
            return `<li>${tv.name}</li>`
        })
        }
        </ul>`
};

// b

derdeOpdracht()

const vierdeOpdrack = () => {

    // a
    const nameGenerator = () => {
        let fullName = [];
        for (let i = 0; i < inventory.length; i++) {
            fullName.push(`${inventory[i].brand} + ${inventory[i].type} - ${inventory[i].name}`)
        }
        return fullName;
    };

    console.log(nameGenerator())
    nameGenerator();

    // b

    const prijsGenerator = (prijs) => {
        return `€${prijs},-`
    };
    console.log(prijsGenerator(379));

    // c


    // d


    // e


};

vierdeOpdrack();