import Eris from 'eris';
import { CronJob } from 'cron';

const startCronJob = () => {
  const job = new CronJob('0 */15 * * * *', async () => {
    const bot = Eris(`${process.env.TOKEN}`);
    bot.connect();
  });

  job.start();
};

export default startCronJob;
