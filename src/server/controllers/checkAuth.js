module.exports = ((req, res, next) => {
  const { signedCookies, url, method } = req;

  const isCookieValid = signedCookies.session && signedCookies.session.loggedIn
    && signedCookies.session.secretMessage === 'this cookie is now safely signed';


  if (method === 'POST' && (url === '/signin' || url === '/signup')) return next();
  if (url === '/signout' && method === 'POST') return res.clearCookie('session').send({ message: 'cookie was deleted successfully' });
  if (!isCookieValid) return res.json({ message: 'Unauthorized Action' });
  next();
});
