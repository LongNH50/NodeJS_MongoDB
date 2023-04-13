import { Router } from "express";
import {
  deleteBrandByID,
  getAllBrands,
  getBrandByID,
  updateBrandByID,
  addBrand,
} from "../controllers/brandsController.js";

const router = Router({ mergeParams: true });

router.get("/", getAllBrands);
router.post("/", addBrand);
router.get("/:brand_id", getBrandByID);
router.patch("/:brand_id", updateBrandByID);
router.delete("/:brand_id", deleteBrandByID);

export default router;
