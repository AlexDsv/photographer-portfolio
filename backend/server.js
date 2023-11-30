require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const axios = require("axios");

app.get("/api/images", async (req, res) => {
  try {
    const cloudinaryResponse = await axios.get(
      "https://api.cloudinary.com/v1_1/dyztxq5p3/resources/image",
      {
        auth: {
          username: "391397281437447",
          password: "zrLOJP8W1_LxBfPZ85V6MN2ltAg",
        },
      }
    );
    res.json(cloudinaryResponse.data.resources);
  } catch (error) {
    res.status(500).send("Erreur lors de la récupération des images");
  }
});
