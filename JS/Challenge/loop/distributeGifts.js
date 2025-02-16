// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  if (totalGifts < friends) {
    return totalGifts;
  }
  for (let i = 0; i < friends; i++) {
    totalGifts--;
  }
  return totalGifts;
}

distributeGifts(2, 4);
