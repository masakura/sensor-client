const Milkcocoa = require('milkcocoa');

const config = {
  host: process.env.MILKCOCOA_HOST,
};


class MilkcocoaStore {
  constructor(id) {
    const milkcocoa = new Milkcocoa(config.host);
    this.dataStore = milkcocoa.dataStore(id);
  }

  push(data) {
    this.dataStore.push(data);
  }

  static create(id) {
    return new MilkcocoaStore(id);
  }
}

module.exports = MilkcocoaStore;
