// You just need to implement the addPuppy function
function addPuppy(queue, puppyName) {
  //   queue.unshift(puppyName);
  queue.splice(0, 0, puppyName);
  return queue;
}

console.log(addPuppy(["A", "B"], "AB"));
