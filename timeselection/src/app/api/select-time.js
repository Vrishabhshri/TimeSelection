// /pages/api/select-time.js

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI); // Replace with your MongoDB URI

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, time } = req.body;

    try {
      await client.connect();
      const db = client.db("meetingDB");
      const collection = db.collection("selectedTimes");

      // Save the new selection to the database
      await collection.insertOne({ name, time });

      res.status(200).json({ message: "Time selected successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to save the selected time." });
    } finally {
      await client.close();
    }
  } else if (req.method === "GET") {
    try {
      await client.connect();
      const db = client.db("meetingDB");
      const collection = db.collection("selectedTimes");

      // Retrieve all selected times
      const selectedTimes = await collection.find().toArray();

      res.status(200).json(selectedTimes);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch selected times." });
    } finally {
      await client.close();
    }
  }
}
