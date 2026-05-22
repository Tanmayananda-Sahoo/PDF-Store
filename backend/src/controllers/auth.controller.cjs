const {User} = require('../models/user.models.cjs');
const { hashPassword } = require('../utils/hashPassword.utils.cjs');

const register = async(req,res) => {
    const {name, email, mobileNo, password} = req.body;

    if([name, email, password].some((field) => field.trim() == "")) {
        return res.status(400)
        .json({
            message: "All the fields are required."
        })
    }

    if(name.length > 20) {
        return res.status(400)
        .json({
            message: "The name should be within 20 characters."
        })
    }
    
    if(/^[A-Za-z ]$/.test(name)) {
        return res.status(400)
        .json({
            message: "Name should be contain letters and should have a first and last name."
        })
    }

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return res.status(400)
        .json({
            message: "Email is not in required format."
        })
    }
    if(!/^\d{10}$/.test(mobileNo)) {
        return res.status(400)
        .json({
            message: "Phone number should be of 10 digits and should contain only numbers."
        })
    }

    const existingUser = await User.findOne({
        email
    })

    if(existingUser) {
        return res.status(400)
        .json({
            message: "User already exists. Please Login."
        })
    }

    const hashedPassword = await hashPassword(password);
    const createdUser = await User.create({
        name,
        email,
        password: hashedPassword,
        mobileNo
    })

    const userToBeViewed = await User.findById(createdUser._id).select("-password");

    return res.status(200)
    .json({
        message: "User created successfully.",
        user: userToBeViewed
    })
}

//Refresh and Access Token to be added.
const login = async(req,res) => {

    const { email, password } = req.body;

    if([email,password].some(field => field.trim() == "")) {
        return res.status(400)
        .json({
            message: "Email and password are required fields."
        })
    }

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return res.status(400)
        .json({
            message: "Email is not in required format."
        })
    }

    const userFound = await User.findOne({
        email
    })

    if(!userFound) {
        return res.status(400)
        .json({
            message: "Invalid Credentials."
        })
    }

    const isPasswordCorrect = await userFound.isPasswordCorrect(password);

    if(!isPasswordCorrect) {
        return res.status(400)
        .json({
            message: "Invalid Credentials."
        })
    }

    const userToBeViewed = await User.findById(userFound._id).select("-password");

    const refreshToken = await userFound.generateRefreshToken();
    const accessToken = await userFound.generateAccessToken();

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: "true",
        maxAge: 7*24*60*60*1000
    })

    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        sameSite: "strict",
        secure: "true",
        maxAge: 5*60*1000
    })

    return res.status(200)
    .json({
        message: "User logged in successfully.",
        user: userToBeViewed
    })
    
}

const logout = async(req,res) => {
    res.clearCookie("accessToken")
    .clearCookie("refreshToken")
    .status(200)
    .json({
        message: "User logged out successfully."
    })
}

module.exports = {
    register,
    login,
    logout
}