import Head from "next/head";
import Filters from "../components/Filters";
import Footer from "../components/Footer";

import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Filters />
      <Projects />
      <Footer />
    </div>
  );
}
