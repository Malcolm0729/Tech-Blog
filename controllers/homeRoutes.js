const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

// takes user to the homepage
router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
        }
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts', withAuth, async (req, res) => {
  try {
  const postData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  // console.log(posts)
  res.render('create-post', { 
    posts, 
    logged_in: req.session.logged_in 
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/posts/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const post = postData.get({ plain: true });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(post)
    res.render('edit-post', {
      post,
      comments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id/comments', async (req, res) => {
  try {
   
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    
    const post = postData.get({ plain: true });
    const comments = commentData.map((comment) => comment.get({ plain: true }));
   
    res.render('comments', {
      post,
      comments,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/profile', withAuth, async (req, res) => {
  try {
   
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', async (req, res) => {
 
  const userData = await User.findAll()

  console.log(userData)
  
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get("/register", (req, res) => {
  if (req.session.logged_in) {
      res.redirect("/");
      return;
  }
  res.render("register");
});


module.exports = router;