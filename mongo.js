const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://phonebook:${password}@cluster0.ud05y.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Phonebook = mongoose.model("Phonebook", phonebookSchema);

const phonebook = new Phonebook({
  name: process.argv[3],
  number: process.argv[4],
});

process.argv[3]
  ? phonebook.save().then((result) => {
      console.log(`added ${result.name} number ${result.number} to phonebook`);
      mongoose.connection.close();
    })
  : Phonebook.find({}).then((result) => {
      console.log("phonebook: ");
      result.forEach((info) => {
        console.log(`${info.name}: ${info.number}`);
      });
      mongoose.connection.close();
    });

// phonebook.find({}).then(result => {
//     console.log(result);
//   mongoose.connection.close();

// })
