const lmSensor = require('./sensors/lm-sensor');

module.exports = {
  create() {
    return lmSensor;
  },
};
