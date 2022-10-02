/**
 * Used to throw an Error of type Promise until the promise resolves
 * @param {*} promise
 * @returns
 */
function suspensify(promise) {
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
      throw suspender;
    },
    error: () => {
      throw response;
    },
    success: () => response,
  };

  const read = () => {
    console.log("reading", { status });
    const result = handler[status]();
    console.log({ result });
    return result;
  };

  return { read };
}

export default suspensify;
