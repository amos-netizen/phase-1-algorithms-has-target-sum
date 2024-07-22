function hasTargetSum(array, target) {
    const seenNumbers = new Set();
    for (const number of array) {
      const complement = target - number;
      if (seenNumbers.has(complement)) {
        return true;
      }
      seenNumbers.add(number);
    }
    return false;
  }
  
  module.exports = hasTargetSum;
  