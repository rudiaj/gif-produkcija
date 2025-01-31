"use client";

import { useAnimate } from "framer-motion";
import { useMemo, Fragment, useRef } from "react";
import { motion } from "framer-motion";
import { useUI } from "../context/UIProvider";
import useWindowSize from "../hooks/useWindowSize";
import { breakpoints, Categories } from "../constants";
import RowImage from "./RowImage";
import RowVideo from "./RowVideo";
import clsx from "clsx";

export interface Project {
  name: string;
  location: string;
  image1: string;
  image2: string;
  mp4: string;
  webm?: string;
  poster: string;
  fullVideo: string;
  date: string;
  category: Categories;
}

interface ProjectProps {
  project: Project;
  index: number;
}

const ProjectRow = ({ project, index }: ProjectProps) => {
  const { applyOverlay } = useUI();
  const [ref, animate] = useAnimate();
  const { width } = useWindowSize();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { image1, image2, date, category, name, location } = project;

  const rowContent = useMemo(() => {
    const firstImage = <RowImage url={image1} />;
    const secondImage = <RowImage url={image2} />;
    const videoContent = (
      <RowVideo
        index={index}
        project={project}
        videoRef={videoRef}
        width={width}
      />
    );

    if (width <= breakpoints.SM) {
      return [videoContent];
    } else if (width > breakpoints.SM && width <= breakpoints.MD) {
      return index % 2 === 0
        ? [firstImage, videoContent]
        : [videoContent, firstImage];
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
  }, [index, project, image1, image2, width, videoRef]);

  const onMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    animate(
      ref.current,
      { opacity: 1, x: 0 },
      { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
    );
  };

  const onMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    animate(
      ref.current,
      { opacity: 0, x: -20 },
      { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
    );
  };

  return (
    <motion.div
      className={clsx(
        "flex relative",
        "before:content-[''] before:absolute before:inset-0",
        "before:bg-gradient-to-b before:from-[rgba(0,0,0,0.5)] before:to-[rgba(0,0,0,0.7)]",
        "before:z-10 before:pointer-events-none",
        "before:transition-opacity before:duration-200 before:ease-in-out",
        applyOverlay ? "hover:before:opacity-0" : "before:opacity-0"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        className="absolute p-6 flex items-end h-full z-10 pointer-events-none"
      >
        <div className="flex flex-col pointer-events-none [text-shadow:0_0_20px_rgba(0,0,0,1)]">
          <h3 className="text-white/90 text-lg tracking-wider">
            {name}, {location}
          </h3>
          <h4 className="text-white/80 text-sm tracking-wider">
            <span className="mr-2">{date}</span>
            <span>{category}</span>
          </h4>
        </div>
      </motion.div>
      {rowContent.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </motion.div>
  );
};

export default ProjectRow;
