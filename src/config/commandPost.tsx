export const UseCommandPost = (command: string) => {
  const commandPost = async () => {
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
        return 0;
      } else return -1;
    } catch (error) {
      alert("Errore di invio comando");
      return -2;
    }
  };
  return commandPost();
};
