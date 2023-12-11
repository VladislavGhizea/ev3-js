import Image from "next/image";
import { UseCommandPost } from "@/config";
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
    onClick={() => {
      if (command) {
        UseCommandPost(command);
      }
    }}
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
export const UpArrow = () => (
  <IconImage src="/up-arrow.png" alt="Up Arrow" command="avanti" />
);
export const DownArrow = () => (
  <IconImage src="/down-arrow.png" alt="Down Arrow" command="indietro" />
);
export const StopButton = () => (
  <IconImage src="/stop-button.png" alt="Stop Button" command="stop" />
);
export const DownLeftArrow = () => (
  <IconImage
    src="/down-left-arrow.png"
    alt="Down Left Arrow"
    command="abbassa"
  />
);
export const UpRightArrow = () => (
  <IconImage
    src="/up-right-arrow.png"
    alt="Down Right Arrow"
    command="solleva"
  />
);
