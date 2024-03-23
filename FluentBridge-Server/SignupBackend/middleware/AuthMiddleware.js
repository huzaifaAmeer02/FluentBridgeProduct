const jwt = require('jsonwebtoken');
const {response} = require("express");

function verifyToken(req,res,next){
    const authorizeHeaders = req.headers.authorization;
    if (!authorizeHeaders){
        return res.status(401).json({error:'no token provide in here'})
    }

    /*token come with "Bearer" text we need only token*/
    if (authorizeHeaders.startsWith('Bearer  ')){
        return res.status(401).json({error:'invalid token format'})
    }

    const token = authorizeHeaders.slice(7);

    if (!token){
        return res.status(401).json({error:'invalid token '})
    }

    try{
        const decodedData = jwt.verify(token,process.env.SECRET_KEY);
        console.log(decodedData)
        next()
    }catch (error){
        return res.status(401).json({error:'invalid token '})
    }
}

module.exports = verifyToken;

