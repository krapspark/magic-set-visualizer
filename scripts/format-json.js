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
let fullJSON = JSON.parse(data);
let setSize = fullJSON.data.baseSetSize;

cards = fullJSON.data.cards.filter(card => {
    return card.number <= setSize
        && !card.promoTypes
        && !(card.supertypes && card.supertypes.indexOf('Basic') >= 0);
});

cards = cards.map(({
    colorIdentity,
    convertedManaCost,
    manaCost,
    faceName,
    name,
    power,
    rarity,
    subtypes,
    toughness,
    types,
}) => {
    return {
        colorIdentity,
        convertedManaCost,
        manaCost,
        name: faceName || name,
        power,
        rarity,
        subtypes,
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