import { GlobalStyle } from "../styles/styles";

import localFont from "next/font/local";
import { UIProvider, useUI } from "../context/UIProvider";

const geomanist = localFont({
  src: "../assets/Geomanist/geomanist-book-webfont.woff2",
  variable: "--geomanist-font",
});

export default function MyApp({ Component, pageProps }) {
  const { expandedCardIndex } = useUI();

  console.log(111, expandedCardIndex);
  return (
    <div className={geomanist.className}>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </div>
  );
}
