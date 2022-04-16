//import '../styles/globals.css'
import "@picocss/pico"

import "prismjs/themes/prism-tomorrow.css";
import React,  { useEffect } from "react"
import prism from "prismjs";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    prism.highlightAll();
  }, []);
  return <Component  {...pageProps} />
}

export default MyApp
