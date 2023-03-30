import Image from "next/image";
import { ImageItem } from "./RowImage.styles";

const RowImage = ({ url }) => {
  return (
    <ImageItem whileHover={{ scale: 1.025, transition: { duration: 0.7 } }}>
      <Image alt="project.name" src={url} fill />
    </ImageItem>
  );
};

export default RowImage;
