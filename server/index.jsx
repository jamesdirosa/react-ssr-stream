import express from "express";
import { renderToPipeableStream } from "react-dom/server";
import React from "react";
import { App } from "../src/App";
import path from "path";
import { Writable } from "node:stream";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const stream = new Writable({
    write(chunk, _encoding, cb) {
      res.write(chunk, cb);
    },
    final() {
      res.end(
        '<script src="http://localhost:3000/bundle.js"></script></body></html>'
      );
    },
  });
  const { pipe } = renderToPipeableStream(
    <div id="root">
      <App />
    </div>,
    {
      onShellReady() {
        res.write(
          '<html><head><style>body{margin:0;}</style><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/><body>'
        );
        pipe(stream);
      },
    }
  );
});

app.use(express.static(path.join(__dirname, "/../dist")));

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
