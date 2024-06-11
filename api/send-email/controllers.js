const {sendConfirmationEmail} = require('./services');

const sendEmailController = async (req, res) => {
  const { email } = req.body;
  console.log(email)
  try {
    await sendConfirmationEmail(email);
    res.status(200).json({ message: 'Confirmation email sent successfully!' });
    
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    res.status(500).json({ error: 'Failed to send confirmation email' });
    
  }
};

module.exports = {
    sendEmailController
  };