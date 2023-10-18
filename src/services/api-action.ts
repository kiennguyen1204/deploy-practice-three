import axios from 'axios';

// constants
import { PRODUCTS_API } from 'constants/api';
import { Product } from 'interfaces/item';

/**
 * Retrieves a product by its ID from the API.
 * @param {string} id - The ID of the product.
 * @returns {Promise<Product | null>} - The product with the specified ID, or null if not found.
 * @throws {Error} - If there's an error retrieving the product.
 */
export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const url = `${PRODUCTS_API}/${id}`;

    const response = await axios.get(url, {
      headers: { 'content-type': 'application/json' }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(PRODUCTS_API, {
      headers: { 'content-type': 'application/json' }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
