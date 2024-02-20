const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('User', 'Users');

  await User.create(userSeeds);

  console.log('all done!');
  process.exit(0);
});
