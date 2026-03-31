import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

let transporter;

// Initialize transporter with error handling
function initTransporter() {
  try {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.warn("Gmail credentials not configured. Using fallback mode.");
      return null;
    }

    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });
  } catch (error) {
    console.error("Failed to initialize transporter:", error);
    return null;
  }
}

// Fallback: Save to a local file and log
function saveFallback(data) {
  const logsDir = path.join(process.cwd(), "public", "contact-logs");
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/:/g, "-");
  const filePath = path.join(logsDir, `contact-${timestamp}.json`);
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Contact form saved to: ${filePath}`);
  return filePath;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message, service, location, website } = req.body || {};

  if (website) {
    return res.status(400).json({ error: "Spam detected" });
  }

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const phoneOk = /^[0-9+()\-\s]{7,20}$/.test(phone);

  if (!emailOk || !phoneOk) {
    return res.status(400).json({ error: "Please enter valid contact details" });
  }

  const toAddress = process.env.CONTACT_TO || "imperialinfratechcon26@gmail.com";

  const formData = {
    timestamp: new Date().toISOString(),
    name,
    email,
    phone,
    service: service || "Not specified",
    location: location || "Not specified",
    message
  };

  try {
    // Try to send via Gmail
    transporter = transporter || initTransporter();

    if (transporter) {
      const emailContent = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        service ? `Service: ${service}` : null,
        location ? `Location: ${location}` : null,
        "",
        "Message:",
        message
      ]
        .filter(Boolean)
        .join("\n");

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: toAddress,
        replyTo: email,
        subject: `New inquiry from ${name}`,
        text: emailContent,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
          ${location ? `<p><strong>Location:</strong> ${location}</p>` : ""}
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "We received your inquiry - Imperial Infratech-Con",
        text: `Hi ${name},\n\nThank you for contacting Imperial Infratech-Con. We have received your inquiry and will get back to you within 1 business day.\n\nBest regards,\nImperial Infratech-Con Team`,
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for contacting <strong>Imperial Infratech-Con</strong>.</p>
          <p>We have received your inquiry and will get back to you within 1 business day.</p>
          <hr>
          <p><strong>Your Contact Details:</strong></p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p><br>Best regards,<br>Imperial Infratech-Con Team</p>
        `
      });

      console.log("Email sent successfully");
      return res.status(200).json({ ok: true, message: "Thanks! We will contact you within 1 business day." });
    } else {
      // Fallback: Save locally
      saveFallback(formData);
      console.log("Gmail not configured. Contact saved locally.");
      return res.status(200).json({ 
        ok: true, 
        message: "Thanks! Your inquiry has been received. We will contact you within 1 business day." 
      });
    }
  } catch (error) {
    console.error("Contact form error:", error);
    
    // Save fallback even on error
    try {
      saveFallback(formData);
    } catch (saveError) {
      console.error("Failed to save fallback:", saveError);
    }

    return res.status(200).json({ 
      ok: true, 
      message: "Thanks! Your inquiry has been received. We will contact you within 1 business day." 
    });
  }
}
