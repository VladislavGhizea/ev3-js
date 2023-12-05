"use client";
import "../css/connectionBar.css";
import { useState } from "react";
const ConnectionBar = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className=" justify-items-center">
      <div className="InputContainer">
        <input className="input" type="text" placeholder="Indirizzo IP" />
      </div>
      <label htmlFor="showPort">Modificare la porta?</label>
      <input
        type="checkbox"
        id="showPort"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <br />
      {/* modificare in modo che isChecked modifichi la visibilità di Porta e non la crei/distrugga */}
      {isChecked && (
        <div className="InputContainer">
          <input className="input" type="text" placeholder="Porta" />
        </div>
      )}
    </div>
  );
};
export default ConnectionBar;
