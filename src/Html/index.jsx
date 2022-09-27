// WIP: https://codesandbox.io/s/kind-sammet-j56ro?file=/src/Html.js
import React from "react";
import "./styles.css";

export default function Html({ children }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <body>{children}</body>
      </head>
    </html>
  );
}
