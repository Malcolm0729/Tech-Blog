const { User } = require('../models');

const userData = [
  {
    name: 'Obito435',
    password: 'madera231',
  },
  {
    name: 'ItachiUchiha23',
    password: 'Sasuke345',
  },
  {
    name: 'Naruto',
    password: 'password234',
  },
  {
    name: 'Kakashi',
    password: 'Neji098',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;