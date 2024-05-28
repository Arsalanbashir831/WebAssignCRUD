

const jwt = require('jsonwebtoken');

// This function verifies the JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']; // Assuming the token is passed in the Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, 'arsalanjwt', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded; // Set the decoded user object on the request object
    next();
  });
};

module.exports = verifyToken;
