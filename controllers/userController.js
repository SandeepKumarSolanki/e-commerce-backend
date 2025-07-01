import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}



const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //checking user exits or not
        const userExits = await userModel.findOne({ email });

        if (userExits) {
            return res.json({ success: false, message: "User already exits" });
        }

        //validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        //hashing password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //checking user exits or not
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User does not exits" });
        }

        //checking password is correct or not
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (isPasswordCorrect) {
            const token = createToken(user._id);
            return res.json({ success: true, token })
        } else {
            return res.json({ success: false, message: "Invalid credentials" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Invalid credentials" })
    }
}

const adminLogin = async (req, res) => {
    try {
        const {email , password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password , process.env.JWT_SECRET);
            res.json({success : true , token})
        }else{
            res.json({ success : false, message : "Invalid credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({ success : false, message : error.message})
    }
}

export { loginUser, registerUser, adminLogin }