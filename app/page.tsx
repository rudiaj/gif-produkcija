import { BlurAndScaleFilter } from "@/components/BlurAndScaleFilter";
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <BlurAndScaleFilter />
      <Navigation />
      {/* <Filters /> */}
      <Projects />
      <Footer />
    </>
  );
}
