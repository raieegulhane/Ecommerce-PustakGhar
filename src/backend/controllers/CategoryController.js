import { Response } from "miragejs";

// GET Request at /api/categories
export const getAllCategoriesHandler = function () {
  try {
    return new Response(200, {}, { categories: this.db.categories });
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


// GET Request at /api/user/category/:categoryId
export const getCategoryHandler = function (schema, request) {
  const categoryId = request.params.categoryId;
  try {
    const category = schema.categories.findBy({ _id: categoryId });
    return new Response(200, {}, { category });
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