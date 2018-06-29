//Returns a function that then calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.

function produceDrivingRange(blockRange) {
  //blockRange is the number of blocks where something is in range
  return function (beginningBlock,endingBlock) {
    let begNum = parseInt(beginningBlock.slice(0,-2), 10);
    let endNum = parseInt(endingBlock.slice(0,-2), 10);
    let range = blockRange - (endNum - begNum);

    if ( range > 0 ) {
      return `within range by ${range}`;
    } else {
      return `${range *= -1} blocks out of range`;
    }
  };
};

//- Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.
function produceTipCalculator(tipPerc) {
  return function (amount){
    return amount * tipPerc;
  };
};

//createDriver returns a function that returns a class that produces a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.

function createDriver () {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
    }
  }

};
