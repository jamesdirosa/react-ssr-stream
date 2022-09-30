// WIP: https://codesandbox.io/s/kind-sammet-j56ro?file=/src/Html.js
import React from "react";
import "./styles.css";
export default function Html({ children }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="/bundle.css" />
        <body>{children}</body>
      </head>
    </html>
  );
}
