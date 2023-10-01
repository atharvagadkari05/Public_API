import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    postImage: {
        type:String
    },
    caption:{
        type:String
    },
    likes:{
        type:Array
    },
    createdAt:{
        type:String
    }
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
    
}
)

postSchema.pre('save', async function (next) {
    let date_info = new Date
    let date_into = date_info.getDate() + '/' + (date_info.getMonth()+1) + '/' +  date_info.getFullYear()
    this.created_at = await date_into
})

postSchema.virtual('posted_by',{
    ref: 'user',
    localField: 'UserId',
    foreignField: '_id',
    justOne: true
})

export default mongoose.model('posts',postSchema);