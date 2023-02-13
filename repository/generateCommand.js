const commandConfig = require("./commandConfig");

function generateCommandFromAttributeMap(probableCommand, attributeCollector, flagsCollector) {
  const commandConfigDetails = commandConfig[probableCommand];
  const attributeValue = commandConfigDetails.requiresAttribute
    ? attributeCollector.get(commandConfigDetails.attributeKey)
    : "";
  const flagPreset = commandConfigDetails.requiresFlag ? commandConfigDetails.flagPreset : "";
  console.log("Flag preset is ", flagPreset);
  const requiredFlagValue = commandConfigDetails.requiresFlag
    ? flagsCollector.get(commandConfigDetails.flagKey)
    : "";
  const requiredFlagWithValue = commandConfigDetails.requiresFlag
    ? `${flagPreset} ${requiredFlagValue}`
    : "";
  const commandToExecute = `${commandConfigDetails.commandPreset}${attributeValue}${requiredFlagWithValue}`;
  console.log("Command to execute ", commandToExecute);
  return commandToExecute;
}

module.exports = { generateCommandFromAttributeMap };
