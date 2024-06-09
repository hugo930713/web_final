const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123456",
  database: "group_19",
});

app.get("/", (req, res) => {
  res.json({ message: "from api" });
});

const PORT = 8080;

app.get("/Products", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, data) => {
    if (err) {
      res.status(500).send({ err: err });
    } else {
      res.send(data);
    }
  });
});

app.get("/Products/:name", (req, res) => {
  const { name } = req.params;
  const sql = "SELECT * FROM products WHERE name = ?";
  db.query(sql, [name], (err, data) => {
    if (err) {
      res.status(500).send({ err: err });
    } else {
      res.send(data[0]);
    }
  });
});

app.post("/Signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sql = "INSERT INTO member (username, password) VALUES(?, ?)";
  db.query(sql, [username, password], (err, data) => {
    if (err) {
      res.status(500).send({ err: err });
    } else {
      res.send(data);
    }
  });
});

app.post("/Login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sql = "SELECT * FROM member WHERE username=? AND password=?";
  db.query(sql, [username, password], (err, data) => {
    if (err) {
      return res.status(500).send({ error: err });
    }
    if (data.length > 0) {
      return res.json({ message: "成功登入", data });
    } else {
      return res.status(401).send({ message: "帳號或密碼錯誤" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
