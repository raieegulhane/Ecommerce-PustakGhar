import { Response } from "miragejs";

// GET Request at /api/products
export const getAllProductsHandler = function () {
  return new Response(200, {}, { products: this.db.products });
};


// GET Request at /api/user/products/:productId
export const getProductHandler = function (schema, request) {
  const productId = request.params.productId;
  try {
    const product = schema.products.findBy({ id: productId });
    return new Response(200, {}, { product });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};