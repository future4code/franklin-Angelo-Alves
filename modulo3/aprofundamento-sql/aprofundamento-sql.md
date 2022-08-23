### Exercício 1 

a) altera a a tabela removendo a coluna salary

b) altera a coluna gender para sex VARCHAR(6)

c) alteraria a coluna gender para gender VARCHAR(255)

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2

a) 
UPDATE Actor
SET name = "marjorie estiano"
WHERE id = "003";

UPDATE Actor
SET birth_date = '2000-12-16'
WHERE id = "003";

b)
UPDATE Actor
SET name = upper(name)
WHERE name = "Juliana Paes";

SELECT name from Actor WHERE name = "Juliana Paes";

UPDATE Actor
SET name = lower(name)
WHERE name = "Juliana Paes";

SELECT name from Actor WHERE name = "Juliana Paes";

c) 
UPDATE Actor
SET name = "Juliana Pires", birth_date = "2000-04-02", gender = "nao-binario", favorite_ice_cream_flavor = "chocolate", type = "director"
WHERE id = "005";

d) ele nao consegue encontrar.

### Exercício 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor WHERE gender = "male" AND salary>1000000

### Exercício 4 

a) SELECT MAX(salary) from Actor

b) SELECT MIN(salary) from Actor WHERE gender = "female"

c) SELECT COUNT(*) from Actor WHERE gender = "female"

d) SELECT SUM(salary) from Actor

b
DELETE FROM Actor
WHERE
gender = "male" AND
salary > 1000000