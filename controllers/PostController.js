import * as model from "../models/models.js" ;

const {User,Post} = model;

export const createPost = async (req, res) => {
    try {
        const {text, author, picture} = req.body;
        const post = await Post.create({text, author, picture, userId:req.userId});
        
        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Unable to create post'
        });
        
    }
}

export const getAllPosts = async (req,res) => {
    try {
    const { page } = req.query;
    const limit = 20;
    const offset = (page - 1) * limit;

    const totalCount = await Post.count();
    const totalPages = Math.ceil(totalCount / limit);

    const posts = await Post.findAll({
    offset,
    limit,
    order: [['createdAt']]
    });

    res.json({posts, totalPages});
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: 'Unable to get posts' 
        });
    }
}

export const getOnePost = async (req,res) => {
    try {
        const id = req.params.id;
        const post = await Post.findOne({where: {id}});

        if (!post){
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: 'Unable to get posts' 
        });
    }
}

export const deletePost = async (req,res) => {
    try{
    const id = req.params.id;
    const uId = req.userId;

    const post = await Post.findOne({where: {id}});

    if (uId != post.userId){
        return res.status(400).json({
            message:"Unallowed its"
        });
    }

    if (!post){
        return res.status(404).json({
            message:"Post not found"
        });
    }

    await post.destroy({where: {id}});

    res.status(200).json({
        message:"post sucsesfully has been deleted"
    })
    }catch(error){
        console.error(error);
        res.status(500).json({ 
            message: 'Unable to delete posts' 
        });
    }

}

export const updatePost = async (req,res) => {
    try {
        const id = req.params.id;
        const uId = req.userId;
        const {text, author, picture} = req.body;
        const post = await Post.findOne({where: {id}});

        if (uId != post.userId){
            return res.status(400).json({
                message:"Unallowed"
            });
        }

        await Post.update(
            {text,author,picture},
            {where: {id}}
        )

        
        console.log(post.userId)
        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: 'Unable to get posts' 
        });
    }
}