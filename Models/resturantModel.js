import mongoose from "mongoose";

const resturantschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cusine: {
    type: Array,
    required: false,
  },
  branch: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  Address: {
    type: Object,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("restruant", resturantschema);
