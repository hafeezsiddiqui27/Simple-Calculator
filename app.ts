#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//displayoing welcome message
console.log(chalk.bold.yellowBright(`=`.repeat(70)));
console.log(
  chalk.bold.blueBright(
    `\n <<<<<<======= Welcome To Hafeez Siddiqui - Simple Calculator  ========>>>>>>\n`
  )
);
console.log(chalk.bold.yellowBright(`=`.repeat(70)));

//asking questions from user through inquirer

let answers = await inquirer.prompt([
  {
    message: chalk.red`enter first number`,
    type: `number`,
    name: `firstnumber`,
  },
  {
    message: chalk.red`enter second number`,
    type: `number`,
    name: `secondnumber`,
  },
  {
    message: chalk.bold.magentaBright`select One Operator to Perform Operation`,
    type: `list`,
    name: `operator`,
    choices: [`Addition`, `Subtraction`, `Multiplication`, `Division`],
  },
]);

//conditional statements if-else
if (answers.operator === `Addition`) {
  console.log(
    chalk.bold.greenBright(
      `your answer is `,
      answers.firstnumber + answers.secondnumber
    )
  );
} else if (answers.operator === `Subtraction`) {
  console.log(
    chalk.bold.greenBright(
      `your answer is `,
      answers.firstnumber - answers.secondnumber
    )
  );
} else if (answers.operator === `Multiplication`) {
  console.log(
    chalk.bold.greenBright(
      `your answer is `,
      answers.firstnumber * answers.secondnumber
    )
  );
} else if (answers.operator === `Division`) {
  console.log(
    chalk.bold.greenBright(
      `your answer is `,
      answers.firstnumber / answers.secondnumber
    )
  );
} else {
  console.log(chalk.bold.redBright(`Invalid Input`));
}
