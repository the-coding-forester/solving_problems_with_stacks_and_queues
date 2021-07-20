const Stack = require("./lib/stack");

const evaluate = (expression) => {
  // initialize an empty stack
  const stack = new Stack();

  // remove all spaces from the expression
  expression = expression.replace(/\s/g, "");

  let result;

  // for each character in the expression
  expression.split("").forEach((character) => {
    // if the character is an operand push it unto the stack
    if (!isNaN(character)) {
      stack.push(parseInt(character))
    } else {
      let b = stack.pop();
      let a = stack.pop();
      switch (character) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = a / b;
          break;
      }
      stack.push(result);
    }
  })
  return stack.pop();
};

module.exports = evaluate;
