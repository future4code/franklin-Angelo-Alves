### Exercício 1

a)
VARCHAR(255) recebe uma string de ate 255 caracteres.
Primary Key é o identificador único da tabela.
NOT NULL faz com que o campo se torne obrigatório.
DATE recebe um dado do tipo data.
VARCHAR(6) recebe uma string de até 6 caracteres.

b)
SHOW DATABASES retorna todos seus schemas
SHOW TABLES mostra todas as tabelas dentro do schema selecionado

c)O Comando DESCRIBE retorna toda a estrutura e regras de cada coluna de uma tabela.


### Exercício 2
a) Query:
`INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "male"
);`


b) Um novo item com o id 002 não pode ser adicionado, pois o campo id é uma primary key. Portanto não pode ser repetido. Codigo de erro 1062.


c) O erro da Query estava na declaração dos dados. Faltava declarar birth_date e gender.

Query correta:
`INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);`


d) O erro da Query estava em não passar nem declarar o dado name. Sendo que ele é obrigatório (not null)

Query correta:
`INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Chico Mattos",
  400000,
  "1949-04-18", 
  "male"
);`

e) O campo date precisa ser passado como string:

`INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);`

### Exercício 3

a) `SELECT * FROM Actor WHERE gender = "female"`


b) `SELECT salary FROM Actor WHERE name = "Tony Ramos"`


c) `SELECT * FROM Actor WHERE gender <> "male" AND "female"`
Retornará todos os dados de quem tiver o `gender` diferente de `male` e `female`


d) `SELECT id, name, salary FROM Actor WHERE salary < 500000`


e) a query está declarada errada. O certo seria: (campo de nome errado)
`SELECT id, name from Actor WHERE id = "002"`


### Exercício 4

a)`SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000`

A Query acima buscará todos os dados, da Table Actors, que tenham o `name` começando com a letra A ou J e tenha o salário maior que 300000.

b) `SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000`

c) `SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000`

d) `SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%" AND salary > 350000 AND salary < 900000
`

### Exercício 5

a) CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao FLOAT NOT NULL
);

### Exercício 6

a) `SELECT id, titulo, avaliacao FROM Movies WHERE id = "004";`

b) `SELECT * FROM Movies WHERE titulo = "Cidade de Deus";`

c) `SELECT id, titulo, sinopse FROM Movies WHERE avaliacao > 7;`

### Exercício 7

a) `SELECT * FROM Movies WHERE titulo LIKE "%vida%";`

b) `SELECT * FROM Movies WHERE titulo LIKE "%vida%" OR sinopse LIKE "%vida%";`

c) `SELECT * FROM Movies WHERE data_lancamento < "2022-08-16`

d) `SELECT * FROM Movies WHERE (titulo LIKE "%vida%" OR sinopse LIKE "%vida%") AND avaliacao > 7 AND data_lancamento < "2022-08-16";`