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

async function getDeptAvgSalary() {
  const result = await localDB.getDeptAvgSalary();
  console.log("Fecthed avarege salary by department.");
  return result.rows;
}

async function getCatCafeGirls() {
  const result = await localDB.getCatCafeGirls();
  console.log("Fetched CatCafé++ Girls.");
  return result.rows;
}

async function getVipIoga() {
  const result = await localDB.getVipIoga();
  console.log("Fetched VIP ioga clients.");
  return result.rows;
}

async function getMackbook() {
  const result = await localDB.getMackbook();
  console.log("Fetched Macbook clients.");
  return result.rows;
}

async function getNotPayers() {
  const result = await localDB.getNotPayers();
  console.log("Fetched non payers clients.");
  return result.rows;
}

app.get("/getVIPClients", async (req, res) => {
  res.json({ content: await getVIPClients() });
});

app.get("/getClients", async (req, res) => {
  res.json({ content: await getClients() });
});

app.get("/getDeptAvgSalary", async (req, res) => {
  res.json({ content: await getDeptAvgSalary() });
});

app.get("/getCatCafeGirls", async (req, res) => {
  res.json({ content: await getCatCafeGirls() });
});

app.get("/getVipIoga", async (req, res) => {
  res.json({ content: await getVipIoga() });
});

app.get("/getMackbook", async (req, res) => {
  res.json({ content: await getMackbook() });
});

app.get("/getNotPayers", async (req, res) => {
  res.json({ content: await getNotPayers() });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
