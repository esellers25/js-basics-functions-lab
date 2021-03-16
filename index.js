function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber>=42) {
        return blockNumber - 42; 
    } else if (blockNumber<42) {
        return 42 - blockNumber;
    }
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(block1, block2) {
    if (block1 < block2) {
        return (block2 - block1) * 264;
     } else (block1 > block2)
        return (block1 - block2) * 264;
    }

function calculatesFarePrice(block1, block2) {
    let result = distanceTravelledInFeet(block1, block2);
    if (result<400) {
        return 0;
    } else if (result > 400 && result <= 2000) {
        return (result - 400) * .02;
    } else if (result > 2000 && result < 2500) {
        return 25
    } else if (result >= 2500) {
        return "cannot travel that far"
    }
}