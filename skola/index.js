import inquirer from 'inquirer';
import fs from "fs";

inquirer
  .prompt([
    {
    type: "input",
    name: "ime",
    message: "Unesi ime: ",
    },
    {
      type: "input",
      name: "ocijena",
      message: "Unesite ocijenu"
    }
  ])
  .then((answers) => {
    const tekst = `Ime: ${answers.ime}, ocjena: ${answers.ocijena}\n`;
    fs.appendFileSync("ucenici.txt", tekst);
    console.log("Podatci su spremljeni u datoteku");
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });