const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');
const { Order, OrderSchema } = require('./order.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  User.assocciate(sequelize.models);
  Customer.assocciate(sequelize.models);
  Category.assocciate(sequelize.models);
  Product.assocciate(sequelize.models);
  Order.assocciate(sequelize.models);
}

module.exports = setupModels;
