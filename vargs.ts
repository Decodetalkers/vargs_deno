export class Vargs {
  // deno-lint-ignore no-explicit-any
  private _callback: (() => any) | undefined = undefined;
  // deno-lint-ignore no-explicit-any
  private _arrays: Array<any>;
  // deno-lint-ignore no-explicit-any
  constructor(arg: Array<any>, callback: (() => any) | undefined = undefined) {
    this._arrays = arg;
    this._callback = callback;
  }
  get length() {
    return this._arrays.length;
  }
  get last() {
    return this._arrays.at(-1);
  }
  get first() {
    return this._arrays[0];
  }
  get all() {
    return this._arrays;
  }
  callbackGiven() {
    return this._callback !== undefined;
  }
  get array() {
    return this._arrays;
  }

  get callback() {
    return this._callback === undefined ? () => {} : this._callback;
  }
}
