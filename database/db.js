import mongoose from "mongoose";

const connectDB = async () => {

  const dbUri = process.env.MONGO_URI || 'mongodb://mikejson7856:Xo29r4BIdGff5nFQ@ac-2mrpor8-shard-00-00.yqadcrk.mongodb.net:27017,ac-2mrpor8-shard-00-01.yqadcrk.mongodb.net:27017,ac-2mrpor8-shard-00-02.yqadcrk.mongodb.net:27017/cardback?ssl=true&replicaSet=atlas-tx134a-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';


  try {
    await mongoose.connect(dbUri);
  } catch (error) {
    console.error("Error details:", error.message);
  }
};

export default connectDB;
