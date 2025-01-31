"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { breakpoints } from "../constants";
import { useUI } from "../context/UIProvider";
import ReactPlayer from "react-player";
import clsx from "clsx";

export interface ProjectVideo {
  poster: string;
  fullVideo: string;
  mp4?: string;
  webm?: string;
}

interface RowVideoProps {
  index: number;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  width: number;
  project: ProjectVideo;
}

const RowVideo: React.FC<RowVideoProps> = ({
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
  }, [width]);

  const onClick = () => {
    setExpandedCardIndex(index);
  };

  const onBackdropClick = () => {
    setExpandedCardIndex(null);
  };

  const onExpandedImageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <AnimatePresence>
        <motion.article
          layoutId={`animate-id-${index}`}
          onClick={onClick}
          ref={targetRef}
          className={clsx(
            "relative overflow-hidden w-full aspect-video cursor-pointer md:w-2/3 lg:w-1/2"
          )}
        >
          {width <= breakpoints.SM ? (
            <Image alt="poster" src={poster} fill />
          ) : (
            <video ref={videoRef} playsInline muted loop>
              {mp4 && <source src={mp4} type="video/mp4" />}
              {webm && <source src={webm} type="video/webm" />}
            </video>
          )}
        </motion.article>
        {isExpanded && (
          <motion.div
            onClick={onBackdropClick}
            initial={{
              backgroundColor: "rgba(0, 0, 0, 0, 0)",
              backdropFilter: "blur(0px)",
            }}
            animate={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(12px)",
            }}
            exit={{
              backgroundColor: "rgba(0, 0, 0, 0, 0)",
              backdropFilter: "blur(0px)",
            }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-20 flex items-center justify-center"
          >
            <motion.div
              layoutId={`animate-id-${index}`}
              style={{
                width: dimensions.width,
                height: dimensions.height,
              }}
              onClick={onExpandedImageClick}
              className="relative bg-dark z-30 rounded-md overflow-hidden blur-filter"
            >
              <ReactPlayer
                controls
                playing
                width="100%"
                height="100%"
                muted
                url={fullVideo}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RowVideo;
