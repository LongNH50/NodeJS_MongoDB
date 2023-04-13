import { mongoose } from "mongoose";

const schema = mongoose.Schema(
  {
    title: String,
    category: {
      name: String,
    },
    pictures: [
      {
        filename: String,
      },
    ],
    ingredients: [
      {
        name: String,
        amount: String,
        brands: [
          {
            name: String,
          },
        ],
      },
    ],
  },
  { timestamp: true }
);

export default mongoose.model("meals", schema);
