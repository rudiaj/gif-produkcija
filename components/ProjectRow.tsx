import { AnimatePresence, useAnimate } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useUI } from "../context/UIProvider";

import {
  VideoItem,
  Content,
  TextWrapper,
  Date,
  Subtitle,
  Headline,
  ExpandedCard,
  ExpandedImageWrapper,
  Row,
} from "./ProjectRow.styles";
import RowImage from "./RowImage";

const ProjectRow = ({
  project: { name, image1, image2, video, date, category, location },
  index,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetRef = useRef<HTMLElement>(null);
  const { applyOverlay, setExpandedCardIndex, expandedCardIndex } = useUI();
  const [ref, animate] = useAnimate();
  const [isHovered, setIsHovered] = useState(false);

  const isExpanded = expandedCardIndex === index;

  const onClick = () => {
    setExpandedCardIndex(index);
  };

  const onBackdropClick = () => {
    setExpandedCardIndex(null);
  };

  const onExpandedImageClick = (event) => {
    event.stopPropagation();
    console.log(1);
  };

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth * 1.3,
        height: targetRef.current.offsetHeight * 1.3,
      });
    }
  }, [setDimensions, targetRef.current]);

  const rowContent = () => {
    let firstImage = <RowImage url={image1} />;

    let secondImage = <RowImage url={image2} />;

    let videoContent = (
      <>
        <VideoItem
          layoutId={`animate-id-${index}`}
          onClick={onClick}
          ref={targetRef}
        >
          <video
            width={160}
            height={90}
            autoPlay
            muted
            style={{ objectFit: "fill" }}
          >
            <source src="/videos/dani_piva.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoItem>
        <AnimatePresence>
          {isExpanded && (
            <ExpandedCard
              onClick={onBackdropClick}
              initial={{
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
              animate={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
              }}
              exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <ExpandedImageWrapper
                layoutId={`animate-id-${index}`}
                width={dimensions.width}
                height={dimensions.height}
                onClick={onExpandedImageClick}
              >
                <Image alt="project.name" src={video} fill />
              </ExpandedImageWrapper>
            </ExpandedCard>
          )}
        </AnimatePresence>
      </>
    );

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
  };

  return (
    <Row
      data-apply-overlay={applyOverlay}
      onMouseEnter={() => {
        animate(ref.current, { opacity: 1, x: 0 }, { duration: 0.7 });
      }}
      onMouseLeave={() => {
        animate(ref.current, { opacity: 0, x: -50 });
      }}
    >
      <Content
        ref={ref}
        initial={{
          opacity: 0,
          x: -50,
        }}
      >
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
      {rowContent().map((item) => item)}
    </Row>
  );
};

export default ProjectRow;
