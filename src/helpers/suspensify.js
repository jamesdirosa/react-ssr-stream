import { clog } from "./log";

/**
 * Used to throw an Error of type Promise until the promise resolves.
 * Currently only Relay supports this out of the box, so I had to write a helper
 * @param {*} promise
 * @param {*} fnName - logging helper to trace what function is being called
 * @returns
 */
function suspensify(promise, fnName) {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const handler = {
    pending: () => {
      // Suspense requires an error of type Promise to know it should use the fallback.
      // You could return `throw new Promise();` here, too
      throw suspender;
    },
    error: () => {
      throw response;
    },
    success: () => response,
  };

  const read = () => {
    clog(`${fnName} Status: ${status}`);
    const result = handler[status]();
    return result;
  };

  return { read };
}

export default suspensify;
