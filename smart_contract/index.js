const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "eliodamutiba@gmail.com",
    pass: "mgykchtnjhzxiasg",
  },
});

app.post("/send-email", (req, res) => {
  console.log(req.body);
  // Extract data from the request (assuming data is in the request body)
  const { keyword, amount, message, addressTo } = req.body;

  const mailOptions = {
    from: "eliodamutiba@gmail.com",
    to: "joelofelectronics@gmail.com",
    subject: "Crypto Transaction Notification",
    text: `
            Transaction details:
            Address To: ${addressTo}
            Amount: ${amount} MATIC
            Keyword: ${keyword}
            Message: ${message}
        `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(5000, () => console.log("Server listening on port 5000"));