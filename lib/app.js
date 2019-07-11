// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop

let total = 0,
  currentBottles = 0,
  currentCaps = 0;

function calculateBottlesDeposits() {
  let newBottles = Math.floor(currentBottles / 2);
  total += newBottles;
  currentBottles = currentBottles - (newBottles * 2) + newBottles;
  currentCaps += newBottles;
}

function calculateCapsDeposits() {
  let newBottles = Math.floor(currentCaps / 4);
  total += newBottles;
  currentCaps = currentCaps - (newBottles * 4) + newBottles;
  currentBottles += newBottles;
}

function depositReturns() {
  if (currentBottles / 2 > 0) {
    calculateBottlesDeposits();
  }

  if (currentCaps / 4 > 0) {
    calculateCapsDeposits();
  }

  if (currentBottles >= 2 || currentCaps >= 4) {
    return depositReturns();
  }

  return total;
}

function getTotalBottles(cash) {
  const cost = 2,
    initialCount = cash / cost;

  total = initialCount;
  currentCaps = initialCount;
  currentBottles = initialCount;

  return depositReturns();

}

module.exports = getTotalBottles;
