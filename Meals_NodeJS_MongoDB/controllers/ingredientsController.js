import meals from "../models/mealModel.js";

export async function getAllIngredients(req, res, next) {
  try {
    const { meal_id } = req.params;
    const result = await meals.findOne(
      { _id: meal_id },
      { ingredients: 1, _id: 0 }
    );
    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function addIngredient(req, res, next) {
  try {
    const { meal_id } = req.params;
    const new_Ingredient = req.body;
    const result = await meals.updateOne(
      { _id: meal_id },
      { $push: { ingredients: new_Ingredient } }
    );

    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function getIngredientByID(req, res, next) {
  try {
    const { meal_id, ingredient_id } = req.params;
    const result = await meals.findOne(
      { _id: meal_id, "ingredients._id": ingredient_id },
      { "ingredients.$": 1, _id: 0 }
    );
    res.json(result.ingredients);
  } catch (e) {
    next(e);
  }
}

export async function updateIngredientByID(req, res, next) {
  try {
    const { meal_id, ingredient_id } = req.params;
    const new_amount = req.body.amount;
    const result = await meals.updateOne(
      { _id: meal_id, "ingredients._id": ingredient_id },
      { $set: { "ingredients.$.amount": new_amount } }
    );
    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function deleteIngredientByID(req, res, next) {
  try {
    const { meal_id, ingredient_id } = req.params;
    const result = await meals.updateOne(
      { _id: meal_id },
      { $pull: { ingredients: { _id: ingredient_id } } }
    );
    res.json(result);
  } catch (e) {
    next(e);
  }
}
