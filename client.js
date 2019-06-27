const { createConnection } = require('net');

// const mailServerAddress = 'mail.mailinator.com';

const to = 'erinmgurley@gmail.com';
const from = 'hi@gmail.com';

const email = `From: "Future Alex" <$from>'
To: "Alex" <${to}>
Date: ${new Date()}
Subject: Hello from future Alex

Hello Alex, good luck!\r\n.\r\n`

const mailServerAddress = 'gmail-smtp-in.l.google.com';

const client =  createConnection(25, mailServerAddress, () => {
  console.log('connected');
});

const steps = [
  'HELO ryan.com\n',
  `MAIL FROM: <${from}>\n`,
  `RCPT TO: <${to}>\n`,
  'DATA\n',
  email,
  'QUIT\n'
];

let step = 0;
client.on('data',  data => {
  console.log(data.toString());
  if(step === steps.length) return client.end();
  client.write(steps[step]);
  step++

});
