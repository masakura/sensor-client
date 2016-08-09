const sensor = require('./libs/sensor').create();
const CronJob = require('cron').CronJob;
const storeFactory = require('./libs/store');

const config = {
  id: process.env.APP_ID,
};

const store = storeFactory.create(config.id);

function push() {
  sensor.receive()
    .then(data => store.push(data));
}

const job = new CronJob('*/5 * * * *', push);
job.start();

