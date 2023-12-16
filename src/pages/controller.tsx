"use client";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  DownArrow,
  DownLeftArrow,
  LeftArrow,
  RightArrow,
  StopButton,
  UpArrow,
  UpRightArrow,
} from "@/assets";
import {
  ColoreDX,
  ColoreSX,
  DispositiviCollegati,
  DistanceRadar,
  LevelBattery,
  NavbarHome,
  SliderSpeed,
} from "@/components";
import { createGlobalStyle } from "styled-components";
import { closeConnection } from "@/config";
const GlobalStyle = createGlobalStyle`
  :root {
    background-image: url(/blobanimation2.svg);
    background-repeat: no-repeat;
    background-position: -15vw -10vh;
  }
`;
addEventListener("beforeunload", () => {
  closeConnection();
});
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
              <div />
              <div className="grid grid-cols-[auto_max-content_auto] grid-rows-3 gap-3">
                <div />
                <div className="flex justify-center">
                  <UpArrow />
                </div>
                <div />
                <div className="flex justify-end">
                  <LeftArrow />
                </div>
                <div className="flex justify-center">
                  <StopButton />
                </div>
                <div className="flex justify-start">
                  <RightArrow />
                </div>
                <div />
                <div className="flex justify-center">
                  <DownArrow />
                </div>
                <div />
              </div>
              <div />
            </div>
          </div>
        </div>
        <div className="content-center justify-center grid grid-cols-3">
          <section className="grid grid-rows-2">
            <section className=" flex items-center justify-center h-full">
              <DistanceRadar />
            </section>
            <section className="flex items-center justify-evenly h-full">
              <ColoreDX />
              <ColoreSX />
            </section>
          </section>

          <section className="grid grid-rows-2 items-center">
            <div className="w-[calc(100vw/3)] battery-level">
              <LevelBattery />
            </div>
            <div>
              <SliderSpeed />
            </div>
          </section>
          <section className="grid grid-cols-2">
            <div className="flex items-center justify-center h-full">
              <UpRightArrow />
            </div>
            <div className="flex items-center justify-center h-full">
              <DownLeftArrow />
            </div>
          </section>
        </div>
        <div className="flex justify-center mt-3">
          <DispositiviCollegati />
        </div>
      </>
    )
  );
};

export default Controller;
