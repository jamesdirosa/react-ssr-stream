import suspensify from "../../src/helpers/suspensify";

export function getComments() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(comments), 5000)
  );
  return suspensify(promise);
}

const comments = [
  {
    userName: "Jerry Seinfeld",
    comment: "These pretzels are making me thirsty",
  },
];
