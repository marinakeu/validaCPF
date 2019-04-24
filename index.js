function cpfValidator (cpfString) {
  let cpf = cpfString.split('');
  if (cpf.length < 11 || cpf.length > 11 || cpf.every(digit => digit === cpf[0])) {
    return false;
  } else if (digitValidator(cpf)) {
    return true;
  } else {
    return false;
  }
}

function digitValidator (cpf) {
  let nineDigitsCpf = cpf.slice(0, 9);
  let firstDigit = getDigits(nineDigitsCpf, false);
  let tenDigitsCpf = nineDigitsCpf;
  tenDigitsCpf.push(firstDigit);
  let secondDigit = getDigits(tenDigitsCpf, true);
  if (firstDigit === parseInt(cpf[9]) && secondDigit === parseInt(cpf[10])) {
    return true;
  } else {
    return false;
  }
}

function getDigits (cpf, secondDigit) {
  let number = secondDigit ? 11 : 10;
  let multiply = cpf.map((element, index) => element * (number - index));
  let sum = multiply.reduce((acc, element) => acc + element);
  let digit = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
  return digit;
}

module.exports.cpfValidator = cpfValidator;