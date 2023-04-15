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

const getCatCafeGirlsQuery = `
SELECT Pessoa.nome, Profissao.nome as profissao
FROM Pessoa NATURAL JOIN Funcionario JOIN Profissao ON Funcionario.profissao = Profissao.codigo
GROUP BY Pessoa.nome, Profissao.nome, Pessoa.genero
HAVING genero = 'F'
`;

const getVipIogaQuery = `
SELECT nome
FROM ClientesVip
WHERE codigo IN (SELECT codcliente
  FROM ReservasQuartos
  WHERE codquarto IN (SELECT codigo
    FROM Quarto
    WHERE codigo IN (SELECT codigo
      FROM Servico
      WHERE categoria = 'ioga')))
`;

const getMackbookQuery = `
SELECT nome
FROM Pessoa
WHERE codigo IN ( SELECT codigo
  FROM Cliente
  WHERE codigo IN (SELECT codcliente
    FROM ReservasWorkspaces
    WHERE codworkspace IN ( SELECT codigo
      FROM Workspace
      WHERE computador = 'macbook')))
AND codigo IN (SELECT codcli
  FROM ConsumoAlimenticio
  WHERE codali IN (SELECT codigo
    FROM Alimento
    WHERE codigo IN (SELECT codigo
      FROM FastFood)))
`;

const getNotPayersQuery = `
SELECT nome
FROM Cliente c NATURAL JOIN Pessoa
WHERE NOT EXISTS (SELECT codcli
  FROM ConsumoAlimenticio a
  WHERE a.codcli = c.codigo)
AND NOT EXISTS (SELECT codcliente
  FROM ReservasWorkspaces r
  WHERE r.codcliente = c.codigo)
AND NOT EXISTS  (SELECT codcliente
  FROM ReservasQuartos q
  WHERE q.codcliente = c.codigo)
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

async function getCatCafeGirls() {
  try {
    const res = await pool.query(getCatCafeGirlsQuery);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getVipIoga() {
  try {
    const res = await pool.query(getVipIogaQuery);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getMackbook() {
  try {
    const res = await pool.query(getMackbookQuery);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getNotPayers() {
  try {
    const res = await pool.query(getNotPayersQuery);
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
  getCatCafeGirls,
  getVipIoga,
  getMackbook,
  getNotPayers,
};
