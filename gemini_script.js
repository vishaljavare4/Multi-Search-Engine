console.log("hello");

let searchButton = document.getElementById("search_button");
let messageContainer = document.getElementById("latest_container");
let userInput = document.querySelector("#input_search");

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDQ2UMTKHOnrZavd4iDAHMILv0nNeCZkJE";
// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
  if (userInput.value === "") {
    alert("Please fill the input...");
    return;
  }

  searchButton.innerText = "Loading...";
  searchButton.style.width = "150px";
  searchButton.style.background = "linear-gradient(45deg, #ff0000, #00ff00)";
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  //user Input Part

  const prompt = userInput.value;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const answer = response.text();

  //bot Output Part
  messageContainer.style.display = "block";
  messageContainer.textContent = answer;

  console.log(answer);
  searchButton.innerText = "Search";
  searchButton.style.width = "120px";
  searchButton.style.background =
    "linear-gradient(45deg, #2f2ff7, #b282e2, #ff00ff)";
  // userInput.value="";
}

searchButton.addEventListener("click", run);