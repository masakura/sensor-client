const MilkcocoaStore = require('./stores/milkcocoa-store');

module.exports = {
  create(id) {
    return MilkcocoaStore.create(id);
  },
};
