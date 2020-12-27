const express = require("express");
const app = express();

app.use(express.json());

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5233523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const getDate = Date.now();
  const current = new Date(getDate);
  response.send(
    `<div>Phonebook has info for ${persons.length} people</div><br/><div>${current}</div>`
  );
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((note) => note.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

const generateId = () => {
  let id = -1;
  while (id === -1) {
    const randomNumber = Math.round(Math.random() * 10000);
    console.log(randomNumber);
    const idCheck = persons.findIndex((item) => item.id === randomNumber);
    if (idCheck === -1) {
      id = randomNumber;
    }
  }
  return id;
};

app.post("/api/persons", (request, response) => {
  const getData = request.body;

  if (!getData.name || !getData.number) {
    return response.status(400).json({
      error: !getData.name ? "name missing" : "number missing",
    });
  } else if (persons.findIndex((item) => item.name === getData.name) > -1) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const personAdded = {
    id: generateId(),
    name: getData.name,
    number: getData.number,
  };

  persons = persons.concat(personAdded);
  response.json(persons);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
