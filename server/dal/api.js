import suspensify from "../../src/helpers/suspensify";

export function getComments() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(comments), 10000)
  );
  return suspensify(promise);
}

export function loadProfile() {
  const promise = new Promise((res, rej) =>
    setTimeout(() => res(profile), 5000)
  );
  return suspensify(promise);
}

const comments = [
  {
    userName: "Jerry Seinfeld",
    comment: "These pretzels are making me thirsty",
  },
];

const profile = {
  url: "https://www.gravatar.com/avatar/7908ed06cb1bbe8355b9382fe0bedeb3?s=200",
  name: "James DiRosa",
};
