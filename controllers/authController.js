const jwt = require('jsonwebtoken');

// For demo purposes: hardcoded user
const demoUser = {
  username: 'admin',
  password: 'password', // In real apps, use hashed passwords!
};

// Secret key for signing tokens
const SECRET_KEY = 'your_secret_key';

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (
    username === demoUser.username &&
    password === demoUser.password
  ) {
    // Create JWT token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
};

// Export secret for use in middleware
exports.SECRET_KEY = SECRET_KEY;