const mongoose=require("mongoose");

const bcrpt=require("bcryptjs");

const UserSchema=new mongoose.Schema(
    {
        fullname:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        profileImageUrl:{type:String,default:null},
    },
    {
        timestamps:true
    }
);

UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bycrypt.hash(this.password,10);
    next();
});

UserSchema.methods.comparePassword=async function(condidatePassword){
    return await bycrypt.compare(candidatePassword,this.password);
}

module.exports=mongoose.model("User",UserSchema);