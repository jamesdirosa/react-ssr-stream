import suspensify from '../../src/helpers/suspensify';
import { content, profile, reviews } from './mock-data';

export const useSuspense = true;

export function loadReviews() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(reviews), useSuspense ? 20000 : 0)
  );
  return suspensify(promise, 'loadReviews');
}

export function loadProfile() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(profile), useSuspense ? 2500 : 0)
  );
  return suspensify(promise, 'loadProfile');
}

export function loadContent() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(content), useSuspense ? 5000 : 0)
  );
  return suspensify(promise, 'loadContent');
}
