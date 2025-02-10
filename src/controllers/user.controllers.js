import mongoose from "mongoose";
import { ApiResponse } from "../utils/Apiresponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const register = asyncHandler(async(req, res) => {
    return res
    .status(200)
    .json(new ApiResponse(
        200,
        {},
        "lifeServer Blood Donation App Run successfully"
    ))
  
    
})

export { register };