"use client";
import { useSnapshot } from "valtio";
import state from "../store";
import { ConnectionBar } from "@/components";
import "@/css/home.css";
const Home = () => {
  const snap = useSnapshot(state);
  return (
    snap.page === "home" && (
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        <section className="grid grid-rows-2 gap-4 justify-items-center">
          <h1 className="mt-8 ml-8 font-bold text-3xl">
            Connettiti ad un robot EV3:
          </h1>
          <div className=" self-center">
            <ConnectionBar />
          </div>
        </section>
        <section>
          <p>test</p>
        </section>
      </div>
    )
  );
};
export default Home;
