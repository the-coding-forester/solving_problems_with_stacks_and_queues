const Stack = require("./lib/stack");

const match = (expression) => {
  const stack = new Stack();

  for (let index = 0, limit = expression.length; index < limit; index++) {
    switch (expression[index]) {
      case "(":
        stack.push("(");
        break;
      case "{":
        stack.push("{")
        break;
      case "[":
        stack.push("[");
        break;
      case ")":
        if (stack.top === null || stack.top.value !== "(") {
          return false
        } else {
          stack.pop()
        }
        break;
      case "}":
        if (stack.top === null || stack.top.value !== "{") {
          return false
        } else {
          stack.pop()
        }
        break;
      case "]":
        if (stack.top === null || stack.top.value !== "[") {
          return false
        } else {
          stack.pop()
        }
        break;
    }
  }
  return !stack.top;
};

module.exports = match;
