const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const inspireBtn = document.getElementById("inspireBtn");
const displaySection = document.getElementById("display-section");

// const displayGoalBtn = document.getElementById('displayGoal')

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
//feature 1 fortune added
const getFortune = () => {
  displaySection.innerHTML = null;
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    displayData(res.data);
  });
};
//feature 2 inspire quotes added
const getInspireQuotes = () => {
  displaySection.innerHTML = null;
  axios.get("http://localhost:4000/api/inspireQuote/").then((res) => {
    displayData(res.data);
  });
};

const displayData = (data) => {
  const quotePara = document.createElement("p");
  console.log(data);
  quotePara.textContent = data;
  displaySection.appendChild(quotePara);
};

const addGoalBtn = document.querySelector("#addGoal");
const deleteGoalBtn = document.querySelector("#deleteGoal");
const updateGoalBtn = document.querySelector("#updateGoal");

const goalContainer = document.getElementById("goal-container");
//feature 3 Goals +  Post method used
const addNewGoal = (e) => {
  e.preventDefault();

  const goalInput = document.getElementById("inputGoal");
  // console.log(goalInput.value);
  let body = { newGoal: goalInput.value };
  axios.post("http://localhost:4000/api/goal", body).then((res) => {
    //console.log(res.data);
    displayGoals(res.data);
  });
};
// Get  method used
const displayGoals = (arrofGoals) => {
  goalContainer.textContent = "";
  let goalList = document.createElement("ol");
  for (let i = 0; i < arrofGoals.length; i++) {
    let goalItem = document.createElement("li");

    goalItem.textContent = arrofGoals[i];
    goalList.appendChild(goalItem);
  }
  goalContainer.appendChild(goalList);
};
// Delete method used
const deleteGoal = (e) => {
  e.preventDefault();
  const goalindexInput = document.getElementById("deleteGoalNo");
  let goalid = goalindexInput.value;
  // console.log("Main delete", goalid);
  axios.delete(`http://localhost:4000/api/goal/${goalid}`).then((res) => {
    displayGoals(res.data);
    //console.log(" in main ", res.data);
  });
};
// upadte method used
const upadteGoal = (e) => {
  e.preventDefault();
  const goalNo = document.getElementById("updateGoalNo");
  const goalText = document.getElementById("updateGoalText");
  let goalid = +goalNo.value;
  let goaltext = goalText.value;
  console.log("in main update ", goalid);
  console.log("in main update ", goaltext);
  axios
    .put(`http://localhost:4000/api/goal/${goalid}`, { goaltext })
    .then((res) => {
      displayGoals(res.data);
      // console.log(res.data);
    });
};
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
inspireBtn.addEventListener("click", getInspireQuotes);
addGoalBtn.addEventListener("click", addNewGoal);
deleteGoalBtn.addEventListener("click", deleteGoal);
updateGoalBtn.addEventListener("click", upadteGoal);
