import mongoose from "mongoose";

const foodschema = mongoose.Schema({
  resturantId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  foodDescription: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: false,
  },
  foodCategory: {
    type: String,
    required: false,
  },
  actualPrice: {
    type: Number,
    required: true,
  },
  offerDetails: {
    offerprice: {
      type: Number,
      required: false,
      default: null,
    },
    offerValue: {
      type: Number,
      required: false,
      default: null,
    },
    offerdescription: {
      type: String,
      required: false,
      default: null,
    },
  },
});
export default mongoose.model("food", foodschema);
