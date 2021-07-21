function distanceFromHqInBlocks(blockNumber) {
   
    let distance 

    if (blockNumber >= 42) {
       distance = blockNumber - 42
   }
   else {
       distance = 42 - blockNumber
   }

   return distance; 
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(block1, block2) {
    let distance
    if (block1 >= block2){
        distance = block1 - block2
        return distance * 264
    }
    else {
        distance = block2 - block1
        return distance * 264
    }
    }

function calculatesFarePrice(block1, block2) {
    let distance = distanceTravelledInFeet(block1, block2)
    if (distance < 400){
        return 0;
    }
    else if (distance >= 400 && distance < 2000){
        return (distance - 400) * .02;
    }
    else if (distance >= 2000 && distance < 2500){
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}