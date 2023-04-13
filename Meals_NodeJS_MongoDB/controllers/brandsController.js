import meals from "../models/mealModel.js";

export async function getAllBrands(req, res, next) {
  try {
    const { meal_id, ingredient_id } = req.params;
    const result = await meals.findOne(
      {
        _id: meal_id,
        "ingredients._id": ingredient_id,
      },
      { "ingredients.$": 1 }
    );
    res.json(result.ingredients[0]);
  } catch (e) {
    next(e);
  }
}

export async function addBrand(req, res, next) {
  try {
    const { meal_id, ingredient_id } = req.params;
    const new_brand = req.body;
    const result = await meals.updateOne(
      { _id: meal_id, "ingredients._id": ingredient_id },
      { $push: { "ingredients.$.brands": new_brand } }
    );
    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function getBrandByID(req, res, next) {
  try {
    const { meal_id, ingredient_id, brand_id } = req.params;
    const result = await meals.findOne(
      {
        _id: meal_id,
        "ingredients._id": ingredient_id,
      },
      { "ingredients.$": 1 }
    );
    const brand = result.ingredients[0].brands.find((i) => i._id == brand_id);
    res.json(brand);
  } catch (e) {
    next(e);
  }
}

export async function updateBrandByID(req, res, next) {
  try {
    const { meal_id, ingredient_id, brand_id } = req.params;
    const { name: new_name } = req.body;
    const result = await meals.updateOne(
      {
        _id: meal_id,
        "ingredients._id": ingredient_id,
      },
      { $set: { "ingredients.$.brands.$[nameB].name": new_name } },
      { arrayFilters: [{ "nameB._id": brand_id }] }
    );

    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function deleteBrandByID(req, res, next) {
  try {
    const { meal_id, ingredient_id, brand_id } = req.params;
    const result = await meals.updateOne(
      {
        _id: meal_id,
        "ingredients._id": ingredient_id,
      },
      { $pull: { "ingredients.$.brands": { _id: brand_id } } }
    );
    res.json(result);
  } catch (e) {
    next(e);
  }
}
