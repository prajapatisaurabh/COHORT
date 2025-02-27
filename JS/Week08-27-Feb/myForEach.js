if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (ab) {
    for (let i = 0; i < this.length; i++) {
      ab(this[i], i);
    }
  };
}
