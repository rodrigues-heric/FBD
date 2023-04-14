const express = require("express");
const localDB = require("./localdb");

const PORT = 3001;

const app = express();

async function getVIPClients() {
  const result = await localDB.getVIPClients();
  console.log("Fetched VIP clients.");
  return result.rows;
}

async function getClients() {
  const result = await localDB.getClients();
  console.log("Fetched clients.");
  return result.rows;
}

app.get("/getClients", async (req, res) => {
  res.json({ content: await getClients() });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
