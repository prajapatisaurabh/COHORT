function cretaeDebounce(fn, delay) {
  let timerid = null;
  return function () {
    clearTimeout();
    timerid = setTimeout(() => {
      //
    }, delay);
  };
}
