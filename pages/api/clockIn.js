import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const data = req.body;

      const client = await MongoClient.connect(process.env.DB_URL);

      const db = client.db();

      const timeCollection = db.collection("time");

      const result = await timeCollection.insertOne(data);

      console.log(result);
      res.status(201).json({ message: "time posted to DB successffully" });
      client.close();
    } catch (err) {
      console.log("issues has occrred", err);
    }
  }
};

export default handler;
