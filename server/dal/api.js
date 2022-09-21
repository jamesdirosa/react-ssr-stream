import suspensify from "../../src/helpers/suspensify";
import { content, profile, reviews } from "./mock-data";

export function loadReviews() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(reviews), 20000)
  );
  return suspensify(promise, "loadReviews");
}

export function loadProfile() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(profile), 2500)
  );
  return suspensify(promise, "loadProfile");
}

export function loadContent() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(content), 5000)
  );
  return suspensify(promise, "loadContent");
}
