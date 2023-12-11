import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from "@nextui-org/react";

const DispositiviCollegati = () => {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="bordered">Dispositivi connessi</Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown dispositivi connessi">
        <DropdownItem>Sensore Colore SX</DropdownItem>
        <DropdownItem>Sensore Colore DX</DropdownItem>
        <DropdownItem>Sensore Distanza</DropdownItem>
        <DropdownItem>Leva</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
export default DispositiviCollegati;
