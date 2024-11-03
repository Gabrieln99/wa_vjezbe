const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const users = [
  { id: 1, ime: "Gabriel", prezime: "Nadal" },
  { id: 2, ime: "Pero", prezime: "Peric" },
  { id: 3, ime: "Prof", prezime: "Blaskovic" },
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

/* ili
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); // Koristimo path.join za spajanje putanje
});
*/

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
  } else {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
  }
});
