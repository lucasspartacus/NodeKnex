/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    {"id": 1, "descricao": "camiseta", "marca":"Nike", "preco": 49.99},
    {"id": 2, "descricao": "camiseta2", "marca":"Nike", "preco": 59.99},
    {"id": 3, "descricao": "camiseta3", "marca":"Nike", "preco": 69.99},
    {"id": 4, "descricao": "camiseta4", "marca":"Nike", "preco": 79.99},
    {"id": 5, "descricao": "chapeu", "marca":"Nike", "preco": 99.99},
    {"id": 6, "descricao": "camiseta6", "marca":"Nike", "preco": 89.99},
    {"id": 7, "descricao": "camiseta7", "marca":"Nike", "preco": 19.99},
    {"id": 8, "descricao": "camiseta8", "marca":"Nike", "preco": 29.99},
    {"id": 9, "descricao": "camiseta9", "marca":"Nike", "preco": 39.99},
    {"id": 10, "descricao": "camiseta10", "marca":"Nike", "preco": 49.99}
  ]);
};
