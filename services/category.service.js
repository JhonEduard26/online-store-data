const boom = require('@hapi/boom');
const pool = require('../libs/postgres');

class CategoryService {
  constructor() {}
  async create(data) {
    const query = `INSERT INTO categories(name) VALUES(${data})`;
    const rta = await pool.query(query);
    return rta;
  }

  async find() {
    const query = 'SELECT * FROM categories';
    const rta = await pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    const query = `SELECT * FROM categories WHERE id = ${id}`;
    const rta = await pool.query(query);
    return rta;
  }

  async update(id, changes) {
    const query = `UPDATE categories SET name = ${changes} WHERE id = ${id}`;
    const rta = await pool.query(query);
    return rta;
  }

  async delete(id) {
    const query = `DELETE FROM categories WHERE id = ${id}`
    const rta = pool.query(query)
    return rta;
  }
}

module.exports = CategoryService;
