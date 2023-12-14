import { UseCommandPostGet } from "@/config";
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
} from "@nextui-org/react";
import { useState } from "react";

const DistanceRadar = () => {
  const [distanza, setDistanza] = useState("Invio...");
  UseCommandPostGet("distanza")
    .then((result) => {
      const match = result.message.match(/(\d+)/);
      const number = match ? match[0] * 100 : 0;
      console.log("RISULTATO POSTGET:" + result);
      if (number > 250) {
        setDistanza("Strada libera");
      } else {
        setDistanza("Ostacolo a " + number + " cm");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <Popover placement="right" showArrow={true}>
      <PopoverTrigger>
        <Button>Distanza</Button>
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
