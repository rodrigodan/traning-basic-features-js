export function verifyIf2OperandsIsNumeric(num1, num2) {
  // console.log(num1);
  // console.log(num2);
  // console.log(Number(num1) !== NaN);
  return (
    !Number.isNaN(Number(num1)) &&
    !Number.isNaN(Number(num2)) &&
    ['number', 'bigint'].includes(typeof Number(num1)) &&
    ['number', 'bigint'].includes(typeof Number(num2))
  );
}

export function notPassedValue(num1, num2) {
  console.log(num1 === '' || num2 === '');
  return num1 === '' || num2 === '';
}
