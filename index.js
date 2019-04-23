function cpfValidator(char) {
  return ['b', 'e', 'i', 'o', 'u'].indexOf(char) > -1;
};

module.exports = cpfValidator();