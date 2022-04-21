const { Comment } = require('../models');

const commentData = [
    {
        content: 'Comments are better',
        date: '04/21/2022',
        user_id: '2',
        post_id: '1',
    },
    {
        content: 'Handlebars are old school',
        date: '04/21/2022',
        user_id: '1',
        post_id: '2',
    },
    {
        content: 'React is the best',
        date: '04/21/2022',
        user_id: '3',
        post_id: '2',
    },
    {
        content: 'Titles tell us what it is',
        date: '04/21/2022',
        user_id: '3',
        post_id: '1',
    },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;