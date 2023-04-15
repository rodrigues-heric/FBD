const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "trabalho",
  password: "postgres",
  port: 5432,
});

const getVIPClientsQuery = `
SELECT * FROM ClientesVip
`;

const getClientsQuery = `
SELECT * 
FROM Cliente AS c 
JOIN Pessoa AS p ON c.codigo = p.codigo
`;

const getDeptAvgSalaryQuery = `
SELECT nomed AS NomeDepartamento, AVG(salario) AS MediaSalario, nome AS NomeGerente
FROM Departamento NATURAL JOIN Funcionario NATURAL JOIN Gerente NATURAL JOIN Pessoa
GROUP BY nomed, nome
`;

async function getVIPClients() {
  try {
    const res = await pool.query(getVIPClientsQuery);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getClients() {
  try {
    const res = await pool.query(getClientsQuery);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getDeptAvgSalary() {
  try {
    const res = await pool.query(getDeptAvgSalaryQuery);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  getVIPClients,
  getClients,
  getDeptAvgSalary,
};
