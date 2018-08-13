const sendSMS = (from, body, to, cb) => {
  const accountSid = process.env.accountSid;
  const authToken = process.env.authToken;
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
      from,
      body,
      to,
    })
    .then(message => console.log(message.sid))
    .catch(err => console.log(err))
    .done();
};

module.exports = {
  sendSMS,
};
