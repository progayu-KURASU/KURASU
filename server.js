const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 仮ログイン状態（あとでちゃんと作る）
let loggedIn = false;

app.get("/", (req, res) => {
  if (!loggedIn) {
    res.sendFile(path.join(__dirname, "login.html"));
  } else {
    res.sendFile(path.join(__dirname, "おは.html"));
  }
});

app.get("/login-success", (req, res) => {
  loggedIn = true;
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("KURASU is running 🚀！！");
});
