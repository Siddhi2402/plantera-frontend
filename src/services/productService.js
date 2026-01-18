export const getProducts = async () => {
  const response = await fetch("https://plantera-backend-2.onrender.com/api/products");
  return response.json();
};
