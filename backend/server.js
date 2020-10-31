const express = require("express");
const cors = require("cors");
const server = express();
const { v4: uuidv4 } = require("uuid");

server.use(cors());
server.options("*", cors());

const tasks = [
  { id: uuidv4(), title: "책 속독으로 20분 읽기", completed: false },
  { id: uuidv4(), title: "Vue 사용법 알아보기", completed: false },
  { id: uuidv4(), title: "마트가서 물건 사오기", completed: false },
  { id: uuidv4(), title: "React useState 사용해보기", completed: false },
  { id: uuidv4(), title: "방 옷걸이와 거울 위치 바꾸기", completed: false },
];

server.get("/", (req, res) => {
  res.send("This is a JSON server!");
});

// server.get("/json", async (req, res) => {
//   return await res.json(tasks);
// });
server.get("/json", (req, res) => {
  setTimeout(() => {
    return res.json(tasks);
  }, 500);
});

server.listen(3001, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("The server is runnig on port 3001");
});
