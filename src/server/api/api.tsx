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

// Crea un endpoint POST /connect che accetta pacchetti JSON
app.post("/connect", (req, res) => {
  console.log("Received a connection request");

  // Stampa i dati ricevuti
  console.log(req.body);

  // Crea una connessione TCP al server specificato
  tcpClient = new net.Socket();
  tcpClient.connect(req.body.port, req.body.ip, () => {
    console.log("TCP connection established");
  });

  // Rispondi con un messaggio di successo
  res.json({ message: "Connection successful" });
});

// Crea un endpoint POST /command che accetta pacchetti JSON
app.post("/command", (req, res) => {
  console.log("Received a command");

  // Stampa il comando ricevuto
  console.log(req.body.command);

  // Invia il comando al server TCP
  if (tcpClient) {
    tcpClient.write(req.body.command);
    res.json({ message: "Command sent successfully" });
  } else {
    res.status(500).json({ message: "No TCP connection established" });
  }
});

// Avvia il server sulla porta 8080
app.listen(8080, () => {
  console.log("listening on *:8080");
});
