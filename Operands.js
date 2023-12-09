export class Operands {
  operandsA;
  operandsB;
  constructor(operandA = 1, operandb = 2) {
    this.operandA = operandA;
    this.operandB = operandb;
  }

  get OperandsA() {
    return this.operandsA;
  }
  get OperandsB() {
    return this.operandsB;
  }

  set OperandsA(operandsA) {
    this.operandsA = operandsA;
  }
  set OperandsB(operandsB) {
    this.operandsB = operandsB;
  }
}
