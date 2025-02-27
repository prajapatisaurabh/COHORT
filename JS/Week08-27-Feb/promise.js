class MyPromise {
  constructor(executorFn) {
    this._state = "pending";
    this._successCallbakcs = [];
    this._errorCallBacks = [];
    this._finallyCallback = [];
    this.value = undefined;
    executorFn(
      this.resolverFunction.bind(this),
      this.rejectorFunction.bind(this)
    );
  }

  then(cb) {
    if (this._state === "fulfilled") {
      cb(this.value);
      return this;
    }

    this._successCallbakcs.push(cb);
    return this;
  }

  catch(cb) {
    if (this._state === "regected") {
      cb(this.value);
      return this;
    }
    this._errorCallBacks.push(cb);
    return this;
  }

  funally(cb) {
    if (this._state !== "pending") {
      cb();
      return this;
    }
    this._finallyCallback.push(cb);
    return cb;
  }

  resolverFunction() {
    this._state = "fulfilled";
    this._successCallbakcs.forEach((cb) => cb());
    this._finallyCallback.forEach((cb) => cb());
  }

  rejectorFunction() {
    this._state = "regected";
    this._errorCallBacks.forEach((cb) => cb());
    this._finallyCallback.forEach((cb) => cb());
  }
}

function wait(seconds) {
  const p = new MyPromise((resolve, reject) => {
    // setTimeout(() => reject(), seconds * 1000);
    resolve("Hahaha");
  });
  return p;
}

const o = wait(5);

o.then(() => console.log("Resolved after 10 second"))
  .catch(() => console.log("Regect after 10 second"))
  .funally(() => console.log("Do har bar"));

o.then(() => console.log("Resolved after 10 second 1"))
  .catch(() => console.log("Regect after 10 second 1"))
  .funally(() => console.log("Do har bar 1"));
