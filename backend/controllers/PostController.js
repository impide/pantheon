const PostModel = require('../models/PostModel');
const fs = require('fs');

module.exports = {
    getPosts: (req, res) => {
        console.log("Etape 1 : Successful !");
        PostModel.find((err, posts) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: 'Error when getting Posts.'
                })
            }
            console.log("Etape 2 : Successful !");
            return res.status(200).json({
                status: 200,
                result: posts
            })
        })
    },
    addOnePost: (req, res) => {
        console.log("Etape 1 : Successful !");
        // Verified image File
        if (!req.file) {
            return res.status(500).json({
                status: 500,
                message: 'Error when creating Post.'
            })
        }
        console.log("Etape 2 : Successful !");
        // Verified req.body Data
        const post = JSON.parse(req.body.post);
        delete post._id;

        const url = req.protocol + "://" + req.get("host");
        const Post = new PostModel({
            ...post,
            image: url + "/images/" + req.file.filename
        })
        console.log("Etape 3 : Successful !");
        Post.save((err, post) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: 'Error when creating Post.'
                });
            }
            return res.status(201).json({
                status: 201,
                message: 'Post Created'
            })
        })
    },
    deleteOnePost: (req, res) => {
        const id = req.params.id;
        PostModel.findByIdAndRemove(id, (err, Post) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    message: 'Error when getting Post.',
                    error: err
                })
            }
            if (!Post) {
                return res.status(404).json({
                    status: 404,
                    message: 'No such Post'
                })
            }
            const filename = Post.path.split('/images/')[1];
            console.log(Post.path);
            fs.unlink(`backend/images/${filename}`, (err) => {
                if (err) {
                    console.log(err.message);
                }
            });
            return res.status(204).json();
        })
    }
}

