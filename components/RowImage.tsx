import Image from "next/image";
import { ImageItem } from "./RowImage.styles";

const RowImage = ({ url }) => {
  return (
    <ImageItem>
      <Image alt="project.name" src={url} fill />
    </ImageItem>
  );
};

export default RowImage;
