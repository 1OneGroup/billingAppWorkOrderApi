const express = require("express");
const cors = require("cors");
const { WorkOrder } = require("./config");

const app = express();
app.use(express.json()); // use express.json() middleware to parse incoming JSON data
app.use(cors());

const port = process.env.PORT || 5000;

app.post("/addworkorder", async (req, res) => {
  // const data = req.body;

  // const newWorkOrder = {
  //   Date: new Date(),
  //   workOrderDate: data.workOrderDate,
  //   Amount: data.Amount,
  //   vendor: data.vendor,
  //   woNo: data.woNo,
  // };

  // console.log(newWorkOrder);

  // try {
  //   await WorkOrder.add(newWorkOrder);
  //   console.log("Work order added successfully");
  //   res.send("Work order added successfully");
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send("Error adding work order to database");
  // }
  console.log(req)
    res.send(req);


});

app.listen(port, () => console.log(`App listening on port ${port}`));
