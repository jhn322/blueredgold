import { sendEmail } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json();

    // Create HTML content for user confirmation
    const userHtmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #282828;">
        <div style="padding: 2rem; border-radius: 12px; border: 1px solid #E4E4E4; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); margin-bottom: 1.5rem;">
          <h1 style="color: #282828; font-size: 24px; margin-bottom: 1.5rem;">Thank you for contacting us!</h1>
          <p style="margin-bottom: 1rem;">We have received your message and will get back to you shortly.</p>
          
          <h2 style="font-size: 18px; margin-top: 2rem; margin-bottom: 1rem;">Your message details:</h2>
          <p style="margin-bottom: 0.5rem;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Email:</strong> ${email}</p>
          ${phone ? `<p style="margin-bottom: 0.5rem;"><strong>Phone:</strong> ${phone}</p>` : ''}
          ${company ? `<p style="margin-bottom: 0.5rem;"><strong>Company:</strong> ${company}</p>` : ''}
          <p style="margin-bottom: 2rem;"><strong>Message:</strong> ${message}</p>
          
          <p style="margin-bottom: 0.5rem;">Kind regards,</p>
          <p style="font-weight: bold; margin-bottom: 0.5rem;">The BlueRedGold Team</p>
        </div>

        <footer style="background-color: #F1F1F1; border-top: 1px solid #E4E4E4; padding: 1.5rem; border-radius: 8px;">
          <div style="font-size: 14px; color: #555555; text-align: center;">
            <p style="margin-bottom: 1rem;">
              <a href="https://blueredgold.vercel.app/" style="color: #6a5acd; text-decoration: none; margin: 0 10px;">Growing Saffron</a> | 
              <a href="https://blueredgold.vercel.app/premium-saffron/food-beverages" style="color: #6a5acd; text-decoration: none; margin: 0 10px;">Food & Beverages</a> | 
              <a href="https://blueredgold.vercel.app/blogs/saffron-recipes" style="color: #6a5acd; text-decoration: none; margin: 0 10px;">Recipes</a> | 
              <a href="https://blueredgold.vercel.app/about-us/press" style="color: #6a5acd; text-decoration: none; margin: 0 10px;">Press</a>
            </p>
            <p style="margin-bottom: 0.5rem;">Copyright ${new Date().getFullYear()} | BlueRedGold</p>
          </div>
        </footer>
      </div>
    `;

    const userPlainTextContent = `
      Thank you for contacting us!

      We have received your message and will get back to you shortly.

      Your message details:
      Name: ${name}
      Email: ${email}
      ${phone ? `Phone: ${phone}` : ''}
      ${company ? `Company: ${company}` : ''}
      Message: ${message}

      Kind regards,
      The BlueRedGold Team

      Visit us:
      Growing Saffron: https://blueredgold.vercel.app/
      Food & Beverages: https://blueredgold.vercel.app/premium-saffron/food-beverages
      Recipes: https://blueredgold.vercel.app/blogs/saffron-recipes
      Press: https://blueredgold.vercel.app/about-us/press

      Copyright ${new Date().getFullYear()} | BlueRedGold
    `;

    // Create HTML content for admin notification
    const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #282828;">
        <div style="padding: 2rem; border-radius: 12px; border: 1px solid #E4E4E4; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); margin-bottom: 1.5rem;">
          <h1 style="color: #6a5acd; font-size: 24px; margin-bottom: 1.5rem;">New Contact Form Submission</h1>
          <p style="margin-bottom: 1rem;">A new contact form has been submitted on the BlueRedGold website.</p>
          
          <h2 style="font-size: 18px; margin-top: 2rem; margin-bottom: 1rem;">Contact Details:</h2>
          <p style="margin-bottom: 0.5rem;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Email:</strong> ${email}</p>
          ${phone ? `<p style="margin-bottom: 0.5rem;"><strong>Phone:</strong> ${phone}</p>` : ''}
          ${company ? `<p style="margin-bottom: 0.5rem;"><strong>Company:</strong> ${company}</p>` : ''}
          <p style="margin-bottom: 2rem;"><strong>Message:</strong> ${message}</p>
          
          <p style="margin-bottom: 0.5rem;">This is an automated notification.</p>
        </div>

        <footer style="background-color: #F1F1F1; border-top: 1px solid #E4E4E4; padding: 1.5rem; border-radius: 8px;">
          <div style="font-size: 14px; color: #555555; text-align: center;">
            <p style="margin-bottom: 1rem;">
              <a href="https://blueredgold.vercel.app/" style="color: #6a5acd; text-decoration: none; margin: 0 10px;">Growing Saffron</a> | 
              <a href="https://blueredgold.vercel.app/premium-saffron/food-beverages" style="color: #6a5acd; text-decoration: none; margin: 0 10px;">Food & Beverages</a> | 
              <a href="https://blueredgold.vercel.app/blogs/saffron-recipes" style="color: #6a5acd; text-decoration: none; margin: 0 10px;">Recipes</a> | 
              <a href="https://blueredgold.vercel.app/about-us/press" style="color: #6a5acd; text-decoration: none; margin: 0 10px;">Press</a>
            </p>
            <p style="margin-bottom: 0.5rem;">Copyright ${new Date().getFullYear()} | BlueRedGold</p>
          </div>
        </footer>
      </div>
    `;

    const adminPlainTextContent = `
      New Contact Form Submission

      A new contact form has been submitted on the BlueRedGold website.

      Contact Details:
      Name: ${name}
      Email: ${email}
      ${phone ? `Phone: ${phone}` : ''}
      ${company ? `Company: ${company}` : ''}
      Message: ${message}

      This is an automated notification.

      Visit us:
      Growing Saffron: https://blueredgold.vercel.app/
      Food & Beverages: https://blueredgold.vercel.app/premium-saffron/food-beverages
      Recipes: https://blueredgold.vercel.app/blogs/saffron-recipes
      Press: https://blueredgold.vercel.app/about-us/press

      Copyright ${new Date().getFullYear()} | BlueRedGold
    `;

    // Send confirmation email to user
    const userEmailResult = await sendEmail({
      to: email,
      subject: 'Thank you for contacting BlueRedGold',
      htmlContent: userHtmlContent,
      textContent: userPlainTextContent,
    });

    // Send notification email to admin
    const adminEmailResult = await sendEmail({
      to: process.env.EMAIL_RECIPIENT || 'johan@semurai.se',
      subject: 'New Contact Form Submission - BlueRedGold',
      htmlContent: adminHtmlContent,
      textContent: adminPlainTextContent,
    });

    if (!userEmailResult.success || !adminEmailResult.success) {
      console.error('Email sending failed:', {
        userEmail: userEmailResult,
        adminEmail: adminEmailResult,
      });
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
