const commandConfig = {
  clone: {
    attributeKey: "repositoryUrl",
    requiresAttribute: true,
    attributeLabel: "repository url",
    commandPreset: "git clone ",
    priority: 0,
    requiresFlag: false,
  },
  commit: {
    requiresAttribute: false,
    commandPreset: "git commit ",
    priority: 0,
    requiresFlag: true,
    flagLabel: "commit message",
    flagKey: "message",
    flagPreset: "-m",
  },

  // TODO: Add more Commands
};

module.exports = commandConfig;
