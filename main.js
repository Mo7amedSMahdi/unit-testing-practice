module.exports = {};

module.exports.stringLength = (string) => {
  if (string && string.length > 0 && string.length <= 10) return string.length;
  else {
    throw new Error('Not matching conditions');
  }
};

module.exports.reverseString = (string) => {
  return string.split('').reverse().join('');
};

module.exports.calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

module.exports.capitalize = (string) => {
  if (string.length > 0 && isNaN(string)) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    throw new Error('Not matching conditions');
  }
};
