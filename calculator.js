import { verifyIf2OperandsIsNumeric, notPassedValue } from './utilities';
import { Operands } from './Operands.js';

export class Calculator extends Operands {
  constructor(operandA = 1, operandB = 2) {
    super(operandA, operandB);
  }
  sum(num1, num2) {
    if (!notPassedValue(num1, num2)) {
      if (!verifyIf2OperandsIsNumeric(num1, num2)) {
        throw new Error('Both numbers must be numeric');
      }
      return Number(num1) + Number(num2);
    }
    if (!verifyIf2OperandsIsNumeric(this.operandA, this.operandB)) {
      throw new Error('Both numbers must be numeric');
    }
    return this.operandA + this.operandB;
  }
  divide(num1, num2) {
    if (!notPassedValue(num1, num2)) {
      if (num2 === 0) {
        throw new Error('Division per 0');
      }
      if (!verifyIf2OperandsIsNumeric(num1, num2)) {
        throw new Error('Both numbers must be numeric');
      }
      return num1 / num2;
    }
    if (this.operandB == 0) {
      throw new Error('Division per 0');
    }
    if (!verifyIf2OperandsIsNumeric(this.operandA, this.operandB)) {
      throw new Error('Both numbers must be numeric');
    }
    return this.operandA / this.operandB;
  }

  multiply(num1, num2) {
    if (!notPassedValue(num1, num2)) {
      if (!verifyIf2OperandsIsNumeric(num1, num2)) {
        throw new Error('Both numbers must be numeric');
      }
      return num1 * num2;
    }
    if (!verifyIf2OperandsIsNumeric(this.operandA, this.operandB)) {
      throw new Error('Both numbers must be numeric');
    }
    return this.operandA * this.operandB;
  }

  sub(num1, num2) {
    if (!notPassedValue(num1, num2)) {
      if (!verifyIf2OperandsIsNumeric(num1, num2)) {
        throw new Error('Both numbers must be numeric');
      }
      return num1 - num2;
    }
    if (!verifyIf2OperandsIsNumeric(this.operandA, this.operandB)) {
      throw new Error('Both numbers must be numeric');
    }
    return this.operandA - this.operandB;
  }
}

// export default sum;
// export default divide;
// export default multiply;
// export default sub;
