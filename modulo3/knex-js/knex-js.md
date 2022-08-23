### Exercício 1

a)

b) const buscaAtor = async (nome: string): Promise<any> => {
  const resultado = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${nome}"
  `)
  return result
} 

c) const contaAtores = async (genero: string): Promise<any> => {
  const resultado = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${genero}"
  `);
  const count = resultado[0][0].count;
  return count;
};

### Exercício 2

a) const atualizaAtor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

b) const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 

c) const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};