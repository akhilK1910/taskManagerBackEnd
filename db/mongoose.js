const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://127.0.0.0:27017/TaskManager',{useNewUrlParser:true}).then(()=>{
    console.log("Connected to MongoDB successfully");
}).catch((e)=>{
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});
module.exports={
    mongoose
};