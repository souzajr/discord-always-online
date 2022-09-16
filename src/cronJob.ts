import Eris from 'eris';
import { CronJob } from 'cron';

const startCronJob = () => {
  const job = new CronJob('0 */15 * * * *', async () => {
    const bot = Eris(`${process.env.TOKEN}`);
    bot.connect();
  });

  job.start();

  // eslint-disable-next-line
  console.log(job.nextDates(5).toLocaleString({ timeStyle: 'long' }));
};

export default startCronJob;
