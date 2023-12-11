"use client";
import Image from "next/image";
import styled from "styled-components";
import { UseCommandPost } from "@/config";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
} from "@nextui-org/react";
import { useState } from "react";
interface IconImageProps {
  src: string;
  alt: string;
  style?: object;
  width?: number;
  height?: number;
  //DA FAR DIVENTARE command: string
  command?: string;
  placement?: string;
  direzione?: string;
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
  placement,
  direzione,
}) => {
  const handleClick = (direzione: string | undefined) => {
    UseCommandPost(direzione + " " + input.toString());
  };
  const [input, setInput] = useState("");
  return (
    <>
      <Popover placement={placement} showArrow={true}>
        <PopoverTrigger>
          <StyledImage
            src={src}
            alt={alt}
            width={width ? width : 96}
            height={height ? height : 96}
            style={style}
          />
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">
              Inserire gradi rotazione:
            </div>
            <div className=" mb-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className=" rounded-large pl-1"
              />
            </div>
            <div className="flex items-center justify-center h-full">
              <Button variant="light" onClick={() => handleClick(direzione)}>
                Invia
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export const RightArrow = () => (
  <IconImage
    src="/right-arrow.png"
    alt="Right Arrow"
    placement="right"
    direzione="destra"
  />
);
export const LeftArrow = () => (
  <IconImage
    src="/left-arrow.png"
    alt="Left Arrow"
    placement="left"
    direzione="sinistra"
  />
);
