import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Categories } from "../constants";
import { Button, Wrapper, StickyContainer } from "./Filters.styles";

const whileHover = {
  border: "1px solid #212529",
};

const Filters = () => {
  const { push, query, pathname } = useRouter();

  const onFilterClick = (event) => {
    const {
      currentTarget: { dataset },
    } = event;

    const url =
      query.filter === dataset.filterBy
        ? {
            pathname,
          }
        : {
            pathname,
            query: { ...query, filter: dataset.filterBy },
          };

    push(url, undefined, { shallow: true });
  };

  return (
    <StickyContainer>
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
          stroke-width="1"
        />
      </svg>
      <Wrapper
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
      >
        <Button
          whileHover={whileHover}
          onClick={onFilterClick}
          data-filter-by={Categories.WEDDING}
          data-active={query.filter === Categories.WEDDING}
        >
          Vjenčanja
        </Button>
        <Button
          whileHover={whileHover}
          onClick={onFilterClick}
          data-filter-by={Categories.ADVERTISEMENT}
          data-active={query.filter === Categories.ADVERTISEMENT}
        >
          Reklame
        </Button>
        <Button
          whileHover={whileHover}
          onClick={onFilterClick}
          data-filter-by={Categories.EVENT}
          data-active={query.filter === Categories.EVENT}
        >
          Događaji
        </Button>
      </Wrapper>
    </StickyContainer>
  );
};

export default Filters;
