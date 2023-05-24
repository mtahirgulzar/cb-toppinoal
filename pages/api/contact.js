export default async function (req, res) {
	require('dotenv').config();

	let nodemailer = require('nodemailer');
	const transporter = nodemailer.createTransport({
		port: 587,
		host: 'smtp.office365.com',
		secure: false,
		requireTLS: true,
		auth: {
			user: process.env.MAIL_FROM,
			pass: process.env.MAIL_AUTH,
		},
	});
	const mailData = {
		from: process.env.MAIL_FROM,
		to: process.env.RECIVER_MAIL,
		subject: `Message From Top Pinole Dental`,
		html: `
    <div><strong>Name:</strong> ${req.body.name}</div>
    <br/>
    <div><strong>Email:</strong> ${req.body.email}</div>
    <br/>
    <div><strong>Phone:</strong> ${req.body.phone}</div>
    <br/>
    <div><strong>Message:</strong> ${req.body.message}</div>
    <br/>
    `,
	};
	await new Promise((resolve, reject) => {
		transporter.sendMail(mailData, function (err, info) {
			if (err) {
				console.log(err);
				reject(err);
			} else {
				console.log(info);
				resolve(info);
			}
		});
	});
	res.status(200).json({ status: 'OK' });
}
