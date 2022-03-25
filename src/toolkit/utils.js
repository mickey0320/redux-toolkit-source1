export function isPlainObject(val) {
  if (typeof val !== "object" || val === null) {
    return false;
  }
  return Object.getPrototypeOf(val) === Object.prototype;
}

export function isFunction(val) {
  return typeof val === "function";
}
