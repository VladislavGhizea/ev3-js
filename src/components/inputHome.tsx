"use client";
import { Input } from "@nextui-org/react";
import { useSnapshot } from "valtio";
import state from "../store";
import "../css/checkbox.css";
import ipPortPost from "@/config/ipPortPost";
import { useState } from "react";
const ConnectionBar = () => {
  const snap = useSnapshot(state);
  // variabile per mostrare la porta
  const [isChecked, setIsChecked] = useState(false);
  // variabili per salvare l'ip e la porta
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");
  const handleClick = () => {
    ipPortPost(ip, Number(port)).then((result) => {
      if (result === -1) {
        alert("Errore di connessione -1");
      } else if (result === -2) {
        alert("Errore di connessione -2");
      } else {
        state.page = "controller";
        state.ip = ip;
        state.port = Number(port) ? Number(port) : 12345;
      }
    });
  };
  return (
    <div className=" justify-items-center text-center">
      <div className="InputContainer">
        {/* input ip */}
        <Input
          label="Indirizzo IP"
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        />
      </div>
      {/* Stile checkbox */}
      <div className="checkbox-wrapper-14">
        {/* correggere, nessun submit ma si cambia la pagina con il pulsante + richiesta api + preventDefault */}
        <label htmlFor="showPort">Porta personalizzata?</label>
        {/* serve questa classe? */}
        <div className="checkbox-wrapper-2">
          {/* checkbox porta */}
          <input
            id="showPort"
            type="checkbox"
            className="sc-gJwTLC ikxBAC"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
        </div>
      </div>
      <div
        style={{
          visibility: isChecked ? "visible" : "hidden",
        }}
        className="InputContainer"
      >
        {/* input porta */}
        <Input
          label="Porta"
          type="text"
          value={port}
          onChange={(e) => setPort(e.target.value)}
        />
      </div>
      {/* onClick deve mandare al websocket! */}
      <button
        onClick={() => handleClick()}
        className="relative mt-4 py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
      >
        Connetti!
      </button>
    </div>
  );
};
export default ConnectionBar;
