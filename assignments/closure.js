// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// Not sure if this is what the problem is looking for, but anyhoo. 
let ni = 'ni';
function hao() {
  console.log(ni + ' hao');
}
hao();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable. 

  // I don't quite get why you need a variable to assign the function to, i.e. why dp you need `newCounter = counter()`
  let count=0;
  const inc = function() {
    count = count +1;
    return count;
  }
  return inc;
}
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0; 
  return {
    increment: function() {
      count = count + 1;
    },
    decrement: function() {
      count = count - 1;
    },
    value: function() {
      return count;
    }
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
function newFunction() {
  return 0;
}

