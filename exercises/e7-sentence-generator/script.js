let noun = ["window", "bed", "swing", "couch"]
let adj1 = ["quietly", "lazily", "softly", "slowly", "gentlely"]
let verb = ["touching", "stretching", "moving", "shaking", "waving"]
let noun2= ["flower branch", "tree", "window frame", "grass"]

const RandomNoun = Math.floor(Math.random() * noun.length);
const RandomAdj1 = Math.floor(Math.random() * adj1.length);
const RandomVerb = Math.floor(Math.random() * verb.length);
const RandomNoun2 = Math.floor(Math.random() * noun2.length);

document.write (`She jumps off the ${RandomNoun, noun[RandomNoun]}, ${RandomAdj1, adj1[RandomAdj1]} ${RandomVerb, verb[RandomVerb]}  her slender hands.The dew is heavy on the thin ${RandomNoun2, noun2[RandomNoun2]},  a light sweat seeps through her shirt.`)
