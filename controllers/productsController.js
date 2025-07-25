import productService from '../services/product.service.js';   

export const getAllProducts = async (req, res) => {
    try {
        const data = await productService.getAll();
        res.status(200).json({ message: 'Lista de productos', payload: data });
    } catch (error) {
        res.status(500).json({ message: 'Error getting products', error: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const data = await productService.getProductById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product found', payload: data });
    } catch (error) {
        res.status(500).json({ message: 'Error getting product', error: error.message });
    }
}

export const createProduct = async (req, res) => {
    const { name, price, description, image } = req.body;
    if (!name || !price || !description || !image) {
        return res.status(400).json({ message: 'Name, price, description, and image are required' });
    }
    try {
        const newProduct = await productService.createProduct({ name, price, description, image });
        res.status(201).json({
            status: "success",
            action: "create",
            message: 'Product created successfully',
            payload: newProduct
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const deleted = await productService.deleteProduct(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
}
