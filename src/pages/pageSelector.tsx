"use client";
import state from "@/store";
import { useSnapshot } from "valtio";
import Home from "./home";
import Controller from "./controller";
import Info from "./info";

export const PageSelector = () => {
  const snap = useSnapshot(state);
  if (snap.page === "home") {
    return <Home />;
  } else if (snap.page === "controller") {
    return <Controller />;
  } else if (snap.page === "info") {
    return <Info />;
  } else return <div>errore PageSelector</div>;
};
