function pataNahi(fn, delay) {
  let myId;
  return function (...args) {
    clearTimeout(myId);
    myId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function greet(name) {
  console.log(`Hello, ${name}`);
}

const rest = pataNahi(() => greet("helloI AM"), 3000);
rest();
rest();
rest();
rest();
rest();
