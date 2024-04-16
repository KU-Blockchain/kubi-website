import { NextResponse } from "next/server"
import sgMail from '@sendgrid/mail';
require('dotenv').config();

export async function POST(req,res)
{
  const data = await req.json()
  sgMail.setApiKey(process.env.SENDGRID_API_KEYALSO)
    
    const msg = {
      to: 'ku.blockchain.institute@gmail.com', // Change to your recipient
      from: 'ku.blockchain.institute@gmail.com', // Change to your verified sender
      subject: 'Contact Form Submission',
      text: `Name: ${data.firstName} ${data.lastName} \nEmail: ${data.emailID} \nMessage: ${data.message}` ,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
    const returnData = {message:"Success", data:data}
    return NextResponse.json(msg)
}
