import express from "express";
import { renderToPipeableStream } from "react-dom/server";
import React from "react";
import { App } from "../src/App";
import path from "path";

const streamResponse = true;

const app = express();
const port = 3000;

let assets = {
  "bundle.js": "/bundle.js",
  "bundle.css": "/bundle.css",
};

app.get("/", (req, res) => {
  let didError = false;

  // https://reactjs.org/docs/react-dom-server.html#rendertopipeablestream
  const { pipe } = renderToPipeableStream(<App assets={assets} />, {
    // The content above all Suspense boundaries is ready.
    onShellReady() {
      if (!streamResponse) {
        return;
      }

      // If something errored before we started streaming, we set the error code appropriately.
      res.statusCode = didError ? 500 : 200;
      res.setHeader("Content-type", "text/html");
      pipe(res);
    },

    // Load the javascript after static html. Will wire up events on load.
    bootstrapScripts: ["/bundle.js"],
    onError(err) {
      didError = true;
      console.error(err);
    },
    onAllReady() {
      if (streamResponse) {
        return;
      }
      pipe(res);
    },
  });
});

app.use(express.static(path.join(__dirname, "/../dist")));

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
