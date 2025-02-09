import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   api_key: "453242312974514",
//   api_secret: "y9VkmCQ-w_2WIfZAgLFqDMCfNNI",
//   cloud_name: "dxacttggi",
// });
cloudinary.config({
  api_key: "778997497951123",
  api_secret: "wDQy-uLQDAd0nAXIoIoj74vvkpw",
  cloud_name: "dnahjt0do",
});

export const uploadMedia = async (file,folder) => {
  const baseFolder = 'tag-manager';  // The base folder for your project

  // Combine the base folder and user folder dynamically
  const folderPath = `${baseFolder}/${folder}`;
  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
      folder:folderPath
    });
    return uploadResponse;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMediaFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log(error);
  }
};

