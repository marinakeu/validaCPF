function cpfValidator (cpfString) {
  const cpf = cpfString.split('');
  if (hasElevenDifferentDigits(cpf) && digitsValidator(cpf)) return true;
  return false;
}

function hasElevenDifferentDigits (cpf) {
  if (cpf.length < 11 || cpf.length > 11 || cpf.every(digit => digit === cpf[0])) return false;  
  return true;
}

function digitsValidator (cpf) {
  let tenthDigit = getTenthAndEleventhDigits(cpf.slice(0, 9), false);
  let eleventhDigit = getTenthAndEleventhDigits((cpf.slice(0, 9)).concat([tenthDigit]), true);
  if (tenthDigit === parseInt(cpf[9]) && eleventhDigit === parseInt(cpf[10])) return true;
  return false;
}

function getTenthAndEleventhDigits (cpf, eleventhDigit) {
  let multiplier = eleventhDigit ? 11 : 10;
  let multiply = cpf.map((element, index) => element * (multiplier - index));
  let sum = multiply.reduce((acc, element) => acc + element);
  let digit = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
  return digit;
}

module.exports.cpfValidator = cpfValidator;