import { error } from "console";
import resturantModel from "../Models/resturantModel.js";

export const createresurant = (req, res) => {
  const {
    name,
    cusine,
    branch,
    city,
    Address,
    state,
    country,
    contactNumber,
    area,
    pincode,
  } = req.body;

  const resturant = new resturantModel({
    name: name,
    cusine: cusine,
    branch: branch,
    city: city,
    Address: Address,
    state: state,
    country: country,
    contactNumber: contactNumber,
    area: area,
    pincode: pincode,
  });
  resturant
    .save()
    .then((response) => {
      if (response && response.id) {
        return res.status(200).json({
          message: "resturant create sucessfully",
          data: response,
        });
      }
    })
    .catch((error) => {
      console.log("resturant create error")
    });
};

//// update resturant
export const updateResturant = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const restruant = await resturantModelModel.findByIdAndUpdate(id);
    res.status(200).send({
      success: true,
      messsage: "Category Updated Successfully",
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
/////get all res
export const restruantControlller = async (req, res) => {
  try {
    const restruant = await resturantModelModel.find({});
    res.status(200).send({
      success: true,
      message: "All resturant List",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all resturant",
    });
  }
};
/// single res
export const singleResturantController = async (req, res) => {
  try {
    const restruant = await resturantModelModel.findOne({});
    res.status(200).send({
      success: true,
      message: "Get Single Category SUccessfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single Category",
    });
  }
};

//delete category
export const deleteResturantCOntroller = async (req, res) => {
  try {
    const { id } = req.params;
    await resturantModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Categry Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting category",
      error,
    });
  }
};
