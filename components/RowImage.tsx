import { useAnimate } from "framer-motion";
import Image from "next/image";
import { ImageItem } from "./RowImage.styles";

const RowImage = ({ url }) => {
  const [ref, animate] = useAnimate();

  return (
    <ImageItem
      onMouseEnter={() => {
        animate(ref.current, { scale: 1.025 }, { duration: 0.7 });
      }}
      onMouseLeave={() => {
        animate(ref.current, { scale: 1 }, { duration: 0.7 });
      }}
    >
      <Image alt="project.name" ref={ref} src={url} fill />
    </ImageItem>
  );
};

export default RowImage;
