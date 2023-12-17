const { Router } = require('express');
const UserModel = require('../Model/UserModel');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken')
const blacklist=require('../Model/BlackList');
const authentication = require('../Middleware/authentication');

const UserRouter = Router();

UserRouter.post('/signup', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    // const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // if (!passRegex.test(password)) { // Use .test() method to match the password against the regex
    //   return res.status(400).json({ msg: "Please select a new password with at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character." });
    // }

    const validatePassword = (password) => {
      const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
      if (!passRegex.test(password)) {
        return false;
      }
      return true;
    };
    
    // Usage example:
    
    if (!validatePassword(password)) {
      return res.status(400).json({
        msg: "Please select a new password with at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character."
      });
    }
    

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "User already registered" });
    } else {
      const passwordHash = await bcrypt.hash(password, 8);
      const newUser = new UserModel({ ...req.body, password: passwordHash });
      await newUser.save(); // Use await here as it's an asynchronous operation

      res.status(200).json({ data: newUser, msg: "New user added successfully!!" });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});


UserRouter.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const userExist = await UserModel.findOne({ email });
      if (userExist) {
          const isPasswordMatch = await bcrypt.compare(password, userExist.password);
          if (isPasswordMatch) {
            const token = jwt.sign(
              {
                userID: userExist._id,
                email: userExist.email
              },
              process.env.SECRET_KEY,
              { expiresIn: '1h' } // Set token expiration time if needed
            );
            return res.status(200).json({ token: token, msg: "Login successful" });
          } else {
            return res.status(401).json({ msg: "Invalid email or password" });
          }
        }else{
            return res.status(400).json({ msg: "Invalid email or password" });  
        }
    } catch (error) {
      res.status(500).json({ msg: "Check your connection" });
    }
  });

  UserRouter.get('/logout',(req,res)=>{
    try {
        const token=req.headers.authorization.split(' ')
        if(token[1]){

            blacklist.push(token)
            res.status(200).json({msg:"logout successfully!!"})
        }else{
            res.send({msg:"check your credentials"})
        }
    } catch (error) {
        res.send({msg:error})
    }
  })

  UserRouter.get('/home',authentication,(req,res)=>{
    res.send('Home page')
  })

  

module.exports = UserRouter;
