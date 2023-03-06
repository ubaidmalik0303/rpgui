import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import { RPGUI } from "../images/rpgui.min.js";

export default function Document() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Script Kay Bahar")
      RPGUI();
    }
  }, []);

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
