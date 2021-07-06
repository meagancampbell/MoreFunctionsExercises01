function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let primaryCheckFuelLevel = function(num) {
  if (checkFuel(num) === "green") {
    return (99999 - num) *-1
  } else if (checkFuel(num) === "yellow") {
    return (49999 - num) *-1 
  } else {
    return num
  }
}

let annonFunction = function(){
  //triple the value or a string return ARRR!
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
fuelLevel = primaryCheckFuelLevel(fuelLevel)
console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

let cargoCheck = function(b) {
  let waterCheck = cargoHold.indexOf("space suits");
  let mealKitsCheck = cargoHold.indexOf("satellite");
  let checkedItems = []
  checkedItems.push(b.splice(waterCheck,1,"rocks"));
  checkedItems.push(b.splice(mealKitsCheck,1,"tissue"));
  return checkedItems;
};

//console.log(cargoCheck(cargoHold)[0]);

let irs = function(levelOfFuel, itemsInCargo) { 
let arr = cargoCheck(itemsInCargo);

return `Raided ${fuelLevel} kg of fuel from the tanks, and stole ${arr[0]} and ${arr[1]} from the cargo hold.`
}

console.log(irs(fuelLevel, cargoHold))