const config = require('./jest.config')

delete config.testEnvironment // Remove 'node' from the original Jest config
config.preset = 'jest-puppeteer'
config.testRegex = 'features/.*\.(test|steps)\.ts?$', // Overriding testRegex option to only pickup features

module.exports = config
