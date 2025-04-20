const apiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/user.model");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const ApiResponse = require("../utils/apiResponse");

const registerUser = asyncHandler(async (req, res) => {
    // get the user data from the request body
    // validate the data - not empty
    // check if the user already exists: email, username
    // check for images and avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token from response
    // check for user creation
    // return response

    const {fullname, username, email, password} = req.body
    // console.log("email:", email);

    if(
        [fullname, username,email,password].some((field) => field?.trim() === "")
    ) {
        throw new apiError(400, "All fields are required")
    }

    // validate email and username
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
    if(!emailRegex.test(email)) {
        throw new apiError(400, "Invalid email address")
    }
    if(!usernameRegex.test(username)) {
        throw new apiError(400, "Invalid username")
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser) {
        throw new apiError(409, "User with email or username already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    // const converImageLocalPath = req.files?.coverImage[0]?.path;

    let converImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        converImageLocalPath = req.files.coverImage[0].path;
    }

    if(!avatarLocalPath) {
        throw new apiError(400, "Avatar is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(converImageLocalPath)

    if(!avatar) {
        throw new apiError(500, "Failed to upload avatar")
    }

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase(),
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser) {
        throw new apiError(500, "Something went wrong while creating user")
    }

    return res.status(201).json(
        new ApiResponse(200, "User registered successfully", createdUser)
    )

})

exports.registerUser = registerUser