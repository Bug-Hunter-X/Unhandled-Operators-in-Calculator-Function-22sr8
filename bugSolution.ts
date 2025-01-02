function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function modulo(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot calculate modulo with zero');
    }
    return a % b;
  }

function operate(operator: string, a: number, b: number): number {
  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    case '%': return modulo(a, b);
    default: throw new Error('Invalid operator');
  }
}

console.log(operate('+', 1, 2)); // 3
console.log(operate('-', 1, 2)); // -1
console.log(operate('*', 1, 2)); // 2
console.log(operate('/', 1, 2)); // 0.5
console.log(operate('/', 1, 0)); // Error: Cannot divide by zero
console.log(operate('%', 1, 2));//1