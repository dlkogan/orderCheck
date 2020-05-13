const orderCheck = (takeOut, dineIn, servedOrders) => {
  //we need to make sure going through an array of servedOrders
  //nothing is served too early
  //EDGE CASE: Can takeout and dineIn order have different lengths?
  //NOTE: The in order only has to be in order within their arrays
  //Num at Counter of servedOrders, is the value at takeOut that value?
  //Is the value at DineIn that value?
  //If not it's not in order
  //if in dineIn increment
  //if in takeOut increment

  //WHAT IF WE HAVE ORDERS with DUPLICATE ORDERS from the same customer
  //I'd handle it that we would want to put their orders together w/ the later order

  let dineInInd = 0;
  let takeOutInd = 0;
  for(let i = 0; i < servedOrders.length - 1; i++) {
    if(servedOrders[i] === dineIn[dineInInd]) {
      dineInInd++;
    } else if(servedOrders[i] === takeOut[takeOutInd]) {
      takeOutInd++;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = orderCheck;

//Take Out Orders: [17, 8, 24]
//Dine In Orders: [12, 19, 2]
// Served Orders: [17, 8, 12, 19, 24, 2]
