import { useAnimate } from "framer-motion";
import { useMemo, Fragment } from "react";

import {
  Content,
  TextWrapper,
  Date,
  Subtitle,
  Headline,
  Row,
} from "./ProjectRow.styles";
import RowImage from "./RowImage";
import RowVideo from "./RowVideo";

import { useUI } from "../context/UIProvider";
import useWindowSize from "../hooks/useWindowSize";
import { breakpoints } from "../constants";

const ProjectRow = ({
  project: { name, image1, image2, video, date, category, location },
  index,
}) => {
  const { applyOverlay } = useUI();
  const [ref, animate] = useAnimate();
  const { width } = useWindowSize();

  const rowContent = useMemo(() => {
    const firstImage = <RowImage url={image1} />;
    const secondImage = <RowImage url={image2} />;
    const videoContent = (
      <RowVideo index={index} video={video} placeholder={image1} />
    );

    if (width <= breakpoints.SM) {
      return [videoContent];
    } else if (width > breakpoints.SM && width <= breakpoints.MD) {
      switch (index % 2) {
        case 0:
          return [firstImage, videoContent];
        case 1:
        default:
          return [videoContent, firstImage];
      }
    } else {
      switch (index % 4) {
        case 0:
          return [firstImage, secondImage, videoContent];
        case 1:
          return [firstImage, videoContent, secondImage];
        case 2:
          return [videoContent, firstImage, secondImage];
        case 3:
          return [firstImage, videoContent, secondImage];
        default:
          return [firstImage, secondImage, videoContent];
      }
    }
  }, [index, image1, image2, video, width]);

  return (
    <Row
      data-apply-overlay={applyOverlay}
      onMouseEnter={() => {
        animate(ref.current, { opacity: 1, x: 0 }, { duration: 0.7 });
      }}
      onMouseLeave={() => {
        animate(ref.current, { opacity: 0, x: -20 });
      }}
    >
      <Content ref={ref} initial={{ opacity: 0, x: -20 }}>
        <TextWrapper>
          <Headline>
            {name}, {location}
          </Headline>
          <Subtitle>
            <Date>{date}</Date>
            <span>{category}</span>
          </Subtitle>
        </TextWrapper>
      </Content>
      {rowContent.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </Row>
  );
};

export default ProjectRow;
