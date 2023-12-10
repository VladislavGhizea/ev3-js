import { Progress } from "@nextui-org/react";
import { useState } from "react";

const LevelBattery = () => {
  const [battery, setBattery] = useState(29);
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
