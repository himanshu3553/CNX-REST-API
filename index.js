const express = require("express");
const mongoose = require("mongoose");
const app = express();
const axios = require("axios");
const {
  transformDataForAPI1,
  transformDataForAPI2,
  mergeData,
} = require("./services/transformation");
const { validateData } = require("./services/validation");
const { save } = require("./services/save");
const config = require("./config");

(cors = require("cors")), (bodyParser = require("body-parser"));

app.use(cors());
app.use(bodyParser.json());

app.get("/", async function (req, res) {
  try {
    const response_api1 = await axios.get(config.api_1);
    const response_api2 = await axios.get(config.api_2);

    let dataFromAPI1 = response_api1.data;
    let dataFromAPI2 = response_api2.data;

    let isDataValidatedFromAPI1 = validateData(dataFromAPI1);
    let isDataValidatedFromAPI2 = validateData(dataFromAPI2);

    if (isDataValidatedFromAPI1 && isDataValidatedFromAPI2) {
      let transformedDataFromAPI1 = transformDataForAPI1(dataFromAPI1);
      let transformedDataFromAPI2 = transformDataForAPI2(dataFromAPI2);

      let mergedData = mergeData(
        transformedDataFromAPI1,
        transformedDataFromAPI2
      );

      await save(mergedData);
      return res.status(200).json(mergedData);
    } else {
      return res.status(200).json({ success: false, msg: "Invalid Data" });
    }
  } catch (e) {
    console.log(e);
  }
});

mongoose.connect(
  "mongodb+srv://himanshu:himsingh@cluster0.aykog.mongodb.net/test?authSource=admin&replicaSet=atlas-g1sedh-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
);

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server started and Listening on port ${port}`)
);
