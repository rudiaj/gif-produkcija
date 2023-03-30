import { useRouter } from "next/router";
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
      <Wrapper
        layout
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
          Svi Projekti
        </Button>
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
