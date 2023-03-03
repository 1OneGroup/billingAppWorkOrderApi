const express = require("express");
const cors = require("cors");
const {WorkOrder} = require("./config");

 




const app = express();
app.use(express.json());
app.use(cors());

const port= process.env.port || 5000




app.post("/addworkoreder", async (req, res) => {
  
const data=req.body
console.log(data)

const newData={"Date": new Date(),
"workOrderDate": data.workOrderDate,
"Amount": data.Amount,
"vendor": data.vendor,
"woNo": data.woNo}
console.log(newData)

await WorkOrder.add(
    
    newData).then(console.log("added")).catch((error)=>console.log(error))














  res.send("Hello , Everything is fine, Your data is added......");
});




app.listen(port, () => console.log("Up & Running ...."));
