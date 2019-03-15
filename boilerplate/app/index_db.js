const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
var mongodb = require("mongodb");

// var ObjectID = mongodb.ObjectID;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// global error handler
app.use(errorHandler);

// api healthcheck
app.all('/ping', function(req, res) {
    res.send('pong');
  });

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});
 
app.get('/', (req, res) => {
  res.send('appName');
});

var PRODUCTS_COLLECTION = "products";

/*  "/api/products"
 *    GET: finds all products
 *    POST: creates a new product
 */

app.get("/api/products", function(req, res) {
  db.collection(PRODUCTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get products.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/products", function(req, res) {
  var newproduct = req.body;
  newproduct.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  } else {
    db.collection(PRODUCTS_COLLECTION).insertOne(newproduct, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new product.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});