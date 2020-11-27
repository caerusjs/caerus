module.exports = {
  server: {
    command: 'NODE_ENV=test yarn dev --port 4444',
    launchTimeout: 60000,
    port: 4444,
    usedPortAction: 'ask',
    debug: true,
    waitOnScheme: {
      interval: 2000,
    },
  },
  launch: {
    headless: true,
    args: ['--disable-dev-shm-usage'],
    slowMo: parseInt(process.env.SLOWMO) || 50,
  },
  browser: 'chromium',
  browserContext: 'incognito',
};
