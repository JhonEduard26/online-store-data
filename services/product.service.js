const faker = require('faker');
const boom = require('@hapi/boom');
const pool = require('../libs/postgres');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const query = `INSERT INTO products(name) VALUES (${data})`;
    const rta = await pool.query(query);
    return rta;
  }

  async find() {
    const query = 'SELECT * FROM products';
    const rta = await pool.query(query);
    return rta.rows;
  }

  async findOne(id) {
    const query = `SELECT * FROM products WHERE id = ${id}`;
    const rta = await pool.query(query);
    return rta;
  }

  async update(id, changes) {
    const query = `UPDATE products SET name ${changes} WHERE id = ${id}'`;
    const rta = await pool.query(query);
    return rta;
  }

  async delete(id) {
    const query = `DELETE FROM products WHERE id = ${id}`;
    const rta = await pool.query(query);
    return rta;
  }
}

module.exports = ProductsService;
