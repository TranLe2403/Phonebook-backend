const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

const morgan = require("morgan");
const Person = require("./models/person");

const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

app.use(express.static("build"));

morgan.token("body", function stringifyBodyData(req) {
  return JSON.stringify(req.body);
});

app.use(morgan("tiny"));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.get("/api/persons", (request, response) => {
  Person.find({}).then((result) => {
    response.json(result.map((item) => item.toJSON()));
  });
});

app.get("/info", (request, response) => {
  const getDate = Date.now();
  const current = new Date(getDate);
  Person.find({}).then((result) => {
    response.send(
      `<div>Phonebook has info for ${result.length} people</div><br/><div>${current}</div>`
    );
  });
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((item) => {
      if (item) {
        response.json(item.toJSON());
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;

  const person = {
    number: body.number,
  };

  Person.findByIdAndUpdate(request.params.id, person, { new: body.number })
    .then((updatedNote) => {
      response.json(updatedNote.toJSON());
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    // eslint-disable-next-line no-unused-vars
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response, next) => {
  const body = request.body;

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person
    .save()
    .then((personAdded) => {
      response.json(personAdded.toJSON());
    })
    .catch((error) => {
      next(error);
    });
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
