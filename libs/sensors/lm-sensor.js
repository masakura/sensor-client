/** @namespace _.object */
/** @namespace _.chain */

const exec = require('child_process').exec;
const _ = require('underscore');

function isTemperatureLine() {
  return line => line.match(/crit /);
}

function getTemperature() {
  return line => {
    const matches = line.match(/^(.*):\s+(\+|)(\d+\.\d+)/);
    return [matches[1], Number(matches[3])];
  };
}

const lmSensor = {
  receive() {
    return this.execSensors()
      .then(raw => this.convert(raw.stdout));
  },
  execSensors() {
    return new Promise((resolve, reject) => {
      exec('sensors', (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve({ stdout, stderr });
        }
      });
    });
  },
  convert(source) {
    return _.chain(source.split('\n'))
      .filter(isTemperatureLine())
      .map(getTemperature())
      .object()
      .value();
  },
};

module.exports = lmSensor;
