module.exports = ((req, res, next) => {
  const { signedCookies, url, method } = req;

  const validateCookies = () => (signedCookies.session.loggedIn === true
    && signedCookies.session.secretMessage === 'this cookie is now safely signed');

  if (signedCookies.session && validateCookies() === true) {
    if (url === '/signin' || url === '/signup') res.send({ message: 'redirect to home page' });
    else if (url === '/signout' && method === 'POST') res.clearCookie('session').send({ message: 'cookie was deleted successfully' });
    else next();
  } else if (signedCookies.session && validateCookies() === false) res.send({ message: 'Unauthorized Action' });
  else if (!signedCookies.session) {
    if (url === '/signin' || url === '/signup') next();
    else res.send({ message: 'redirect to signin page' });
  }
});
