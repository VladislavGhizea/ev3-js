import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
} from "@nextui-org/react";

const DistanceRadar = () => {
  return (
    <Popover placement="right" showArrow={true}>
      <PopoverTrigger>
        <Button>Distanza</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{/*valore distanza!*/}</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default DistanceRadar;
