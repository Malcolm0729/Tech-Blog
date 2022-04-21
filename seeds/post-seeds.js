const { Post } = require('../models');

const postData = [
  {
    title: 'Title',
    content: 'Awesome Title',
    date: '04/21/2022',
    user_id: '1'
  },
  {
    title: 'Handlebars',
    content: 'A advanced Html',
    date: '04/21/2022',
    user_id: '1'
  },
  {
    title: 'MVC',
    content: 'This is hard but rewarding',
    date: '04/21/2022',
    user_id: '2'
  },
  {
    title: 'Models',
    content: 'MVC',
    date: '04/21/2022',
    user_id: '3'
  },
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;