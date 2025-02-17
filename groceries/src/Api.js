const API_URL = "http://localhost:3008/groceries/products";

export const getProducts = async () => {
    const response = await fetch(`${API_URL}/getAll`);
    return await response.json();
};

export const getProduct = async (barcode) => {
    const response = await fetch(`${API_URL}/getOne/${barcode}`);
    return await response.json();
};

export const addProduct = async (product) => {
    const response = await fetch(`${API_URL}/insert`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    return await response.json();
};

export const updateProduct = async (barcode, product) => {
    const response = await fetch(`${API_URL}/updateOne/${barcode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    return await response.json();
};

export const deleteProduct = async (barcode) => {
    const response = await fetch(`${API_URL}/deleteOne/${barcode}`, {
        method: "DELETE",
    });
    return await response.json();
};
