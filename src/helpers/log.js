const LOGGING_ENABLED = true;

export function clog(data) {
  if (!LOGGING_ENABLED) {
    return;
  }
  console.log(JSON.stringify(data, null, 2));
}
