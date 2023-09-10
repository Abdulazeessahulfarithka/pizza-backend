import { response } from "express";
import foodModel from "../Models/foodModel.js";

export const createfood = (req, res) => {
  const {
    resturantId,
    foodName,
    foodDescription,
    foodType,
    foodCategory,
    actualPrice,
    offerDetails,
  } = req.body;

  const Foodnew = new foodModel({
    resturantId,
    foodName,
    foodDescription,
    foodType,
    foodCategory,
    actualPrice,
    offerDetails,
  });
  Foodnew.save()
    .then((response) => {
      if (response && response.id) {
        return res.status(200).json({
          message: "Food create sucessfully",
          data: response,
        });
      }
    })
    .catch((error) => {
      return res.status(401).json({
        success: false,
        error: error,
        message: "create in error",
      });
    });
};

//// update food
export const updateFood = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const food = await foodModel.findByIdAndUpdate(id);
    res.status(200).send({
      success: true,
      messsage: "food Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating category",
    });
  }
};
/////get all food
export const foodController = (req, res) => {
  const { resturantId } = req.params;
  try {
    if (!resturantId) {
      return res.status(401).json({
        success: false,
        message: "resturant id is missing",
      });
    }
    foodModel.find({ resturantId: resturantId }).then((response) => {
      if (response && response.length>0) {
        return res.status(200).json({
          message: "food item fetch suceess",
          data:response,
        });
      } else {
        return res.status(200).json({
          message: "No food item found",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all food",
    });
  }
};
