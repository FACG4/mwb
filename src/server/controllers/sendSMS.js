const sendSMS = (from, body, to, cb) => {
  const accountSid = process.env.accountSid;
  const authToken = process.env.authToken;
  console.log('===========================================================');
  console.log('accountSid', accountSid);
  console.log('authToken', authToken);
  console.log();
  const client = require('twilio')(accountSid, authToken);

  console.log('inputs', from, body, to);
  client.messages
    .create({
      from,
      body,
      to,
    })
    .then(message => cb(null, message.sid))
    .catch(err => cb(err))
    .done();
};

module.exports = {
  sendSMS,
};
