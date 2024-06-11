const nodemailer = require('nodemailer');

const sendConfirmationEmail = async (email) => {
  try {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "c97104e9684383",
          pass: "9b2a32dd59c5c4"
        }
    });

    await transport.sendMail({
      from: '"Your Name" <your_email@example.com>',
      to: email,
      subject: "Booking Confirmation",
      text: "Your booking has been confirmed.",
      html: "<b>Your booking has been confirmed.</b>",
    });

    console.log('Confirmation email sent successfully!');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw new Error('Failed to send confirmation email');
  }
};

module.exports = {
  sendConfirmationEmail
};