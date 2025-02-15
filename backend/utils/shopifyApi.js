const axios = require("axios");
const SHOPIFY_API_URL = process.env.SHOPIFY_API_URL;
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;

const shopifyApi = axios.create({
  baseURL: SHOPIFY_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": SHOPIFY_API_KEY,
  },
});
console.log("Base URL:", SHOPIFY_API_URL);
console.log("Headers:", shopifyApi.defaults.headers);

module.exports = shopifyApi;
