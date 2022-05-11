const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '2youchuen68@gmail.com',
    pass: '2abc08161111'
  }
});

module.exports = function (to, subject, html) {
    const mailOptions = {
        from: '"佑春醫療器材行"<2youchuen68@gmail.com>',
        to,
        subject,
        html
    };

    transporter.sendMail(mailOptions);

}