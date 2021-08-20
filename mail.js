const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config();

const auth = {
	auth: {
		api_key: process.env.API_KEY,
		domain: process.env.DOMAIN,
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
