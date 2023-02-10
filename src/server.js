const app = require("./app");
const Loaders = require("./loaders/index");

Loaders.start();

const port = 3333;

app.listen(port, (error) => {
  console.log(`API listening on port ${port}.`);
  if (error) throw error;
});
