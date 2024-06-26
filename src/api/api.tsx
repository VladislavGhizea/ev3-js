// Importa i moduli necessari
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const net = require("net");

// Crea un'applicazione Express
const app = express();

// Usa il middleware CORS per permettere le richieste da altri domini
app.use(cors());

// Usa il middleware body-parser per analizzare i corpi delle richieste JSON
app.use(bodyParser.json());

let tcpClient;

app.post("/connect", (req, res) => {
  console.log("Ricevuta richiesta di connessione");
  console.log(req.body);

  if (!tcpClient || tcpClient.destroyed) {
    tcpClient = new net.Socket();

    tcpClient.connect(req.body.port, req.body.ip, () => {
      console.log("Connesso al server TCP");
      res.json({ message: "Connesso" });
    });

    tcpClient.on("error", (error) => {
      console.log("Errore di connessione:", error);
      res.status(500).json({ message: "Errore di connessione" });
    });
  } else {
    res.status(500).json({ message: "Robottino già connesso" });
  }
});
app.post("/close", (req, res) => {
  if (tcpClient) {
    tcpClient.destroy();
    tcpClient = undefined;
    res.json({ message: "Connessione chiusa" });
  } else {
    res.status(500).json({ message: "Robottino non connesso" });
  }
});
// Crea un endpoint POST /command che accetta pacchetti JSON
app.post("/command", (req, res) => {
  console.log("Ricevuto comando");

  // Stampa il comando ricevuto
  console.log(req.body.command);

  // Invia il comando al server TCP
  if (tcpClient) {
    console.log("Invio comando al server TCP");
    tcpClient.write(req.body.command.toString() + "\r\n");
    res.json({ message: "Comando inviato: " + req.body.command });
  } else {
    res.status(500).json({ message: "Robottino non connesso" });
  }
});
app.get("/command", (req, res) => {
  // Se il client TCP non è connesso, invia un errore
  if (!tcpClient) {
    res.status(500).json({ message: "Robottino non connesso" });
    return;
  }

  console.log("Ricevuto comando GET", req.body.command);

  console.log("Ricevendo risposta dal server TCP");

  // Crea una nuova promessa che si risolve quando ricevi dati dal server TCP
  new Promise((resolve) => {
    tcpClient.on("data", (data) => {
      console.log("Ricevuto:", data.toString());
      resolve(data.toString());
    });
  })
    // Attendi che la promessa si risolva, poi invia la risposta HTTP
    .then((data) => {
      res.json({ message: "Risposta ricevuta: " + data });
    });
});
// Avvia il server sulla porta 8080
app.listen(8080, () => {
  console.log("porta api: 8080");
});
