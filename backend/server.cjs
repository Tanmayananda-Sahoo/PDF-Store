const dotenv = require('dotenv');
dotenv.config();

const {connectDB} = require("./src/db/index.db.cjs");
connectDB()
.then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
  });
})
.catch((error) => {
    console.log(`App has encountered some error: ${error}`);
})

const {app} = require("./app.cjs");