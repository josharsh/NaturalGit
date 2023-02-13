const classifier = require("../repository/commandClassifier");
const readline = require("readline");
const commandConfig = require("../repository/commandConfig");
const { exec } = require("child_process");
const { generateCommandFromAttributeMap } = require("../repository/generateCommand");

async function start() {
  let ans = await prompt("Tell me what to do using Git ");
  let probableCommand = classifier.classify(ans);
  let commandConfigDetails = commandConfig[probableCommand];
  let attributeCollector = new Map();
  let flagsCollector = new Map();

  if (commandConfigDetails.requiresAttribute) {
    let attributeLabel = commandConfigDetails.attributeLabel;
    let attributeData = await prompt(`Please provide the ${attributeLabel} `);
    attributeCollector.set(commandConfigDetails.attributeKey, attributeData);
  }

  if (commandConfigDetails.requiresFlag) {
    let flagLabel = commandConfigDetails.flagLabel;
    let flagData = await prompt(`Please provide the ${flagLabel} `);
    flagsCollector.set(commandConfigDetails.flagKey, flagData);
  }
  let command = generateCommandFromAttributeMap(
    probableCommand,
    attributeCollector,
    flagsCollector
  );
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    } else {
      console.log(stdout);
    }
  });

  function prompt(query) {
    const interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) =>
      interface.question(query, (ans) => {
        interface.close();
        resolve(ans);
      })
    );
  }
}

start();
