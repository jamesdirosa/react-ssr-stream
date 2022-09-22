import suspensify from "../../src/helpers/suspensify";
import { content, profile, reviews } from "./mock-data";

export function loadReviews() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(reviews), 12000)
  );
  return suspensify(promise);
}

export function loadProfile() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(profile), 3000)
  );
  return suspensify(promise);
}

export function loadContent() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(content), 6000)
  );
  return suspensify(promise);
}
