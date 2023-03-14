import { GlobalStyle } from "../styles/styles";

import localFont from "next/font/local";

const geomanist = localFont({
  src: "../assets/Geomanist/geomanist-book-webfont.woff2",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={geomanist.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}
