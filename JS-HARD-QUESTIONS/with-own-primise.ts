type TPromiseResolve<T> = (value: T) => void;
type TPromiseReject<T> = (reason: T) => void;

type TPromiseExecutor<T, K> = (
  resolve: TPromiseResolve<T>,
  reject: TPromiseReject<K>
) => void;

type TPromiseThenCallback<T> = (val: T | undefined) => void;
type TPromiseCatchCallback<T> = (val: T | undefined) => void;
type TPromiseFinallyCallback = () => void;

enum PromiseState {
  PENDING = "pending",
  FULLFILLED = "fullfilled",
  REJECTED = "REJECTED",
}

class MyPromise<T, K> {
  private _state: PromiseState = PromiseState.PENDING;
  private _successCallbackHandlers: TPromiseThenCallback<T>[] = [];
  private _failuerCallbackHandlers: TPromiseCatchCallback<K>[] = [];
  private _finallyCallbackHandelr: TPromiseFinallyCallback | undefined =
    undefined;

  private _value: T | undefined = undefined;
  private _reason: K | undefined = undefined;

  constructor(executor: TPromiseExecutor<T, K>) {
    executor(
      this._promiseResolver.bind(this),
      this._promiseRejecrtor.bind(this)
    );
  }

  public then(handler: TPromiseThenCallback<T>) {
    if (this._state === PromiseState.FULLFILLED) {
      handler(this._value);
    } else {
      this._successCallbackHandlers.push(handler);
    }
    return this;
  }

  public catch(handler: TPromiseCatchCallback<K>) {
    if (this._state === PromiseState.REJECTED) {
      handler(this._reason);
    } else {
      this._failuerCallbackHandlers.push(handler);
    }
    return this;
  }

  public finally(handler: TPromiseFinallyCallback) {
    if (this._state !== PromiseState.PENDING) {
      return handler();
    }
  }

  private _promiseResolver(value: T) {
    if (this._state === PromiseState.FULLFILLED) {
      return;
    }
    this._value = value;
    this._state = PromiseState.FULLFILLED;
    this._successCallbackHandlers.forEach((cb) => cb(value));
  }

  private _promiseRejecrtor(reason: K) {
    if (this._state === PromiseState.REJECTED) {
      return;
    }
    this._reason = reason;
    this._state = PromiseState.REJECTED;
    this._failuerCallbackHandlers.forEach((cb) => cb(reason));
  }
}

// RUN OUR CODE

function customPromise() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => resolve(1), 5000);
  });
}

const p1 = customPromise().then((val) =>
  console.log(`promise resolved ${val}`)
);
