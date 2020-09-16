var fs = require('fs');

var data;
var setID = process.argv[2];

try {
    data = fs.readFileSync(`data/raw/${setID}.json`, 'utf8')
    // console.log(data);
} catch (err) {
    console.error(err)
}

// Format Data
let cards = JSON.parse(data).data.cards;

cards = cards.filter(card => {
    return card.layout !== 'token'
        && !card.promoTypes;
});

cards = cards.map(({
    colorIdentity,
    convertedManaCost,
    manaCost,
    name,
    power,
    rarity,
    toughness,
    types,
}) => {
    return {
        colorIdentity,
        convertedManaCost,
        manaCost,
        name,
        power,
        rarity,
        toughness,
        types,
    };
});

console.log(cards.length);

const outputFilename = `data/formatted/${setID}.json`;

fs.writeFile(outputFilename, JSON.stringify({ data: {cards }}, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
});