const { Router } = require('express');
const { check } = require('express-validator');
const Blog = require("../models/Blog/Blog");
const router = Router();

// GET /api/blog/get:id
router.get('/get/:id', [],
    async(req, res) => {
        try {

            const blog = await Blog.findById(req.params.id);

            return res.status(200).json({ message: 'Post is loaded', blog });

        } catch (error) {
            return res.status(500).json({ message: 'Internal server Error' });
        }
    });

// GET /api/blog/get
router.get('/get', async(req, res) => {

    // to add categories
    try {

        const perPage = 10;
        const page = req.query.page;
        console.log(req.query.page);

        let blogs;

        blogs = await Blog.find()
            .limit(perPage);

        if (!blogs) {
            res.status(400).json({ message: 'Blogs records not found' });
        }

        return res.status(200).json({ message: 'Posts are loaded', blogs });

    } catch (error) {
        return res.status(500).json({ message: 'Internal server Error' });
    }
});

// POST /api/blog/post
router.post(
    '/post', [],
    async(req, res) => {

        const newBlog = new Blog(req.body);

        try {

            const savedBlog = await newBlog.save();

            return res.status(200).json({ message: 'Your post has been saved', savedBlog });

        } catch (error) {
            return res.status(500).json({ message: 'Internal server Error' });
        }

    });

// UPDATE /api/blog/put
router.put(
    '/put/:id', [
        check('id', 'Empty post Id Name is requierd').notEmpty()
    ],
    async(req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(500).json({
                errors: errors.array(),
                message: 'Invalid or empty Id'
            });
        }

        const blog = {};

        try {

            blog = await Blog.findById(req.query.id);

        } catch (error) {
            return res.status(500).json({ message: 'Internal server Error' });
        }

        if (blog.username !== req.body.username) {
            return res.status(401).json({ message: 'You are unable to edit other persons post' });
        }

        try {

            const updatedBlog = await Blog.findByIdAndUpdate(
                req.params.id, {
                    $set: req.body,
                }, { new: true }
            );

            return res.status(200).json({ message: 'Post has been updated', updatedBlog });

        } catch (error) {
            return res.status(500).json({ message: 'Internal server Error' });
        }
    });

module.exports = router;