console.log("Hii");

setTimeout(() => console.log("0"), 0);

Promise.resolve().then(() => {
  console.log("Promise Resolve ho gaya1");
  Promise.resolve().then(() => {
    console.log("Promise Resolve ho gaya2");
    Promise.resolve().then(() => {
      console.log("Promise Resolve ho gaya3");
      Promise.resolve().then(() => {
        console.log("Promise Resolve ho gaya4");
      });
    });
  });
});

setTimeout(() => console.log("0"), 0);

console.log("Bye");
