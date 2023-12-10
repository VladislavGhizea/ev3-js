"use client";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  DownArrow,
  LeftArrow,
  LeftArrowCurvingRight,
  RightArrow,
  RightArrowCurvingLeft,
  StopButton,
  UpArrow,
} from "@/assets";
import {
  DistanceRadar,
  LevelBattery,
  NavbarHome,
  SliderSpeed,
} from "@/components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    background-image: url(/blobanimation2.svg);
    background-repeat: no-repeat;
    background-position: -15vw -10vh;
  }
`;
const Controller = () => {
  const snap = useSnapshot(state);

  return (
    snap.page === "controller" && (
      <>
        <GlobalStyle />
        <div className="">
          <NavbarHome connesso={true} />
        </div>
        <div className=" text-center"></div>
        <div className="flex items-center justify-center">
          <div className="grid grid-rows-1 justify-items-center w-screen">
            <div className="grid grid-cols-[auto_auto_auto] w-screen max-w-full mt-3">
              <section className="grid grid-rows-3 items-center justify-end gap-y-3">
                <RightArrowCurvingLeft />
                <LeftArrow />
                <div>---</div>
              </section>
              <section className="grid grid-rows-3 items-center justify-center gap-y-3">
                <UpArrow />
                <StopButton />
                <DownArrow />
              </section>
              <section className="grid grid-rows-3 items-center justify-start gap-y-3">
                <LeftArrowCurvingRight />
                <RightArrow />
                <div>---</div>
              </section>
            </div>
          </div>
        </div>
        <div className="content-center justify-center grid grid-cols-3">
          <section className=" flex items-center justify-center h-full">
            <DistanceRadar />
          </section>
          <section className="grid grid-rows-2 items-center">
            <div className="w-[calc(100vw/3)] battery-level">
              <LevelBattery />
            </div>
            <div>
              <SliderSpeed />
            </div>
          </section>
          <section></section>
        </div>
      </>
    )
  );
};

export default Controller;
