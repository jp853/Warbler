/*jshint esversion: 6 */
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/warber", {
  keepAlive: true,
  useMongoClient: true
});
