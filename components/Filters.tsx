import { useRouter } from "next/router";
import { Categories } from "../constants";
import { Button, Wrapper, StickyContainer } from "./Filters.styles";

const whileHover = {
  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
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
        <Button
          whileHover={whileHover}
          onClick={onFilterClick}
          data-filter-by={Categories.WEDDING}
          data-active={query.filter === Categories.WEDDING}
        >
          Vjenčanja
        </Button>
      </Wrapper>
    </StickyContainer>
  );
};

export default Filters;
