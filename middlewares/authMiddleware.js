import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    // console.log(req.params);
    const token = req.cookies.token;
    if (token) {
        // Verifying the JWT token againt token coming from cookie
        jwt.verify(token, req.params.username, (err, decoded) => {
            if(err){
                res.status(400).json({"error": "Invalid token"});
            } else {
                console.log(decoded);
                next();
            }
        });
    } else {
        res.status(401).json({"error": "Token is required"})
    }
}

export default authMiddleware;