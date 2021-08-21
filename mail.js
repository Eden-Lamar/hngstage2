const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config();

const auth = {
	auth: {
		api_key: "1064ef90ba4d8f7e50eec15e385dac84-9776af14-aa718ee0",
		domain: "sandbox114ed1ce456e4941bef7d120fc7b8536.mailgun.org",
	},
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (from, subject, text, cb) => {
	const mailOptions = {
		from,
		to: "emmanuelmomodu3@gmail.com",
		subject,
		text,
	};

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			cb(err, null);
		} else {
			cb(null, data);
		}
	});
};

module.exports = { sendMail };
