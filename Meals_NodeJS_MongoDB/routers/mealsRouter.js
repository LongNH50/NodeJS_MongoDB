import { Router } from "express";
import {
  addMeal,
  deleteMealByID,
  getAllMeals,
  getMealByID,
  updateMealByID,
} from "../controllers/mealsController.js";
import ingredientsRouter from "./ingredientsRouter.js";

const router = Router();

router.get("/", getAllMeals);
router.post("/", addMeal);
router.get("/:meal_id", getMealByID);
router.patch("/:meal_id", updateMealByID);
router.delete("/:meal_id", deleteMealByID);

router.use("/:meal_id/ingredients", ingredientsRouter);

export default router;
