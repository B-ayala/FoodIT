import { db } from '../config/db.js';
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
                
const products = collection(db, 'productos');

export const getAllProducts = async () => {
    try {
        const productList = await getDocs(products);
        return productList.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("Error getting all products:", error);
        throw new Error("Error getting all products");
    }
}

export const getByIdProduct = async (id) => {
    try {
        const ref = doc(db, "productos", id)
        const snapshot = await getDoc(ref);
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    } catch (error) {
        console.error("Error getting product by ID:", error);
        throw new Error("Error getting product by ID");
    }
}

export const createProduct = async (product) => {
    try {
        const newProduct = await addDoc(products, product);
        return { id: newProduct.id, ...product };
    } catch (error) {
        console.error("Error creating product:", error);
        throw new Error("Error creating product");
    }
}

export const updateProduct = async (id, product) => {
    try {
        const ref = doc(db, "productos", id);
        await updateDoc(ref, product);
        return { id, ...product };
    } catch (error) {
        console.error("Error updating product:", error);
        throw new Error("Error updating product");
    }
}

export const deleteProduct = async (id) => {
    try {
        const ref = doc(db, "productos", id);
        await deleteDoc(ref);
        return true;
    } catch (error) {
        console.error("Error deleting product:", error);
        throw new Error("Error deleting product");
    }
}