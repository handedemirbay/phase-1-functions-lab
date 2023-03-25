// Code your solution in this file!
let scuberHq = 42;
let blockFeet = 264;

function distanceFromHqInBlocks(pickup){
  return Math.abs(pickup - scuberHq);
}

function distanceFromHqInFeet(pickup){
  return distanceFromHqInBlocks(pickup) * blockFeet;
}

function distanceTravelledInFeet(start, destination){
  return (Math.abs(start - destination)) * blockFeet;
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  let price;
  
  if (distance <= 400){
    price = 0;
  }
  else if (distance > 400 && distance <= 2000){
    price = (distance - 400) * 0.02;
  }
  else if (distance > 2000 && distance <= 2500){
    price = 25;
  }
  else{
    price = 'cannot travel that far';
  }
  return price;
}
