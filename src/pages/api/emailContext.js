import { setApiKey, send } from '@sendgrid/mail'
setApiKey(process.env.SENDGRID_API_KEY)


export default function handle(req,res){
  if (req.method === 'POST') {
    // Handle POST request
    const { email, context } = req.body;

    if (!email || !context) {
      // Bad Request
      return res.status(400).json({ error: 'Email and context are required.' });
    }

    res.status(200).json({ message: `Email ${email} subscribed with context: ${context}` });
  }

  if (req.method === 'GET') {
    // Process GET request
    // For example, you might retrieve data from a database or another service.
    // Below is a placeholder response as an example.

    // Create a mock email context to send as a response
    const emailContextData = {
      email: "example@example.com",
      context: "Welcome to our newsletter!",
      status: "Subscribed"
    };

    // Send the mock data as a JSON response
    res.status(200).json(emailContextData);
  } else {
    // If the incoming request is not a GET request, return a 405 Method Not Allowed
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


// export const sendEmail = ({email}) => {
//   
//   const msg = {
//     to: "tej.gumaste@gmail.com", // Change to your recipient
//     from: email.emailID, // Change to your verified sender
//     subject: `Email from KUBI Website - ${email.firstName} ${email.lastName}`,
//     text: `Name: ${email.firstName} ${email.lastName}\nEmail: ${email.emailID}\nMessage: ${email.message}`,
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   }
//   send(msg)
//     .then(() => {
//       console.log('Email sent')
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }