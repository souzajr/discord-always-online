import express from 'express';
import startCronJob from './cronJob';

startCronJob();

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log('\x1b[41m\x1b[37m', `Server running on port ${port}`, '\x1b[0m')
);
