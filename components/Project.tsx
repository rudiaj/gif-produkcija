import Image from "next/image";

import {
  StyledProject,
  Content,
  TextWrapper,
  Date,
  Subtitle,
  Headline,
  Overlay,
  ImageContainer,
} from "./Project.styles";

const Project = ({
  project: { name, image, date, category, location },
  index,
}) => {
  return (
    <StyledProject layout span={index === 2 || index === 4 || index === 6}>
      <ImageContainer
        whileHover={{
          scale: 1.025,
          transition: { duration: 2 },
        }}
      >
        <Image alt="project.name" src={image} fill />
        <Overlay />
      </ImageContainer>

      <Content>
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
    </StyledProject>
  );
};

export default Project;
