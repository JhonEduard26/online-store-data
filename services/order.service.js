const boom = require('@hapi/boom');
const pool = require('../libs/postgres');

class OrderService {
  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }
  async create(data) {
    const query = `INSERT INTO orders(order_date, order_total) VALUES(${data.orderDate}${data.orderTotal})`;
    const rta = await pool.query(query);
    return rta;
  }

  async find() {
    const query = `SELECT * FROM orders`;
    const rta = await pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    const query = `SELECT * FROM orders WHERE id = ${id}`;
    const rta = await pool.query(query);
    return rta;
  }

  async update(id, changes) {
    const query = `UPDATE orders set orderDate ${changes} WHERE id = ${id}`;
    const rta = await pool.query(query);
    return rta;
  }

  async delete(id) {
    const query = `DELETE FROM orders WHERE id = ${id}`;
    const rta = await pool.query(query);
    return rta;
  }
}

module.exports = OrderService;
