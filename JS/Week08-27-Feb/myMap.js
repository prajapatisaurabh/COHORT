if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (ab) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = ab(this[i], i);
      result.push(value);
    }
    return result;
  };
}
