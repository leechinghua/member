import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000,function(){
  console.log('啟動 server 偵聽埠號3000')
})