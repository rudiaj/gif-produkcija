import localFont from "next/font/local";
import { UIProvider } from "../context/UIProvider";

const geomanist = localFont({
  src: "../assets/Geomanist/geomanist-book-webfont.woff2",
  variable: "--geomanist-font",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={geomanist.className}>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </div>
  );
}
