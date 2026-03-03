import inquirer from 'inquirer';
import fs from "fs";

inquirer
  .prompt([
    {
    type: "number",
    name: "duzina",
    message: "Unesite dužinu: ",
    },
    {
      type: "number",
      name: "visina",
      message: "Unesite visinu: "
    }
  ])
  .then((answers) => {
    let povrsina = answers.duzina * answers.visina;
    const tekst = `Stranica a: ${answers.duzina}, stranica b: ${answers.visina}, Površina: ${povrsina}\n`;
    fs.appendFileSync("PovrsinaPravokutnika.txt", tekst);
    console.log(`Podatci su spremljeni u datoteku, površina je ${povrsina}cm`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });