export const closeConnection = async () => {
  try {
    const response = await fetch("http://localhost:8080/close", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else return -1;
  } catch (error) {
    alert("Errore di invio comando");
    return -2;
  }
};
