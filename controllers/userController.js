const registerUser =  (req,res) => {
    if (!req.body.email){
        res.status(400);
        throw new Error("Please add an email");
    }
    res.send("Register User")
};

// const registerUser = async(req,res)=>{
//     res.send("Register User");
// };
// const User = require("../models/userModel");
// const registerUser = async (req,res) => {
//     try 
//     {
//         const {name,email,password}=req.body

//         if((!name|| !email || !password)){
//             res.status(400);
//             throw new Error
//         }
        
//     } catch (error) {
//         console.log("Please fill in all required fields");
//     }
//     try 
//     {
//         if(password.length<6)
//          {
//             res.status(400);
//             throw new Error            
//          }
        
//     } catch (error) {
//         console.log("Password must be upto 6 characters");
//     }
//     try {
//         const userExists = await User.findOne({email})
//      if(userExists){
//          res.status(400)
//          throw new Error
//      }
        
//     } catch (error) {
//         console.log("Already registered email");
        
//     }
//     //Create new user
//     const user = await User.create({
//         name,
//         email,
//         password
//     })

//     if(user){
//         const {_id,name,email,photo,phone,bio}=user
//         res.status(201).json({
//             _id,name,email,photo,phone,bio
//         })
//     }
//     else{
//         try {
//             res.status(400)
//             throw new Error
//         } catch (error) {
//             console.log("Invalied user data");
//         }
        
//     }    
   


    
    
// };


module.exports = {
    registerUser,
};
// const registerUser =  (req,res) => {
//     if (!req.body.email){
//         res.status(400);
//         throw new Error("Please add an email");
//     }
//     res.send("Register User")
// };
// const asyncHandler = require("express-async-handler ");
// const User = require("../models/userModel");
// const registerUser = asyncHandler( async(req,res)=>{
//     const {name,email,password}=req.body

//     //Validaation
//     if((!name|| !email || !password))
//     {
//         res.status(400)
//         throw new Error("Please fill in all required fields")
//     }
//     if(password.length<6)
//     {
//         res.status(400)
//         throw new Error("Password must be upto 6 characters")
//     }

//     //Check if user email already exists 
//     const userExists = await User.findOne({email})
//     if(userExists){
//         res.status(400)
//         throw new Error("Registered email")
//     }

    // //Create new user
    // const user = await User.create({
    //     name,
    //     email,
    //     password
    // })

    // if(user){
    //     const {_id,name,email,phone,bio}=user
    //     res.status(201).json({
    //         _id,name,email,phone,bio
    //     })
    // }
    // else{
    //     res.status(400)
    //     throw new Error("Invalied user data")
    // }


// });
//     
//     
//     
//     
//     

//     }

//     //Create new user
//     const user = await User.create({
//         name,
//         email,
//         password
//     })

//     if(user){
//         const {_id,name,email,phone,bio}=user
//         res.status(201).json({
//             _id,name,email,phone,bio
//         })
//     }
//     else{
//         res.status(400)
//         throw new Error("Invalied user data")
//     }
// });

