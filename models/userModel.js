const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require:[true,"please add a name"]
    },
    email:{
        type: String,
        required:[true,"Please add a email"],
        unique: true,
        trim: true,
        match:[/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Please enter a valied email"]
    },
    password:{
        type: String,
        required:[true,"Please add a password"],
        minlength:[6,"Password must be up to 6 chararacters"],
        maxlength:[23,"Password must be below 24 chararacters"],
    },
    photo:{
        type: String,
        required:[true,"Please add a photo"],
        default: "https://i.ibb.co/4pDNDk1/avatar.png"
    },
    phone:{
        type: String,
        default: "+91"
    },
    bio:{
        type: String,
        maxlength:[250,"Bio must be below 251 chararacters"],
        default: "bio"
    }

},{
    timeStamps: true,
})

const User = mongoose.model("User",userSchema)
module.exports = User