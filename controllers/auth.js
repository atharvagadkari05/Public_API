import jwt from "jsonwebtoken";
import User from "../model/user.js";
import bcrypt from "bcryptjs";


const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({
        msg: "please fill the required fields",
        success: false,
      });
    }

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        msg: "User already exists",
        success: false,
      });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    console.log(user);

    jwt.sign(
      { id: user._id },
      "sdfsnisdnjsnfjsdnfjsdnfjk",
      {
        expiresIn: 36000,
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token,
        });
      }
    );
  } catch (err) {
    res.status(400).json({
      message: err,
      success: "failure",
    });
  }
};


const login = async (req,res) =>{
try{

    const {email, password} = req.body;
    
    if(!email || !password ) {
        return  res.status(400).json({
            message:'Please fill the credentials',
            success:'false'
        })
    }

    let user = await User.findOne({email}).select('+password');
    if(!user){
        return res.status(400).json({
            message:'Cannot find the user with the email',
            success:'false'
        })
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({
            message:'Invalid Credentials',
            success:'false'
        })
    }

    jwt.sign(
        { id: user._id },
        "sdfsnisdnjsnfjsdnfjsdnfjk",
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );

}catch(err){
    console.log(err)
    res.status(400).json({
        success:'false'
    })
}
}

const user = async (req,res) =>{
try{
    const user = await User.findOne(req.user.id).populate('posts');

    res.status(200).json({
        user,
        status:'success'
    })
}
catch(err){
    console.log(err)
    return res.status(400).json({
        message:'Cant fetch the users',
        status:'false'
    })
}
}

export default { register, login, user };
