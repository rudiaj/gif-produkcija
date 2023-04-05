import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { useUI } from "../context/UIProvider";

import {
  ExpandedCard,
  ExpandedImageWrapper,
  VideoItem,
} from "./RowVideo.styles";

const RowVideo = ({ index, video, placeholder }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetRef = useRef<HTMLElement>(null);
  const { setExpandedCardIndex, expandedCardIndex } = useUI();
  const [play, setPlay] = useState(false);

  const isExpanded = expandedCardIndex === index;

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth * 1.3,
        height: targetRef.current.offsetHeight * 1.3,
      });
    }
  }, [setDimensions, targetRef.current]);

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

  const onMouseOver = (e) => {
    e.target.play();
  };

  const onMouseOut = (e) => {
    e.target.pause();
  };

  return (
    <>
      <VideoItem
        layoutId={`animate-id-${index}`}
        onClick={onClick}
        ref={targetRef}
      >
        <video
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          playsInline
          poster={placeholder}
          autoPlay={play}
          muted
          loop
          src={video}
        />
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
              <video muted src={video} style={{ objectFit: "fill" }} />
            </ExpandedImageWrapper>
          </ExpandedCard>
        )}
      </AnimatePresence>
    </>
  );
};

export default RowVideo;
