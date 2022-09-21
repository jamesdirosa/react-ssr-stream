export function awaitMs(time) {
  return new Promise((res) => setTimeout(() => res(), time));
}
