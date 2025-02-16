// You just need to implement the writeLoveLetter function
function writeLoveLetter(message, name) {
  console.log(message.length);
  message.unshift(name);
  return message;
}

console.log(writeLoveLetter(["A", "B"], "AB"));
