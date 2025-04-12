import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendMail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "ThitaInfo inc",
      link: "https://thitainfo.com",
    },
  });

  var emailText = mailGenerator.generatePlaintext(options.mailGenContent);

  var emailHtmlText = mailGenerator.generate(options.mailGenContent);

  // send mail
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAILTRAP_SENDEREMAIL,
    to: options.email,
    subject: options.subject,
    text: emailText,
    html: emailHtmlText,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
};

const emailVerificationMailGenContent = (username, verificationURL) => {
  return {
    body: {
      name: username,
      intro: "Welcome to app thitainfo, welcome to tha team",
      action: {
        instruction: "To get Start with aur app",
        button: {
          color: "#22BB66",
          text: "Verify your email",
          link: verificationURL,
        },
      },
      outro:
        "Thank you visiting thitainfo, Please share your thougth in linkedin",
    },
  };
};

const forgotPasswordMailGetContent = (username, passwordResetURL) => {
  return {
    body: {
      name: username,
      intro: "Welcome to app thitainfo, welcome to tha team",
      action: {
        instruction: "To get Start with aur app ThitaInfo",
        button: {
          color: "#22BB66",
          text: "Change your password | Reset Password",
          link: passwordResetURL,
        },
      },
      outro:
        "Thank you visiting thitainfo, Please share your thougth in linkedin",
    },
  };
};

export {
  sendMail,
  emailVerificationMailGenContent,
  forgotPasswordMailGetContent,
};

// sendMail({
//   email: user.email,
//   subject: "Interview schedule at 10",
//   mailGenContent: emailVerificationMailGenContent(
//     user.username,
//     username.verificationURL,
//   ),
// });
