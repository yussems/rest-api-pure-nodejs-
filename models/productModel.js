const products = require("../data/product.json");
const { writeDataToFile } = require("../utils");
const { v4: uuidv4 } = require('uuid')
function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}
function findOne(id) {
  return new Promise((resolve, reject) => {
    const filterVal = products.find((item) => item.id === id);
    resolve(filterVal);
  });
}
function create(val) {
  return new Promise((resolve, reject) => {
    
    const newProduct = {id: uuidv4(), ...val}
    products.push(newProduct);
    writeDataToFile("./data/product.json", products);
    resolve(newProduct);
  });
}
function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { id, ...product };
    console.log(product);
    writeDataToFile("./data/product.json", products);
    resolve(products[index]);
  });
}
function deleteProduct(id) {
  return new Promise((resolve, reject) => {
    const deletedPro = products.filter(p => p.id !== id)
    writeDataToFile("./data/product.json", deletedPro);
    resolve()
  });
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  deleteProduct
};
