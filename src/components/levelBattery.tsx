import { UseCommandPostGet } from "@/config";
import { Progress } from "@nextui-org/react";
import { useEffect, useState, useRef } from "react";

const LevelBattery = () => {
  const [battery, setBattery] = useState(0);
  const hasRendered = useRef(false);

  const getLivelloBatteria = () => {
    console.log("getLivelloBatteria start");
    UseCommandPostGet("livelloBatteria")
      .then((result) => {
        const match = result.message.match(/(\d+)/);
        const number = match ? match[0] : null;
        console.log("RISULTATO POSTGET:" + number);
        setBattery(number ? parseInt(number) : 0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (hasRendered.current) return;
    getLivelloBatteria();
    hasRendered.current = true;
  }, []); // Dipendenze vuote per eseguire solo al montaggio

  return (
    <Progress
      isStriped
      aria-label="Battery Level"
      color={battery < 20 ? "danger" : battery < 40 ? "warning" : "success"}
      value={battery}
      className="max-w-md"
    />
  );
};

export default LevelBattery;
