// 0 = ok, -1 = errore response.ok -2 = errore fetch
const useIpPortPost = (ip: string, port: number) => {
  const ipPortPost = async () => {
    const data = {
      ip,
      port: port ? port : 12345,
    };

    try {
      const response = await fetch("http://localhost:8080/connect", {
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
      alert("Errore di connessione");
      return -2;
    }
  };
  return ipPortPost();
};
export default useIpPortPost;
