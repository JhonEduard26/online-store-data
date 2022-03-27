'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');
const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE, 'image', ProductSchema.image);
    await queryInterface.addColumn(
      PRODUCT_TABLE,
      'description',
      ProductSchema.description
    );
    await queryInterface.addColumn(
      PRODUCT_TABLE,
      'category_id',
      ProductSchema.categoryId
    );
    await queryInterface.addColumn(
      CATEGORY_TABLE,
      'image',
      CategorySchema.image
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'image');
    await queryInterface.removeColumn(PRODUCT_TABLE, 'description');
    await queryInterface.removeColumn(PRODUCT_TABLE, 'category_id');
    await queryInterface.removeColumn(CATEGORY_TABLE, 'image');
  },
};
