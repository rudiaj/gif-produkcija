import Image from "next/image";

interface RowImageProps {
  url: string;
}

const RowImage: React.FC<RowImageProps> = ({ url }) => {
  return (
    <article className="flex-1 relative overflow-hidden w-full aspect-video">
      <Image alt="project image" src={url} fill className="object-cover" />
    </article>
  );
};

export default RowImage;
