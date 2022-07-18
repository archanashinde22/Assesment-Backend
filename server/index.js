const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getInspireQuotes,
  createNewGoal,
  deleteGoal,
  updateGoal,
} = require("./controller");
//, createNewGoal , deleteGoal

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/inspireQuote", getInspireQuotes);
app.post("/api/goal", createNewGoal);
app.delete(`/api/goal/:goalid`, deleteGoal);
app.put(`/api/goal/:goalid`, updateGoal);


//app.delete("/api/goal" ,deleteGoal)

app.listen(4000, () => console.log("Server running on 4000"));
