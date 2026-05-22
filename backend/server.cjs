const {app} = require("./app.cjs");
const {connectDB} = require("./src/db/index.db.cjs");
const dotenv = require('dotenv');

dotenv.config();

connectDB()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
  });
})
.catch((error) => {
    console.log(`App has encountered some error: ${error}`);
})