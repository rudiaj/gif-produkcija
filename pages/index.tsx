import Head from "next/head";
import Filters from "../components/Filters";
import Footer from "../components/Footer";

import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import { useUI } from "../context/UIProvider";
import { GlobalStyle } from "../styles/styles";

export default function Home() {
  const { expandedCardIndex } = useUI();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle isExpanded={expandedCardIndex !== null} />
      <Navigation />
      <Filters />
      <Projects />
      <Footer />
    </div>
  );
}
