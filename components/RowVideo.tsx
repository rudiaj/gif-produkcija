import { AnimatePresence, useAnimate } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { useUI } from "../context/UIProvider";

import {
  ExpandedCard,
  ExpandedImageWrapper,
  VideoItem,
} from "./RowVideo.styles";

const RowVideo = ({ index, video }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetRef = useRef<HTMLElement>(null);
  const { setExpandedCardIndex, expandedCardIndex } = useUI();

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

  return (
    <>
      <VideoItem
        layoutId={`animate-id-${index}`}
        onClick={onClick}
        ref={targetRef}
      >
        <HoverVideoPlayer
          muted
          videoSrc={video}
          style={{ objectFit: "fill" }}
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
              <HoverVideoPlayer
                muted
                videoSrc={video}
                style={{ objectFit: "fill" }}
              />
            </ExpandedImageWrapper>
          </ExpandedCard>
        )}
      </AnimatePresence>
    </>
  );
};

export default RowVideo;
