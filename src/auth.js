function authenticate(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ success: false, message: 'Missing Authorization Header' });
  }
  // Simulasi otentikasi sederhana
  req.user = { id: 1, name: 'Student' };
  next();
}

module.exports = { authenticate };