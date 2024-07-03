export const weakMap = new WeakMap();
let counter = 1;

export const queryAPI = (ep) => {
  if (counter >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(ep, counter);
  counter += 1;
};
