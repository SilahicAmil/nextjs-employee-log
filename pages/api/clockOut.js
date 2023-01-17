import { MongoClient, ObjectId } from "mongodb";

const helper = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;
      console.log(data);

      const client = await MongoClient.connect(process.env.DB_URL);

      const db = client.db();

      const timeCollection = db.collection("time");

      //   const newestItem =

      const filter = {
        timeStart: data.startTime,
      };

      const options = { upsert: false };

      const updateDoc = {
        $set: {
          timeOut: data.timeOut,
        },
      };

      const result = await timeCollection.updateOne(filter, updateDoc, options);

      console.log(result);

      res.json(200).json({ message: "updated succesffully", result });
      client.close();
    } catch (err) {
      console.log("error occurred", err);
    }
  }
};

export default helper;
