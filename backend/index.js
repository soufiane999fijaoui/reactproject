const express = require("express"); // Importation d'Express
require("./db/config"); // Connexion à la base de données
const cors = require("cors");
const User = require("./db/User");

const app = express(); // Initialisation de l'application Express

// Middleware
app.use(express.json());
app.use(cors());

// Route pour l'enregistrement
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});



app.listen(8000, () => {
    console.log("Server is running on port 7000");
});
