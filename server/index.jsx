import express from "express";
import { renderToPipeableStream } from "react-dom/server";
import React from "react";
import { App } from "../src/App";
import path from "path";
import { useSuspense } from "./dal/api";
import { awaitMs } from "../src/helpers/awaitTimeout";

const app = express();
const port = 5000;

// No webpack, etc, so our bundles are static
const assets = {
  "bundle.js": "/bundle.js",
  "bundle.css": "/bundle.css",
};

// root route
app.get("/", async (req, res) => {
  let didError = false;

  // If we are not using suspense, simulate the slow call at 20s
  if (!useSuspense) {
    await awaitMs(20000);
  }

  // https://reactjs.org/docs/react-dom-server.html#rendertopipeablestream
  const { pipe } = renderToPipeableStream(<App assets={assets} />, {
    // The content above all Suspense boundaries is ready.
    onShellReady() {
      // Helper to quick exit in case I am demoing CSR
      if (!useSuspense) {
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

    // This is how you would perform non streamed SSR
    onAllReady() {
      if (useSuspense) {
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
