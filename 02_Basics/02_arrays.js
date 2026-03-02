const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["spiderman", "shaktiman", "batman"]

const all_heros = [...dc_heros, ...marvel_heros];
console.log(all_heros);


console.log(Array.isArray("vijay"));
console.log(Array.from("shah"));


let score1 =100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
