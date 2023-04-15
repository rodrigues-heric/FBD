-- Tabela Pessoa 
CREATE TABLE IF NOT EXISTS Pessoa ( 
  	codigo SMALLINT NOT NULL PRIMARY KEY,
	CPF VARCHAR(11) NOT NULL UNIQUE,
  	nome VARCHAR(60) NOT NULL,
  	RG VARCHAR(10) NOT NULL UNIQUE,
  	genero VARCHAR(1) NOT NULL,
  	telefone VARCHAR(14) NOT NULL,
  	nascimento DATE NOT NULL,
  	hora_entrada TIMESTAMP NOT NULL,
  	cartao_cred VARCHAR(16) NULL
);

-- Tabela Funcionario 
CREATE TABLE IF NOT EXISTS Funcionario (
	codigo SMALLINT UNIQUE NOT NULL,
  	salario FLOAT NOT NULL,
    idade SMALLINT NOT NULL,
    cod_departamento SMALLINT NULL,
    profissao SMALLINT NOT NULL,
    certificado VARCHAR(200) NULL,
    estrelas SMALLINT NULL CHECK(estrelas >=3)
);

-- Tabela Gerente
CREATE TABLE IF NOT EXISTS Gerente (
  codigo SMALLINT UNIQUE NOT NULL,
  dpto SMALLINT NOT NULL
);

-- Tabela Profissão
CREATE TABLE IF NOT EXISTS Profissao (
  codigo SMALLINT NOT NULL PRIMARY KEY,
  nome VARCHAR(30)
);

-- Tabela Departamento
CREATE TABLE IF NOT EXISTS Departamento (
  codigo SMALLINT NOT NULL PRIMARY KEY,
  nomed VARCHAR(15) NOT NULL, -- AQUI
  num_funcionarios INT NOT NULL CHECK(num_funcionarios <=20)
);

-- Tabela Cliente
CREATE TABLE IF NOT EXISTS Cliente (
  codigo SMALLINT UNIQUE NOT NULL,
  total_gasto FLOAT NOT NULL,
  hora_saida TIMESTAMP
);

-- Tabela VIP
CREATE TABLE IF NOT EXISTS VIP (
  codigo SMALLINT UNIQUE NOT NULL,
  desconto FLOAT NOT NULL
);

-- Tabela Alimento
CREATE TABLE IF NOT EXISTS Alimento (
  codigo SMALLINT NOT NULL PRIMARY KEY,
  nome VARCHAR(20) NOT NULL,
  marca VARCHAR(20) NOT NULL,
  preco FLOAT NOT NULL
);

-- Tabela Preparado
CREATE TABLE IF NOT EXISTS Preparado (
  codigo SMALLINT NOT NULL,
  descricao VARCHAR(200) NOT NULL,
  caloria FLOAT NOT NULL,
  gluten BOOLEAN NOT NULL,
  responsavel SMALLINT NOT NULL
);

drop table Preparado
-- Tabela Fast Food
CREATE TABLE IF NOT EXISTS FastFood (
  codigo SMALLINT NOT NULL,
  instrucoes VARCHAR(200) NOT NULL
);

-- Tabela Lazer
CREATE TABLE IF NOT EXISTS Lazer (
  codigo SMALLINT NOT NULL PRIMARY KEY,
  nome VARCHAR(60) NOT NULL,
  descricao VARCHAR(500) NOT NULL,
  preco FLOAT NOT NULL,
  tempo TIME NOT NULL
);

-- Tabela Locação 
CREATE TABLE IF NOT EXISTS Locacao (
  codigo SMALLINT NOT NULL PRIMARY KEY,
  nome VARCHAR(20) NOT NULL,
  descricao VARCHAR(200) NOT NULL,
  preco FLOAT NOT NULL
);

-- Tabela Quarto
CREATE TABLE IF NOT EXISTS Quarto (
  codigo SMALLINT NOT NULL PRIMARY KEY,
  num_quartos SMALLINT NOT NULL,
  hidromassagem BOOLEAN NOT NULL
);

-- Tabela Workspace
CREATE TABLE IF NOT EXISTS Workspace (
  codigo SMALLINT NOT NULL PRIMARY KEY,
  computador VARCHAR(200) NOT NULL,
  vel_wifi SMALLINT NOT NULL,
  sofa BOOLEAN NOT NULL,
  isolamento BOOLEAN NOT NULL
);

-- Tabela Serviço
CREATE TABLE IF NOT EXISTS Servico (
  codigo SMALLINT NOT NULL PRIMARY KEY,
  categoria VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS ReservasQuartos (
  codreserva SMALLINT PRIMARY KEY,
  codcliente SMALLINT NOT NULL,
  codquarto SMALLINT NOT NULL
);

CREATE TABLE IF NOT EXISTS ReservasWorkspaces (
  codreserva SMALLINT PRIMARY KEY,
  codcliente SMALLINT NOT NULL,
  codworkspace SMALLINT NOT NULL
);

CREATE TABLE IF NOT EXISTS ConsumoAlimenticio (
  codigo SMALLINT PRIMARY KEY,
  codali SMALLINT NOT NULL,
  codcli SMALLINT NOT NULL
);

CREATE TABLE IF NOT EXISTS ConsumoLazer (
  codigo SMALLINT PRIMARY KEY,
  codla SMALLINT NOT NULL,
  codcli SMALLINT NOT NULL
);

-- Chaves Estrangeiras
ALTER TABLE Profissao 
  ADD CONSTRAINT fk_profissao_funcionario 
  FOREIGN KEY(codigo) REFERENCES Funcionario(profissao);
  
ALTER TABLE ReservasQuartos 
  ADD CONSTRAINT fk_reserva_cliente 
  FOREIGN KEY(codcliente) REFERENCES Cliente(codigo);

ALTER TABLE ReservasQuartos 
  ADD CONSTRAINT fk_reserva_quarto 
  FOREIGN KEY(codquarto) REFERENCES Quarto(codigo);
  
ALTER TABLE Funcionario 
  ADD CONSTRAINT fk_funcionairo_pessoa 
  FOREIGN KEY(codigo) REFERENCES Pessoa(codigo);

ALTER TABLE Servico 
  ADD CONSTRAINT fk_servico_quarto 
  FOREIGN KEY(codigo) REFERENCES Quarto(codigo);
  
ALTER TABLE Funcionario 
  ADD CONSTRAINT fk_funcionairo_departamento
  FOREIGN KEY(cod_departamento) REFERENCES Departamento(codigo);

ALTER TABLE Funcionario 
  ADD CONSTRAINT fk_funcionario_profissao
  FOREIGN KEY(profissao) REFERENCES Profissao(codigo);
  
ALTER TABLE Gerente 
  ADD CONSTRAINT fk_gerente_funcionario
  FOREIGN KEY(dpto) REFERENCES Departamento(codigo);

ALTER TABLE Gerente 
  ADD CONSTRAINT fk_gerente_pessoa
  FOREIGN KEY(codigo) REFERENCES Funcionario(codigo);
  
ALTER TABLE Cliente 
  ADD CONSTRAINT fk_cliente_pessoa
  FOREIGN KEY(codigo) REFERENCES Pessoa(codigo);
  
ALTER TABLE VIP 
  ADD CONSTRAINT fk_vip_cliente
  FOREIGN KEY(codigo) REFERENCES Cliente(codigo);
  
ALTER TABLE Preparado 
  ADD CONSTRAINT fk_preparado_alimento
  FOREIGN KEY(codigo) REFERENCES Alimento(codigo);
  
ALTER TABLE FastFood 
  ADD CONSTRAINT fk_fastfood_alimento
  FOREIGN KEY(codigo) REFERENCES Alimento(codigo);
  
ALTER TABLE Quarto 
  ADD CONSTRAINT fk_quarto_locacao
  FOREIGN KEY(codigo) REFERENCES Locacao(codigo);
  
ALTER TABLE Workspace 
  ADD CONSTRAINT fk_workspace_locacao
  FOREIGN KEY(codigo) REFERENCES Locacao(codigo);
  
ALTER TABLE ReservasWorkspaces
  ADD CONSTRAINT fk_reserva_workspace_cli 
  FOREIGN KEY(codworkspace) REFERENCES Workspace(codigo);
  
ALTER TABLE ReservasWorkspaces 
  ADD CONSTRAINT fk_reserva_cliente_work
  FOREIGN KEY(codcliente) REFERENCES Cliente(codigo);
  
ALTER TABLE ConsumoAlimenticio 
  ADD CONSTRAINT fk_consumo_ali
  FOREIGN KEY(codali) REFERENCES Alimento(codigo);
  
ALTER TABLE ConsumoAlimenticio 
  ADD CONSTRAINT fk_consumo_cli
  FOREIGN KEY(codcli) REFERENCES Cliente(codigo);
  
ALTER TABLE ConsumoLazer 
  ADD CONSTRAINT fk_consumo_lazer
  FOREIGN KEY(codla) REFERENCES Lazer(codigo);
  
ALTER TABLE ConsumoLazer
  ADD CONSTRAINT fk_consumo_cli_lazer
  FOREIGN KEY(codcli) REFERENCES Cliente(codigo);
  
  
-- Inserções
INSERT INTO Pessoa VALUES (1, '11122233344', 'Heric', '0123456789', 'M', '51000000000', '1999-04-28', '2023-02-05 22:14:42', '5419906946495571');
INSERT INTO Pessoa VALUES (2, '11122233341', 'Joaquim', '0123456781', 'M', '51000000000', '1999-09-13', '2023-04-15 22:14:42', '5419906946495571');
INSERT INTO Pessoa VALUES (3, '11122233342', 'Henry', '0123456782', 'M', '51000000000', '2003-04-18', '2023-09-01 22:14:42', '5419906946495571');
INSERT INTO Pessoa VALUES (4, '11122733342', 'Pandora', '0123452782', 'F', '51000000000', '2001-11-11', '2023-09-01 22:14:42', '5419906946495571');
INSERT INTO Pessoa VALUES (5, '11122733345', 'Erick', '0123452799', 'M', '51000000000', '2000-05-11', '2023-09-01 22:14:42', '5419906946495571');
INSERT INTO Pessoa VALUES (6, '11122733346', 'Sofia', '0123452710', 'F', '51000000000', '2001-11-11', '2023-09-01 22:14:42', '5419906946495571');
INSERT INTO Pessoa VALUES (7, '11122733389', 'Cassandra', '0123452190', 'F', '51000000000', '2001-11-01', '2023-09-01 22:14:42', '5419906946495571');
INSERT INTO Pessoa VALUES (8, '11122733310', 'Ygona', '0123452115', 'F', '51000000000', '2001-11-01', '2023-09-01 22:14:42', '5419907046495571');
INSERT INTO Pessoa VALUES (10, '11122733307', 'Micaela', '0123452145', 'F', '51000000000', '2000-04-01', '2023-09-01 22:14:42', '5419906946495571');
INSERT INTO Pessoa VALUES (11, '11122733980', 'Roberta', '0123452189', 'F', '51000000000', '1997-11-01', '2023-09-01 22:14:42', '5419906946495571');
INSERT INTO Pessoa VALUES (12, '11122733641', 'Britney', '0123452620', 'F', '51000000000', '2004-05-03', '2023-09-01 22:14:42', '5419906946495571');

INSERT INTO Profissao VALUES (1, 'Faxina');
INSERT INTO Profissao VALUES (2, 'Tecnico');
INSERT INTO Profissao VALUES (3, 'Cozinheiro');

INSERT INTO Funcionario VALUES (1, 2700.0, 23, 1, 2, 'possui', NULL);
INSERT INTO Funcionario VALUES (2, 1800.0, 25, 3, 2, NULL, NULL);
INSERT INTO Funcionario VALUES (3, 6789.0, 20, 2, 3, NULL, 7);
INSERT INTO Funcionario VALUES (10, 5000.0, 20, 3, 3, NULL, 6);
INSERT INTO Funcionario VALUES (11, 4500.0, 20, 2, 1, NULL, NULL);
INSERT INTO Funcionario VALUES (12, 1500.0, 20, 2, 1, NULL, NULL);


INSERT INTO Gerente VALUES (1, 1);
INSERT INTO Gerente VALUES (2, 2);
INSERT INTO Gerente VALUES (3, 3);

INSERT INTO Departamento VALUES (1, 'Alimentação', 10);
INSERT INTO Departamento VALUES (2, 'Hospedagem', 10);
INSERT INTO Departamento VALUES (3,'Lazer', 10);

INSERT INTO Cliente VALUES(4,2000.0,'2023-09-01 23:14:42');
INSERT INTO Cliente VALUES(5,1000.0,'2023-09-02 10:14:42');
INSERT INTO Cliente VALUES(6,500.0,'2023-09-01 23:15:42');
INSERT INTO Cliente VALUES(7,500.0,'2023-09-01 23:15:42');
INSERT INTO Cliente VALUES(8,500.0,'2023-09-01 23:15:42');

INSERT INTO VIP VALUES(4, 50);
INSERT INTO VIP VALUES(5, 100);
INSERT INTO VIP VALUES(6, 20);
INSERT INTO VIP VALUES(8, 50);

INSERT INTO Alimento VALUES(1,'Doritos', 'Elma Chips', 10.0);
INSERT INTO Alimento VALUES(2,'Lasanha', 'CatCafe++', 25.0);
INSERT INTO Alimento VALUES(3,'Massa', 'CatCafe++', 25.0);
INSERT INTO Alimento VALUES(4,'Salsicha', 'CatCafe++', 10.0);
INSERT INTO Alimento VALUES(5,'Sopa Lamen', 'Nissin', 25.0);
INSERT INTO Alimento VALUES(6,'Refrigerante', 'Coca Cola', 25.0);

INSERT INTO Preparado VALUES(2,'MUITO DELICIOSO',1679.0, true, 3);
INSERT INTO Preparado VALUES(3,'MUITO DELICIOSO',1800.0, false, 3);
INSERT INTO Preparado VALUES(4,'MUITO DELICIOSO',1679.0, true, 10);

INSERT INTO FastFood VALUES (1, 'abra com cuidado');
INSERT INTO FastFood VALUES (5, 'bate no microondas');
INSERT INTO FastFood VALUES (6, 'beba rapido - gás esgota rápido');

INSERT INTO ConsumoAlimenticio VALUES (1, 5, 5);
INSERT INTO ConsumoAlimenticio VALUES (2, 1, 4);
INSERT INTO ConsumoAlimenticio VALUES (3, 2, 8);
INSERT INTO ConsumoAlimenticio VALUES (4, 5, 4);
INSERT INTO ConsumoAlimenticio VALUES (5, 2, 7);

INSERT INTO Locacao VALUES (1,'Loft', 'Bom para trabalho', 800.0);
INSERT INTO Locacao VALUES (2,'Escritorio', 'Bom para reuniao', 900.0);
INSERT INTO Locacao VALUES (3,'Lounge', 'Bom para conversas profissionais', 1000.0);
INSERT INTO Locacao VALUES (4,'Suite presidencial','Bons sonos',2000.0);
INSERT INTO Locacao VALUES (5,'Quarto Normal', 'Bom para descanso', 800.0);
INSERT INTO Locacao VALUES (6,'Quarto de solteiro', 'Sonos rápidos', 500.0);
INSERT INTO Locacao VALUES (7,'Quarto Bon Amour', 'Perfeito para luas de mel', 750.0);

INSERT INTO Quarto VALUES(4, 3, true);
INSERT INTO Quarto VALUES(5, 2, false);
INSERT INTO Quarto VALUES(6, 1, true);
INSERT INTO Quarto VALUES(7, 4, true);

INSERT INTO Servico VALUES(4, 'massagem');
INSERT INTO Servico VALUES(5, 'acupuntura');
INSERT INTO Servico VALUES(6, 'ioga');

INSERT INTO ReservasQuartos VALUES(1, 8, 6);
INSERT INTO ReservasQuartos VALUES(2, 6, 6);
INSERT INTO ReservasQuartos VALUES(3, 7, 5);
INSERT INTO ReservasQuartos VALUES(4, 7, 7);

INSERT INTO Workspace VALUES(1, 'intel', 200, true, false);
INSERT INTO Workspace VALUES(2, 'AMD', 100, false, false);
INSERT INTO Workspace VALUES(3, 'macbook', 200, true, false);

INSERT INTO ReservasWorkspaces VALUES (1, 5, 3);
INSERT INTO ReservasWorkspaces VALUES (2, 6, 2);
INSERT INTO ReservasWorkspaces VALUES (3, 8, 1);
INSERT INTO ReservasWorkspaces VALUES (4, 4, 3);

INSERT INTO Lazer VALUES(1, 'PS4', 'use com internet', 60.0, '00:30:00');
INSERT INTO Lazer VALUES(2, 'PS3', 'use com companhia', 90.0, '00:45:00');
INSERT INTO Lazer VALUES(3, 'PC', 'cuidado com a luz azul', 60.0, '00:30:00');
INSERT INTO Lazer VALUES(4, 'PC', 'cuidado com a luz azul', 70.0, '00:30:00');
INSERT INTO Lazer VALUES(5, 'PC', 'cuidado com a luz azul', 100.0, '00:30:00');
INSERT INTO Lazer VALUES(6, 'PS3', 'use com o dualschock 3', 120.0, '00:30:00');
INSERT INTO Lazer VALUES(7, 'PS4', 'jogue gta 5', 150.0, '00:20:00');

INSERT INTO ConsumoLazer VALUES(1, 1, 4);
INSERT INTO ConsumoLazer VALUES(2, 7, 4);
INSERT INTO ConsumoLazer VALUES(3, 4, 5);
INSERT INTO ConsumoLazer VALUES(4, 5, 5);

select * from ConsumoLazer
---------------------------------------------------------------------------------
-- 2ª Parte do Trabalho

-- A) Visão que retorna os clientes que são vip.
CREATE VIEW ClientesVip AS
SELECT *
FROM Pessoa NATURAL JOIN Cliente NATURAL JOIN VIP

-- B) 
-- 1)  Para cada departamento, a média dos salários de seus funcionários e o gerente.
SELECT nomed AS NomeDepartamento, AVG(salario) AS MediaSalario, nome AS NomeGerente
FROM Departamento NATURAL JOIN Funcionario NATURAL JOIN Gerente NATURAL JOIN Pessoa
GROUP BY nomed, nome

-- 2) Para cada profissão, aquelas onde há funcionárias mulheres.
SELECT Profissao.nome
FROM Pessoa NATURAL JOIN Funcionario JOIN Profissao ON Funcionario.profissao = Profissao.codigo
GROUP BY Profissao.nome, Pessoa.genero
HAVING genero = 'F'


-- 3) Clientes VIP que reservaram quartos com serviços de ioga
SELECT nome
FROM ClientesVip
WHERE codigo IN (SELECT codcliente
				 FROM ReservasQuartos
				 WHERE codquarto IN (SELECT codigo
									 FROM Quarto
									 WHERE codigo IN (SELECT codigo
													  FROM Servico
													  WHERE categoria = 'ioga')))
													  
-- 4) Clientes que reservaram Workspaces com Macbooks e consumiram alimentos do tipo FastFood
SELECT nome
FROM Pessoa
WHERE codigo IN ( SELECT codigo
				  FROM Cliente
				  WHERE codigo IN (SELECT codcliente
								   FROM ReservasWorkspaces
								   WHERE codworkspace IN ( SELECT codigo
														   FROM Workspace
														   WHERE computador = 'macbook'))
				AND codigo IN (SELECT codcli
							   FROM ConsumoAlimenticio
							   WHERE codali IN (SELECT codigo
											    FROM Alimento
											    WHERE codigo IN (SELECT codigo
																 FROM FastFood)))
				)

-- 5) Todos os clientes frequentaram o CatCafe++ mas não gastaram dinheiro no estabelecimento.
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

-- 6) Para cada cliente VIP, o total de gastos com Lazer

SELECT ClientesVip.nome, SUM(preco)
FROM ConsumoLazer JOIN ClientesVip ON ConsumoLazer.codcli = ClientesVip.Codigo JOIN Lazer ON ConsumoLazer.codla = Lazer.codigo
GROUP BY ClientesVip.nome

-- 7) Clientes que consumiram alimentos com menos de 1.800kcal e que solicitaram quartos com hidromassagem que custam menos de $2000 

SELECT *
FROM Pessoa NATURAL JOIN Cliente
WHERE codigo IN (SELECT codcli
				 FROM ConsumoAlimenticio
				 WHERE codali IN (SELECT codigo
								  FROM Alimento
								  WHERE codigo IN (SELECT codigo
												   FROM Preparado
												   WHERE caloria < 1800.0)))
AND codigo IN (SELECT codcliente
			   FROM ReservasQuartos
			   WHERE codquarto IN (SELECT codigo
								   FROM Locacao
								   WHERE preco < 2000.0 AND codigo IN (SELECT codigo
																	  FROM Quarto
																	  WHERE hidromassagem = true)))

-- 8) Produtos do CatCafe++ com gluten que foram preparados por chefes com mais de 6 estrelas Michelin
SELECT *
FROM Alimento
WHERE marca = 'CatCafe++' AND Alimento.codigo IN (SELECT Preparado.codigo
				 								  FROM Preparado JOIN Funcionario ON Preparado.responsavel = Funcionario.codigo
				 								  WHERE gluten = true AND estrelas > 6)
												  
-- 9) Funcionários do departamento de Lazer que ganham mais que a média global funcionários
SELECT * 
FROM Funcionario NATURAL JOIN Pessoa JOIN Departamento ON Departamento.codigo= Funcionario.cod_departamento
WHERE nomed = 'Lazer' AND Funcionario.salario > (SELECT AVG(salario) FROM Funcionario) 

-- 10) O tempo total gasto em atividades de Lazer para cada cliente 
SELECT Pessoa.codigo,Pessoa.nome, TIME '00:00:00' + SUM(CAST(tempo AS INTERVAL)) AS tempo_total
FROM Pessoa NATURAL JOIN Cliente JOIN ConsumoLazer ON Cliente.codigo = ConsumoLazer.codcli JOIN Lazer ON Lazer.codigo = ConsumoLazer.codla 
GROUP BY Pessoa.nome, Pessoa.codigo


-- Procedimento Armazenado:
CREATE OR REPLACE FUNCTION BloqueiaAtualizacao()
RETURNS TRIGGER AS $$
BEGIN
    RAISE EXCEPTION 'Nao e possivel atualizar o salario do funcionario.';
	ROLLBACK;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER AtualizacaoSalario
AFTER UPDATE ON Funcionario
FOR EACH ROW
WHEN (OLD.salario IS DISTINCT FROM NEW.salario)
EXECUTE FUNCTION BloqueiaAtualizacao();

UPDATE Funcionario SET salario = 7890 WHERE Funcionario.codigo = 1;
UPDATE Funcionario SET salario = 0 WHERE Funcionario.codigo = 2;
UPDATE Funcionario SET salario = 10000 WHERE Funcionario.codigo = 3;

















