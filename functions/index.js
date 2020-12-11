const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51GsSZRBXI5visGcEWiwNs5haPSVaPch6SdrEDgIDxBGsyzvlxFRJBzZ2ZOHM7P4gOAktD1eDjG1W1YptV8zqIMpP009FObXp9f"
);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
//App config
const app = express();

//http://localhost:5001/fir-b537c/us-central1/api

//--Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

//----API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/sanjay", (request, response) =>
  response.status(200).send("hello whats app rajinikanth")
);
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received BOOM:!! for this amount", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currencey
    currency: "inr",
  });
  //ok-created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    paymentIntent: paymentIntent,
  });
});
//Listen command

exports.api = functions.https.onRequest(app);
