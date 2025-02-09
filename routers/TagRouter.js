import express from "express";
import { createTag, getTags, imageUploadForTag } from "../controllers/TagController.js";
import upload from "../utils/multer.js";


const TagRouter = express.Router();

TagRouter.route("/").get(
    getTags
);
TagRouter.route("/").post(
    createTag
);
TagRouter.route("/upload-image").post(
    upload.fields([{ name: 'front_image', maxCount: 1 }, { name: 'back_image', maxCount: 1 }]),
    imageUploadForTag
);


export default TagRouter;