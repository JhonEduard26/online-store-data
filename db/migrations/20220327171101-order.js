'use strict';

const { ORDER_TABLE, OrderSchema } = require('../models/order.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE);
  },
};
