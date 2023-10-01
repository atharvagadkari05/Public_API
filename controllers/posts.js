import User from "../model/user.js"
import Post from "../model/post.js"

const getAllPosts = async () =>{

   try{ const allPosts = await Post.find();
    return res.status(200).json({
        allPosts,
        success:true
    })
}
catch(err){
    console.log(err)
    res.status(400).json({
        message:'Cannot fetch posts',
        success:false
    })
}
}
