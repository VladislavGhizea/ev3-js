import { UseCommandPostGet } from "@/config";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
} from "@nextui-org/react";

const colorMap: { [key: string]: string } = {
  "-1": "none",
  "0": "red",
  "1": "green",
  "2": "blue",
  "3": "yellow",
  "4": "magenta",
  "5": "orange",
  "6": "white",
  "7": "black",
  "8": "pink",
  "9": "gray",
  "10": "lightgray",
  "11": "darkgray",
  "12": "cyan",
  "13": "brown",
};

const ColoreDX = () => {
  const porta = 1;
  const [backgroundColor, setBackgroundColor] = useState("none");

  const handleClick = () => {
    console.log("handleClick coloreDX");
    UseCommandPostGet("colore " + porta)
      .then((result) => {
        const match = result.message.match(/(\d+)/);
        const number = match ? match[0] : null;
        console.log("RISULTATO POSTGET:" + result);
        setBackgroundColor(colorMap[number] || "none");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button onClick={handleClick}>ColoreDX</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div
          className="px-8 py-5"
          style={{ backgroundColor: backgroundColor }}
        ></div>
      </PopoverContent>
    </Popover>
  );
};
export default ColoreDX;
