module.exports = ((req, res, next) => {
  const { signedCookies, url, method } = req;
  if (url === '/signin') {
    if (signedCookies.session) {
      if (signedCookies.session.loggedIn === true) {
        if (signedCookies.session.secretMessage === 'this cookie is now safely signed') res.send({ message: 'redirect to homepage' });
        if (signedCookies.session.loggedIn !== true
          || signedCookies.session.secretMessage !== 'this cookie is now safely signed') res.send({ message: 'Unauthorized Action' });
      }
    } else next();
  } else if (url === '/signup') {
    if (signedCookies.session) {
      if (signedCookies.session.loggedIn === true
        && signedCookies.session.secretMessage === 'this cookie is now safely signed') {
        res.clearCookie('session', { httpOnly: true, signed: true });
        res.send({ message: 'redirect to homepage' });
      }
      if (signedCookies.session.loggedIn !== true
        || signedCookies.session.secretMessage !== 'this cookie is now safely signed') {
        res.clearCookie('session', { httpOnly: true, signed: true });
        res.send({ message: 'Unauthorized Action' });
      }
    } else next();
  } else if (url === '/signout' && method === 'POST') {
    res.clearCookie('session', { httpOnly: true, signed: true });
    res.send({ message: 'cookie was deleted successfully' });
  } else if (signedCookies.session) {
    if (signedCookies.session.loggedIn === true
    && signedCookies.session.secretMessage === 'this cookie is now safely signed') next();
    if (signedCookies.session.loggedIn !== true
    || signedCookies.session.secretMessage !== 'this cookie is now safely signed') res.send({ message: 'Unauthorized Action' });
  } else if (!signedCookies.session) {
    res.send({ message: 'There is no signed cookie in the request, redirect to signin page' });
  }
});
