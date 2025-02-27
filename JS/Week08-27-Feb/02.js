const pataNahi = (fn, delay) => {
  let myId = null;
  return (...args) => {
    if (myId === null) {
      fn(...args);
      myId = setTimeout(() => {
        myId = null;
      }, delay);
    }
  };
};

const greet = (me) => {
  console.log(`Hello ${me}`);
};

pataNahi(() => greet("ME"), 300);
