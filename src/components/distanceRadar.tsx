import { UseCommandPostGet } from "@/config";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
} from "@nextui-org/react";
import { useState } from "react";

const DistanceRadar = () => {
  const [distanza, setDistanza] = useState("Strada libera");
  const handleClick = () => {
    UseCommandPostGet("distanza")
      .then((result) => {
        const regex = /(\d+\.\d+)/;
        const match = result.message.match(regex);
        const number = regex.test(result.message) ? match[0] : 251;
        const numeroFloat = parseFloat(number) * 100;
        console.log("RISULTATO POSTGET:" + numeroFloat);
        if (number > 250) {
          setDistanza("Strada libera");
        } else {
          setDistanza("Ostacolo a " + Math.floor(numeroFloat) + " cm");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Popover placement="right" showArrow={true}>
      <PopoverTrigger>
        <Button onClick={handleClick}>Distanza</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{distanza}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default DistanceRadar;
