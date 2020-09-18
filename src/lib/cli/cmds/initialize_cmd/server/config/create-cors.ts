export const createCors = () => {
  return `import cors from 'cors';

// Configure Cors
const corsOptions = {
  origin: process.env.ORIGINS,
  methods: ['OPTIONS', 'GET', 'PUT', 'POST'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

export default cors(corsOptions)`;
};
