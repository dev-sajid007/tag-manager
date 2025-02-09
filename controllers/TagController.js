import { Image } from "../models/ImageModel.js";
import { Tag } from "../models/TagModel.js";
import { uploadMedia } from "../utils/cloudinary.js";
import fs from "fs";
export const getTags = async (req, res) => {
  try {
    const tags = await Tag.find();

    res.status(201).json({
      success: true,
      tags,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTag = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      res.status(404).json({
        success: false,
        message: "Name field are required!",
      });
    }

    await Tag.create({ name });

    res.status(201).json({
      success: true,
      message: "Tag Create Successfully",
    });

    console.log(name);
  } catch (error) {
    console.log(error);
  }
};

export const imageUploadForTag = async (req, res) => {
  try {
    const images = req.files;

    const frontFile = images.front_image[0];
    const backFile = images.back_image[0];

    if (!frontFile) {
      return res.status(404).json({
        success: false,
        message: "Front Image are required",
      });
    }

    if (!backFile) {
      return res.status(404).json({
        success: false,
        message: "Back Image are required",
      });
    }

    let frontFileUrl = {};
    let backFileUrl = {};

    if (frontFile) {
      const response = await uploadMedia(frontFile.path, "tags");
      frontFileUrl = response.secure_url;
      fs.unlinkSync(frontFile.path);

      const newImage = new Image({ url: frontFileUrl, type: "front" });
      await newImage.save();
    }

    if (backFile) {
      const response = await uploadMedia(backFile.path, "tags");
      backFileUrl = response.secure_url;
      fs.unlinkSync(backFile.path);

      const newImage = new Image({ url: backFileUrl, type: "back" });
      await newImage.save();
    }

    return res.status(201).json({
      success: true,
      message: "Image upload successfully!",
    });
  } catch (error) {
    console.log(error);
  }
};
