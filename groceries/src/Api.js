const API_URL = "http://192.168.137.25:3000/groceries/products";

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
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message); // Lanza el mensaje de error del backend
    }
    return data;
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