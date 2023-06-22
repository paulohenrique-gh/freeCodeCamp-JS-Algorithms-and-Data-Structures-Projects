function checkCashRegister(price, cash, cid) {
  let change = cash - price.toFixed(2);

  let monetaryValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    
  let changeArray = []

  let statusObject = {
    status: "",
    change: changeArray
  };
  
  let totalInRegister = cid.reduce((total, value) => total + value[1], 0).toFixed(2);
  if (totalInRegister < change) {
    statusObject.status = "INSUFFICIENT_FUNDS";
    return statusObject;
  } else if (totalInRegister == change) {
    changeArray = cid;
    statusObject.status = "CLOSED";
    statusObject.change = changeArray;
    return statusObject;
  } else {
    statusObject.status = "OPEN";
  }

  
  for (let i = cid.length - 1; i >= 0; i--) {
    let coinName = "";
    let coinQty = 0;
    while (change.toFixed(2) >= monetaryValues[i]) {
      if (cid[i][1] >= monetaryValues[i]) {
        change -= monetaryValues[i];
        coinName = cid[i][0];
        coinQty += monetaryValues[i];
        cid[i][1] -= monetaryValues[i];
      } else {
        break;
      }
    }
    if (coinName !== "" && coinQty !== 0) {
      let partialChange = [coinName, coinQty];
      changeArray.push(partialChange);
    }
    if (change === 0) {
      break;
    }
    if (i === 0 && change > 0) {
      changeArray = [];
      statusObject.status = "INSUFFICIENT_FUNDS";
      statusObject.change = changeArray;
    }
  }

  return statusObject;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));