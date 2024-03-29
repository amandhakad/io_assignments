const jwt = require('jsonwebtoken');
const AuthGuard = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(401)
    req.user = user
  console.log("tr: 1", req.user);
    next();
  })
}

module.exports = AuthGuard;