export const UseCommandPost = async (command: string) => {
  const data = {
    command: command,
  };
  try {
    const response = await fetch("http://localhost:8080/command", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
