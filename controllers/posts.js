import User from "../model/user.js"
import Post from "../model/post.js"



// This will give us all post from DB
const getAllPosts = async (req,res) =>{

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


// retrieves followers post of the users.
const followersPost = async (req,res)=>{

try {   const get_user = await User.findOne(req.user.id);

    const posts = await Post.find({UserId : get_user.following}).populate('posted_by');

    return res.status(200).json({
        data:posts,
        success:true
    })}
    catch(err){
        console.log(err)
        return res.status(401).json({
            success:false
        })
    }
}

// get asingle post by ID

const postbyID = async(req,res) => {
 try
 {   const postId = req.params.id;

    const post = await Post.find(postId)
    if(!post){
        return res.status(400).json({
         
            success:false
        })
    }
    return res.status(200).json({
        data:post,
        success:true
    })}
    catch(err){
        console.log(err)
        return res.status(401).json({
            success:false
        })
    }
}

// add  new post

const addPost = async(req,res) =>{
   try{ const userid =  req.user.id;

    const newpost = new Post.create({
        UserID : userid,
        postImage: req.body.imageUrl,
        caption:req.body.caption
 })

 return res.status(200).json({
     message:"Post uploaded",
    success:true
})}
catch(err){
    console.log(err)
    return res.status(401).json({
        success:false
    })
}
}

// edit a post with a given postid

const editPost = async (req,res)=>{
   try{ const postId =  req.params.id;
    const post = await Post.find(postId)

    if(post.UserId != req.user.id){
        return res.status(400).json({
            message: "Access Denied",
            success:false
        })
    }else{
        await Post.update({
            UserId:req.user.id,
            caption:req.body.caption,
            postImage:req.body.imageUrl,
        })
    }
    return res.status(200).json({
        message:"Post edited",
       success:true
   })
    }
    catch(err){
        console.log(err)
        return res.status(401).json({
            success:false
        })
    }

}


export default {getAllPosts,followersPost,postbyID, addPost, editPost}

