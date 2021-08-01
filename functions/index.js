const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors"); 
const { request } = require("express");
const stripe = require("stripe")(
    'sk_test_51JJgQYHul6GMttKdt4n7n9RtxpVZ71rVjf0pWSQH1JZguUtVdONVAqv75S23u6E8pPxvyJ3RyavHezvufXT3sdkM00H5IkGFlu')
// API

// - App config
const app = express();

// - Middlewares  
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  console.log('>>>>>>>>>>>',paymentIntent)

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// example api
// http://localhost:5001/fir-bbe2f/us-central1/api