// 1a
const jPDinos = [
    "Velociraptors", 
    "Tyrannosaurus Rex", 
    "Dilophosaurus"
];

// 1b
function seeDinos(i, ...j){
    console.log(i);
    console.log(j);
};
seeDinos(`Velociraraptors`,`Tyrannosaurus Rex`,`Dilophosaurus`);

seeDinos(...jPDinos);

console.log(`=` .repeat(25));

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

// 2b
seeCharacters = ({ellieSattler}) => 
console.log(ellieSattler);

seeCharacters(jPCharacters);

console.log(`=`.repeat25);

// BONUS BONUS BONUS

// 3a
const jurassicParkMovies = [
    {
        one: "Jurassic Park",
        two: "The Lost World: Jurassic Park",
        three: "Jurassic Park III",
    },
    {
        four: "Jurassic World",
        five: "Jurassic World: Fallen Kingdom",
        six: "Jurassic World: Dominion"
    }
];
//  need to reference this again
// 3b
function seeJPMovies ([{one, two, three},{four, five, six}]){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
    
};



