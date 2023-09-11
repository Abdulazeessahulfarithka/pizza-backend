import mongoose from "mongoose";

const Cartschema = mongoose.Schema({
  resturantId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  foodItems: {
    type: Array,
    required: true,
  },
  couponApplied: {
    type:  mongoose.Schema.Types.ObjectId,
    required: false,
  },
  cardTotal: {
    type: Number,
    required: false,
  },
});
export default mongoose.model("cart", Cartschema);
