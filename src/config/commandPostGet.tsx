import { UseCommandPost } from "./commandPost";

const UseCommandGet = async () => {
  try {
    const response = await fetch("http://localhost:8080/command");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const UseCommandPostGet = async (command: string) => {
  console.log("Inizio UseCommandPostGet");
  try {
    console.log("Prima di UseCommandPost");
    const postResult = await UseCommandPost(command);
    console.log("Dopo UseCommandPost", postResult);
    if (postResult === -1 || postResult === -2) {
      alert("Errore durante la richiesta POST");
    }
    console.log("Prima di UseCommandGet");
    const data = await UseCommandGet();
    console.log("Dopo UseCommandGet", data);
    return data;
  } catch (error) {
    console.error("Errore in UseCommandPostGet", error);
  }
};
