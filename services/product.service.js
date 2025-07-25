import * as productsModel from '../models/products.model.js';


export default {
    getAll: async () => {
        return await productsModel.getAllProducts();
    },
    getProductById: async (id) => {
        return await productsModel.getByIdProduct(id);
    },
    createProduct: async (product) => {
        return await productsModel.createProduct(product);
    },
    deleteProduct: async (id) => {
        return await productsModel.deleteProduct(id);
    }
};