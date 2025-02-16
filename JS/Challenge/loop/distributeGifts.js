// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  for (let i = 0; i < friends; i++) {
    totalGifts--;
  }
  return totalGifts;
}
