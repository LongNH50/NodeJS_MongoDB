import { Router } from "express";
import {
  addIngredient,
  deleteIngredientByID,
  getAllIngredients,
  getIngredientByID,
  updateIngredientByID,
} from "../controllers/ingredientsController.js";
import brandsRouter from "./brandsRouter.js";

const router = Router({ mergeParams: true });

router.get("/", getAllIngredients);
router.post("/", addIngredient);
router.get("/:ingredient_id", getIngredientByID);
router.patch("/:ingredient_id", updateIngredientByID);
router.delete("/:ingredient_id", deleteIngredientByID);

router.use("/:ingredient_id/brands", brandsRouter);

export default router;
