const express = require('express');

const router = express.Router();

//import schema
const Post = require('./posts-model');

//retrive all data from collection
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

//retrive specific data from collection
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

// insert into collection
router.post('/', (req, res) => {
    console.log(req.body);
    const post = new Post({
        text: req.body.text,
        datetime: req.body.datetime,
        upvotes: req.body.upvotes
    });
    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });
});

//update data in collection
router.put('/:postId', async(req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, {
            $set: {
                upvotes: req.body.upvotes
            }
        });
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:postId', async(req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;