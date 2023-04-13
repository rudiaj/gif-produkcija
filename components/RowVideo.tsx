import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { breakpoints } from "../constants";
import { useUI } from "../context/UIProvider";

import {
  ExpandedCard,
  ExpandedImageWrapper,
  VideoItem,
} from "./RowVideo.styles";
import ReactPlayer from "react-player";

const RowVideo = ({
  index,
  videoRef,
  width,
  project: { poster, fullVideo, mp4, webm },
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetRef = useRef<HTMLElement>(null);
  const { setExpandedCardIndex, expandedCardIndex } = useUI();

  const isExpanded = expandedCardIndex === index;

  useLayoutEffect(() => {
    if (targetRef.current) {
      const expandedElementWidth = targetRef.current.offsetWidth * 1.3;
      const expandedElementHeight = targetRef.current.offsetHeight * 1.3;

      const shouldBeFullScreen = expandedElementWidth > width;

      setDimensions({
        width: shouldBeFullScreen ? width - 32 : expandedElementWidth,
        height: shouldBeFullScreen ? width / (16 / 9) : expandedElementHeight,
      });
    }
  }, [setDimensions, targetRef.current, width]);

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
        {width <= breakpoints.SM ? (
          <Image alt="poster" src={poster} fill />
        ) : (
          <video ref={videoRef} playsInline muted loop>
            {mp4 ? <source src={mp4} type="video/mp4" /> : null}
            {webm ? <source src={webm} type="video/webm" /> : null}
          </video>
        )}
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
              <ReactPlayer
                controls
                width="100%"
                height="100%"
                url={fullVideo}
              />
            </ExpandedImageWrapper>
          </ExpandedCard>
        )}
      </AnimatePresence>
    </>
  );
};

export default RowVideo;
