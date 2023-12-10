import Image from "next/image";
import { UseCommandPost } from "@/config/commandPost";
import styled from "styled-components";
interface IconImageProps {
  src: string;
  alt: string;
  style?: object;
  width?: number;
  height?: number;
  //DA FAR DIVENTARE command: string
  command?: string;
}
const StyledImage = styled(Image)`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const IconImage: React.FC<IconImageProps> = ({
  src,
  alt,
  style,
  width,
  height,
  command,
}) => (
  <StyledImage
    src={src}
    alt={alt}
    width={width ? width : 96}
    height={height ? height : 96}
    style={style}
    onClick={() => UseCommandPost(command ? command : "")}
  />
);

export const LogoEv3 = () => (
  <IconImage
    src="/robotIcon.png"
    alt="Logo"
    style={{ borderRadius: "50%" }}
    width={48}
    height={48}
  />
);

export const RightArrow = () => (
  <IconImage src="/right-arrow.png" alt="Right Arrow" />
);
export const LeftArrow = () => (
  <IconImage src="/left-arrow.png" alt="Left Arrow" />
);
export const UpArrow = () => (
  <IconImage src="/up-arrow.png" alt="Up Arrow" command="avanti" />
);
export const DownArrow = () => (
  <IconImage src="/down-arrow.png" alt="Down Arrow" />
);
export const StopButton = () => (
  <IconImage src="/stop-button.png" alt="Stop Button" />
);
export const LeftArrowCurvingRight = () => (
  <IconImage
    src="/left-arrow-curving-right.png"
    alt="Left Arrow Curving Right"
  />
);
export const RightArrowCurvingLeft = () => (
  <IconImage
    src="/right-arrow-curving-left.png"
    alt="Right Arrow Curving Left"
  />
);
