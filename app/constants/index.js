import { ENV_API_URL, ENV_API_KEY1, ENV_API_KEY2 } from "@env";

const bgColors = ["#2301a6", "#cc822c", "#375057", "#030128"];

const NAME = "news";
const PAGESIZE = 20;

// console.log("============>", ENV_API_KEY1);

//API URL
const API_URL = ENV_API_URL;
const API_KEY = `?apiKey=${ENV_API_KEY1}`;
const API_PARAMS = `&pageSize=${PAGESIZE}`;

//API End Points
const HEADLINES = `${API_URL}/top-headlines${API_KEY}${API_PARAMS}`;
const SEARCH = `${API_URL}/everything${API_KEY}${API_PARAMS}&sortBy=relevancy`;

//CATEGORIES
const CATEGORIES = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

export { bgColors, NAME, API_KEY, API_URL, API_PARAMS, HEADLINES, SEARCH, CATEGORIES };
