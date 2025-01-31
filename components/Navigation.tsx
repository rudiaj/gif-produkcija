"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useUI } from "@/context/UIProvider";

const Navigation = () => {
  const { setApplyOverlay } = useUI();
  const { scrollYProgress } = useScroll();

  useTransform(scrollYProgress, (pos) => {
    setApplyOverlay(pos > 0);
  });

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-20 mb-32"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Image alt="logo" src="/images/logo.svg" width={32} height={32} />
          <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 px-6 text-white bg-black transition-all duration-100 [box-shadow:5px_5px_rgb(255_255_255)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(255_255_255)]">
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
