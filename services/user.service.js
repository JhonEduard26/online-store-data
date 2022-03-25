const boom = require('@hapi/boom');
const pool = require('../libs/postgres');

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  async create(data) {
    const query = `INSERT INTO tasks(name, email, password) VALUES (${data.name}${data.email}${data.password})`;
    const rta = await pool.query(query);
    return rta;
  }

  async find() {
    const query = 'SELECT * FROM users';
    const rta = await pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    const query = `SELECT * FROM users WHERE id = ${id}`;
    const rta = await pool.query(query);
    return rta;
  }

  async update(id, changes) {
    const query = `UPDATE users SET name ${changes} WHERE id = ${id}`;
    const rta = await pool.query(query);
    return rta;
  }

  async delete(id) {
    const query = `DELETE FROM users WHERE id = ${id}`;
    const rta = await pool.query(query);
    return rta;
  }
}

module.exports = UserService;
