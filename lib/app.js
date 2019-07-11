// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop

let total = 0,
  currentBottles = 0,
  currentCaps = 0;

function calcDepositReturns() {
  if (currentBottles / 2 > 0) {
    let newBottles = Math.floor(currentBottles / 2);
    total += newBottles;
    currentBottles = currentBottles - (newBottles * 2) + newBottles;
    currentCaps += newBottles;
  }

  if (currentCaps / 4 > 0) {
    let newBottles = Math.floor(currentCaps / 4);
    total += newBottles;
    currentCaps = currentCaps - (newBottles * 4) + newBottles;
    currentBottles += newBottles;
  }

  if (currentBottles >= 2 || currentCaps >= 4) {
    return calcDepositReturns();
  }

  return total;
}

function getTotalBottles(cash) {
  const cost = 2,
    initialCount = cash / cost;

  total = initialCount;
  currentCaps = initialCount;
  currentBottles = initialCount;

  return calcDepositReturns();

}

module.exports = getTotalBottles;




