"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Categories } from "../constants";

const whileHover = {
  border: "1px solid #212529",
};

const Filters = () => {
  const router = useRouter();

  const onFilterClick = (filterBy: string) => {
    const url = new URL(window.location.href);
    const currentFilter = url.searchParams.get("filter");

    if (currentFilter === filterBy) {
      url.searchParams.delete("filter");
    } else {
      url.searchParams.set("filter", filterBy);
    }

    router.push(url.pathname + url.search);
  };

  const isFilterActive = (filter: string) => {
    if (typeof window === "undefined") return false;
    return new URL(window.location.href).searchParams.get("filter") === filter;
  };

  return (
    <div className="sticky top-[82px] z-20 bg-white container mx-auto px-4">
      <svg width="100%" height="1">
        <motion.line
          x1="0"
          y1="0"
          initial={{ x2: "0", opacity: 0, stroke: "#212529" }}
          animate={{ x2: "100%", opacity: 1, stroke: "#e9ecef" }}
          transition={{
            delay: 0.5,
            duration: 1.5,
            stroke: {
              delay: 1.75,
              duration: 1,
            },
          }}
          y2="0"
          strokeWidth="1"
        />
      </svg>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center py-3 gap-3"
      >
        {Object.values(Categories).map((category) => (
          <motion.button
            key={category}
            whileHover={whileHover}
            onClick={() => onFilterClick(category)}
            className={`border border-border px-3 py-3 ${
              isFilterActive(category)
                ? "bg-dark text-light border-dark"
                : "bg-transparent text-text-primary"
            } rounded-full text-xs leading-tight font-[var(--geomanist-font)] whitespace-nowrap cursor-pointer`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Filters;
