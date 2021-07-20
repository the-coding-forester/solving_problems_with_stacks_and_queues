const Queue = require("./lib/queue");

const binary = (max) => {
  // Initialize an empty queue
  const queue = new Queue();

  // Enqueue the string "1". This represents binary number 1.
  queue.enqueue("1");

  // Initialize an empty array named result
  let result = [];

  let currentValue = 1;
  // Iterate from 1 to max and do:
  while (currentValue <= max) {
    // Dequeue a value from the queue
    // Push the value into result
    result.push(queue.dequeue());
    currentValue += 1;
    queue.enqueue(parseInt(currentValue).toString(2));
  }

  return result
};

module.exports = binary;
