const express = require("express");
require("colors");
require("dotenv").config();
const app = express();
const { sendMail } = require("./mail");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

const port = process.env.PORT || 8080;

app.post("/email", (req, res) => {
	console.log("Data:", req.body);
	const { name, email, subject, message } = req.body;
	sendMail(email, subject, message, (err, data) => {
		if (err) {
			res.status(500).json({ message: err.message });
		} else {
			res.status(200).json({ message: "Message sent successfully", data });
		}
	});
});

app.listen(port, () => {
	console.log(`\nTHE FORCE IS WITH YOU ON PORT ${port}✅...\n`.blue);
});
