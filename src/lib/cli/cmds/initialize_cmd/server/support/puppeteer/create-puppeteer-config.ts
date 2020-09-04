export const createPuppeteerConfig = () => {
  return (`module.exports = {
  server: [
    {
      command: 'PORT=4444 NODE_ENV=test TS_NODE_PROJECT=./tsconfig.json yarn run ts-node -r tsconfig-paths/register src/server.ts',
      launchTimeout: 60000,
      port: 4444,
      usedPortAction: 'ask',
      debug: true,
      waitOnScheme: {
        interval: 2000
      }
    },
    {
      command: 'REACT_APP_SERVER_HOST=http://localhost:4444 REACT_APP_PUPPETEER_TEST=true PORT=3333 yarn --cwd ../client start',
      launchTimeout: 60000,
      port: 3333,
      usedPortAction: 'ask',
      debug: true,
      waitOnScheme: {
        interval: 2000
      }
    }
  ],
  launch: {
    headless: process.env.HEADLESS == 'false' ? false : true,
    args: ['--disable-dev-shm-usage'],
    slowMo: parseInt(process.env.SLOWMO) || 50,
  },
  browser: 'chromium',
  browserContext: 'incognito'
}
`)
}