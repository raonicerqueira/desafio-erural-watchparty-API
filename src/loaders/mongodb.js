const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect("mongodb+srv://raonicerqueira:1122334455@cluster0.prdu98p.mongodb.net/test");
}

module.exports = startDB;
