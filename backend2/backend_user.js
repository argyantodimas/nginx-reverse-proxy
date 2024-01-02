const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

app.get("/user/users", (req, res) => {
  res.json(users);
});

app.get("/user/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

app.post("/user/users", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(user);
  res.json(user);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
