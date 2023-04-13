import meals from "../models/mealModel.js";

export async function getAllMeals(req, res, next) {
  try {
    const result = await meals.find({});
    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function addMeal(req, res, next) {
  try {
    const new_meal = req.body;
    const result = await meals.create(new_meal);
    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function getMealByID(req, res, next) {
  try {
    const { meal_id } = req.params;
    const result = await meals.findOne(
      { _id: meal_id },
      { title: 1, ingredients: 1, _id: 0 }
    );
    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function updateMealByID(req, res, next) {
  try {
    const { meal_id } = req.params;
    const new_title = req.body.title;
    const result = await meals.updateOne(
      { _id: meal_id },
      { $set: { title: new_title } }
    );
    res.json(result);
  } catch (e) {
    next(e);
  }
}

export async function deleteMealByID(req, res, next) {
  try {
    const { meal_id } = req.params;
    const result = await meals.deleteOne({ _id: meal_id });
    res.json(result);
  } catch (e) {
    next(e);
  }
}
