const bgColors = ["#2301a6", "#cc822c", "#375057", "#030128"];

const NAME = "news";
const PAGESIZE = 20;

//API URL
const API_URL = "https://newsapi.org/v2";
const API_KEY = "?apiKey=";
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
