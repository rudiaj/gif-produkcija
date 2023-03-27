import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useUI } from "../context/UIProvider";

import {
  StyledProject,
  Content,
  TextWrapper,
  Date,
  Subtitle,
  Headline,
  Overlay,
  ExpandedCard,
  ExpandedImageWrapper,
  CollapsedImageWrapper,
} from "./Project.styles";

const spannedIndexes = [2, 4, 6, 11, 13, 15];

const Project = ({
  project: { name, image, date, category, location },
  index,
  setActiveItemIndex,
  activeItemIndex,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetRef = useRef<HTMLElement>();
  const { applyOverlay } = useUI();

  const isExpanded = activeItemIndex === index;

  const onClick = () => {
    setActiveItemIndex(index);
  };

  const onBackdropClick = (event) => {
    event.stopPropagation();
    setActiveItemIndex(null);
  };

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth * 1.3,
        height: targetRef.current.offsetHeight * 1.3,
      });
    }
  }, [setDimensions]);

  return (
    <>
      <StyledProject
        layoutId={`animate-id-${index}`}
        layout
        span={spannedIndexes.includes(index)}
        onClick={onClick}
        ref={targetRef}
      >
        <Image alt="project.name" src={image} fill />
        <Overlay
          layout
          animate={{
            opacity: applyOverlay ? 1 : 0,
            transition: { duration: 0.5 },
          }}
          data-applyOverlay={applyOverlay}
          whileHover={{
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.7 },
          }}
        />
        <Content>
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
      </StyledProject>
      <AnimatePresence>
        {isExpanded && (
          <ExpandedCard
            onClick={onBackdropClick}
            initial={{
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            transition={{ type: "spring" }}
            animate={{
              backgroundColor: "rgba(0, 0, 0, 0.9)",
            }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <ExpandedImageWrapper
              layoutId={`animate-id-${index}`}
              width={dimensions.width}
              height={dimensions.height}
            >
              <Image alt="project.name" src={image} fill />
            </ExpandedImageWrapper>
          </ExpandedCard>
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
