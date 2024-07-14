import nodemailer from 'nodemailer';
import User from '@/models/user.models';
import bcryptjs from 'bcryptjs';

export const sendMail = async ({ email, emailType, userId }: any) => {

  const hashedUserId = await bcryptjs.hash(userId.toString(), 10);
  if (emailType === 'VERIFY') {
    await User.findByIdAndUpdate(userId, {
     $set:{
      verifyToken: hashedUserId,
      verifyTokenExpiry: Date.now() + 3600000
     }
    });
  }
  else if (emailType === 'RESET') {
    await User.findByIdAndUpdate(userId,{
      $set: {
      forgotPasswordToken: hashedUserId,
      forgotPasswordTokenExpiry: Date.now() + 3600000
    }})
  } 
  try {
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      auth: {
        user: "ec429be98c5e7c",
        pass: "62488534df7be3"
      }
    });

    const mailoptions = {
      from: 'goyaladitya013@gmail.com',
      to: email,
      subject: emailType === 'VERIFY' ? 'Verify Email' : 'Reset Password',
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedUserId}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedUserId}
            </p>`
    }

    const mailResponse = await transport.sendMail(mailoptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
