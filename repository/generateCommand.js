const commandConfig = require("./commandConfig");

function generateCommandFromAttributeMap(probableCommand, attributeCollector, flagsCollector) {
  const commandConfigDetails = commandConfig[probableCommand];
  const attributeValue = commandConfigDetails.requiresAttribute
    ? attributeCollector.get(commandConfigDetails.attributeKey)
    : "";
  const flagPreset = commandConfigDetails.requiresFlag ? commandConfigDetails.flagPreset : "";
  const requiredFlagValue = commandConfigDetails.requiresFlag
    ? flagsCollector.get(commandConfigDetails.flagKey)
    : "";
  const requiredFlagWithValue = commandConfigDetails.requiresFlag
    ? `${flagPreset} ${requiredFlagValue}`
    : "";
  const commandToExecute = `${commandConfigDetails.commandPreset}${attributeValue}${requiredFlagWithValue}`;
  return commandToExecute;
}

module.exports = { generateCommandFromAttributeMap };
