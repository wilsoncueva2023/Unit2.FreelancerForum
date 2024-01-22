
const names = ["luca","pocho","marco","ton","moncho"];
const ocupations = ["writer", "poet", "driver","nurse","coder"];
const prices = [30,40,20,60,70];
//const maxShapes = 10;

// {"name": "luk", "ocupation":"painter", "price":80},
// {"name": "ton", "ocupation":"writer", "price":40},
// {"name": "pol", "ocupation":"poet", "price":70},
// {"name": "pet", "ocupation":"coder", "price":50},
// {"name": "tim", "ocupation":"labor", "price":20}
// ];

// const shapes = [
//   {
//     name: "luca",
//     ocupation: "writer",
//     price: 30
//   },
//   {
//     name: "pocho",
//     ocupation: "poet",
//     price: 40
//   },
//   {
//     name: "marco",
//     ocupation: "driver",
//     price: 20
//   },
      
//   {
//     name: "ton",
//     ocupation: "nurse",
//     price: 60
//   },
  
//   {
//    name: "luca",
//    ocupation: "coder",
//    price: 70
//   },
// ];

function getRandomName(){
  const randomIndex = Math.floor(Math.random()*names.length);
  const randomName = names[randomIndex];
  const randomIndex1 = Math.floor(Math.random()*ocupations.length);
  const randomOcupation = ocupations[randomIndex];
  const randomIndex2 = Math.floor(Math.random()*prices.length);
  const randomPrice = prices[randomIndex2];

  //document.getElementById("random-name").textContent=randomName +" "+ randomOcupation +" "+ randomPrice; 




}
