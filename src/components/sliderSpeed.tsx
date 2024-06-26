import { UseCommandPost } from "@/config";
import { Slider, SliderValue, Tooltip } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
const SliderSpeed = () => {
  const [value, setValue] = React.useState<SliderValue>(0.1);
  const [inputValue, setInputValue] = React.useState<string>("0.1");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (value: SliderValue) => {
    if (isNaN(Number(value))) return;

    setValue(value);
    setInputValue(value.toString());
  };
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      UseCommandPost("velocita " + Number(inputValue) * 100);
    }, 5000); // Eseguito dopo 5 secondi

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }; // Pulizia alla smontaggio del componente
  }, [inputValue]); // Eseguito ogni volta che inputValue cambia
  return (
    <Slider
      label="Velocità"
      showTooltip={true}
      step={0.05}
      formatOptions={{ style: "percent" }}
      maxValue={1}
      minValue={0}
      marks={[
        {
          value: 0,
          label: "STOP",
        },
        {
          value: 0.2,
          label: "20%",
        },
        {
          value: 0.5,
          label: "50%",
        },
        {
          value: 0.8,
          label: "80%",
        },
        {
          value: 1,
          label: "MAX",
        },
      ]}
      defaultValue={0.2}
      classNames={{
        base: "max-w-md",
        label: "text-medium",
      }}
      // we extract the default children to render the input
      renderValue={({ children, ...props }) => (
        <output {...props}>
          <Tooltip
            className="text-tiny text-default-500 rounded-md"
            content="Enter per confermare"
            placement="left"
          >
            <input
              className="px-1 py-0.5 w-12 text-right text-small text-default-700 font-medium bg-default-100 outline-none transition-colors rounded-small border-medium border-transparent hover:border-primary focus:border-primary"
              type="text"
              aria-label="Valore batteria"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const v = e.target.value;
                setInputValue(v);
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter" && !isNaN(Number(inputValue))) {
                  setValue(Number(inputValue));
                }
              }}
            />
          </Tooltip>
        </output>
      )}
      value={value}
      onChange={handleChange}
    />
  );
};
export default SliderSpeed;
