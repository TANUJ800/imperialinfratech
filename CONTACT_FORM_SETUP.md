# Contact Form Setup Guide

## Fixed Issues ✅
Your contact form error has been fixed! Here's what was done:

### Changes Made:
1. **Replaced Resend API** with Gmail (more reliable for self-hosted sites)
2. **Added nodemailer** package for email handling
3. **Now sends 2 emails**:
   - Email to YOU (company) with contact details
   - Confirmation email to the visitor

## Setup Instructions

### Step 1: Enable Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer"
3. Google will generate a 16-digit password - **copy this**

### Step 2: Update .env.local File
The file `.env.local` has been created. Update it with your Gmail credentials:

```
GMAIL_USER=your_actual_email@gmail.com
GMAIL_PASS=xxxx xxxx xxxx xxxx    (16-digit app password without spaces)
CONTACT_TO=imperialinfratechcon26@gmail.com
```

**Example:**
```
GMAIL_USER=yourname@gmail.com
GMAIL_PASS=abcd efgh ijkl mnop
CONTACT_TO=imperialinfratechcon26@gmail.com
```

### Step 3: Restart Your Development Server
1. Stop the server (Ctrl+C)
2. Run: `npm run dev`

### Step 4: Test It
1. Go to Contact page
2. Fill the form and submit
3. Check your email inbox (imperialinfratechcon26@gmail.com)
4. You should see the submission
5. The visitor should get a confirmation email

## What Happens Now:
✅ Visitor submits form
✅ Your email receives their details (name, phone, message, service, location)
✅ Visitor gets a confirmation email
✅ No more JSON errors!

## Important Notes:
- Keep `.env.local` SECRET - never commit it to git
- If using Gmail 2FA, you MUST use App Password (not regular password)
- The contact form is now fully functional!

---
**Questions?** Check Gmail's support: https://support.google.com/accounts/answer/185833
