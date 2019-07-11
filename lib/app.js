// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop

let total = 0,
  currentBottles = 0,
  currentCaps = 0
  newFromCaps = 0,
  newFromBottles = 0;

function calculateBottlesDeposits() {
  let newBottles = Math.floor(currentBottles / 2);
  total += newBottles;
  currentBottles = currentBottles - (newBottles * 2) + newBottles;
  currentCaps += newBottles;
  newFromBottles += newBottles;
}

function calculateCapsDeposits() {
  let newBottles = Math.floor(currentCaps / 4);
  total += newBottles;
  currentCaps = currentCaps - (newBottles * 4) + newBottles;
  currentBottles += newBottles;
  newFromCaps += newBottles;
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

function logDetails() {
  console.log(`TOTAL BOTTLES: ${total}`);
  console.log(`REMAINING BOTTLES: ${currentBottles}`);
  console.log(`REMAINING CAPS: ${currentCaps}`);
  console.log(`TOTAL EARNED: ${total} \n  BOTTLES: ${newFromBottles} \n  CAPS: ${newFromCaps}`);
}

function getTotalBottles(cash) {
  cash = parseInt(cash);
  if (!cash) {
    console.log('you must supply a number');
    return;
  }
  const cost = 2,
    initialCount = cash / cost;

  total = initialCount;
  currentCaps = initialCount;
  currentBottles = initialCount;

  total = depositReturns(); 
  logDetails();
  return total;

}

const input = process.argv[2];
getTotalBottles(input);


module.exports = getTotalBottles;
