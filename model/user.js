import mongoose from "mongoose";

let userSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    },

    password:{
        type:String,
        required:true,
        select:false,
    },

    followers:{
        type:Array,
    },  

    following:{
        type:Array,
    },

    created_at:{
        type: String,
    }
},{
    toJSON : {virtuals:true},
    toObject: {virtuals:true},
})

userSchema.pre('save', async function (next) {
    let date_info = new Date;
    let date_into = date_info.getDate() + '/' + (date_info.getMonth()+1) + '/' +  date_info.getFullYear()
    this.created_at =  date_into
    next();
})

userSchema.virtual('posts',{
    ref : 'posts',
    local_id : '_id',
    foreign_id : 'UserId',
    justOne:false,
})