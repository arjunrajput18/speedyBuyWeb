export const ProductDetailsServices = async (_id) => {
  try {
    const response = await fetch(`/api/products/${_id}`);
    const data = await response.json();
    return data.product;
  } catch (error) {
    console.log(error);
  }
};
