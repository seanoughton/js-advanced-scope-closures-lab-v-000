//Returns a function that then calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.

function produceDrivingRange(blockRange) {
  //blockRange is the number of blocks where something is in range

  return function (beginningBlock,endingBlock) {
    let begNum = beginningBlock.slice(0,-2);
    console.log (begNum);
    if ( (beginningBlock - endingBlock) <= blockRange ) {
      return `2 blocks out of range`;
    } else {
      return `within range by 4`;
    }
  };
};
