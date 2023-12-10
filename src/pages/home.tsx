"use client";
import NavbarHome from "@/components/NavbarHome";
import { useSnapshot } from "valtio";
import state from "../store";
import { InputHome } from "@/components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    background-image: url(/blobanimation.svg);
    background-repeat: no-repeat;
    background-position: +100vh 30vh;
  }
`;
const Home = () => {
  const snap = useSnapshot(state);
  return (
    snap.page === "home" && (
      <>
        <GlobalStyle />
        <NavbarHome />
        <div className="home grid xl:grid-cols-2 gap-4 justify-items-center">
          <section className="grid grid-rows-[auto_auto] gap-4 justify-items-center ">
            <h1 className="mt-8 ml-8 font-bold text-3xl">
              Connettiti ad un robot EV3:
            </h1>
            <div className=" self-center">
              <InputHome />
            </div>
          </section>
          <section className="max-xl:hidden ">version 1</section>
        </div>
      </>
    )
  );
};
export default Home;
