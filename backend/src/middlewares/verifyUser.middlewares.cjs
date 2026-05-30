const jwt = require('jsonwebtoken');
const { User } = require('../models/user.models.cjs');

const verifyAdmin = async(req,res,next) => {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    if(!token) {
        return res.status(400)
        .json({
            message: "Session expired. Please login again."
        })
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decodedToken.id).select("-password");
    if(!user) {
        return res.status(400)
        .json({
            message: "User not found."
        })
    }

    if(user.email != process.env.ADMIN_EMAIL) {
        return res.status(400)
        .json({
            message: "Unauthorized request."
        })
    }

    req.user = user;
    next();
}

module.exports = verifyAdmin;