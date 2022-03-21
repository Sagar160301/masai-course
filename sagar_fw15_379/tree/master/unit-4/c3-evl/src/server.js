const app = require("./index");

const connect = require("./config/db");

app.listen(5901, async () => {
  try {
    await connect();
    console.log("port 5901");
  } catch (e) {
    console.log(e.message);
    // console.log(e.message)
  }
});
