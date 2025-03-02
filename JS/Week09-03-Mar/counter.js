function increment() {
  let count = 0;
  return function () {
    console.log(count);
    return count++;
  };
}

increment()();
