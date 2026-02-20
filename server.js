const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ルートアクセスでおは.htmlを表示
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "おは.html"));
});

app.listen(PORT, () => {
  console.log("KURASU is running 🚀！！");
});
