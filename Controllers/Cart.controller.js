import { response } from "express";
import foodModel from "../Models/foodModel.js";
import cartModel from "../Models/cartModel.js";

export const createcart = (req, res) => {
  const { userId, resturantId, foodItems, couponApplied, cardTotal } = req.body;
  let total = 0;

  if (!userId || !resturantId) {
    return res.status(401).json({
      success: false,
      message: "Some data is missing",
      error: "resturant or user id missing",
    });
  }
  if (foodItems.length > 0) {
    foodItems.forEach((food) => {
      total += food.price * food.quantity;
    });
  } else {
    return res.status(401).json({
      message: "Food items is empty",
    });
  }

  const cartNew = new cartModel({
    userId,
    resturantId,
    foodItems,
    couponApplied,
    cardTotal: total,
  });
  cartNew.save()
    .then((response) => {
      if (response && response.id) {
        return res.status(200).json({
          message: "Cart create sucessfully",
          data: response,
        });
      }
    })
    .catch((error) => {
      return res.status(401).json({
        success: false,
        error: error,
        message: "Cart create in error",
        error: error,
      });
    });
};

//// update food
export const updateCart = async (req, res) => {
  try {
  
    const { id } = req.params;
    const food = await cartModel.findByIdAndUpdate(id);
    res.status(200).send({
      success: true,
      messsage: "Cart Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Cart",
    });
  }
};
/////get all food
// export const CartController = (req, res) => {
//   const { resturantId } = req.params;
//   try {
//     if (!resturantId) {
//       return res.status(401).json({
//         success: false,
//         message: "resturant id is missing",
//       });
//     }
//     foodModel.find({ resturantId: resturantId }).then((response) => {
//       if (response && response.length > 0) {
//         return res.status(200).json({
//           message: "food item fetch suceess",
//           data: response,
//         });
//       } else {
//         return res.status(200).json({
//           message: "No food item found",
//         });
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "Error while getting all food",
//     });
//   }
// };
