/**
 * Just a way to artificially await some amount of time
 * @param {*} time - ms
 * @returns
 */
export function awaitMs(time) {
  return new Promise((res) => setTimeout(() => res(), time));
}
