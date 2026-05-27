# Setup Instructions

## 1. EMAIL SERVICE SETUP (EmailJS)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

### Step 2: Add Email Service (Gmail)
1. In EmailJS dashboard, go to **Email Services**
2. Click **"Add New Service"**
3. Select **Gmail**
4. Connect your Gmail account
5. Name it something like `gmail_service`
6. Copy the **Service ID** (e.g., `service_xxxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Use these template variables:
   ```
   From: {{from_name}} ({{from_email}})
   Message:
   {{message}}
   ```
4. Set receiver email to your email address
5. Copy the **Template ID** (e.g., `template_xxxxxx`)

### Step 4: Get Public Key
1. Go to **Account Settings**
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxx`)

### Step 5: Update Contact.jsx
Replace the three placeholders in `src/components/Contact.jsx`:
- Line ~22: `'YOUR_PUBLIC_KEY_HERE'` → Your Public Key
- Line ~25: `'YOUR_SERVICE_ID_HERE'` → Your Service ID
- Line ~25: `'YOUR_TEMPLATE_ID_HERE'` → Your Template ID

**Example:**
```jsx
emailjs.init('k1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p');
emailjs.sendForm('service_abc123xyz', 'template_xyz789abc', formRef.current)
```

---

## 2. HERO SECTION IMAGE SETUP

### Step 1: Add Your Photo
1. Place your photo file in the `public` folder
   - Example: `public/my-photo.jpg` or `public/my-photo.png`
   - Recommended: Square image (1:1 ratio) for best appearance
   - Recommended size: 400×400px minimum

### Step 2: Update Hero.jsx
Replace the image URL in `src/components/Hero.jsx` (around line 71):

**Current:**
```jsx
<img
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  alt="Silitu"
  className="w-full h-full object-cover"
/>
```

**Update to:**
```jsx
<img
  src="/my-photo.jpg"
  alt="Silitu"
  className="w-full h-full object-cover"
/>
```

Replace `my-photo.jpg` with your actual filename in the `public` folder.

---

## 3. REBUILD & TEST

After making changes:

```bash
pnpm run dev
```

Visit `http://localhost:5173` and test:
1. ✅ Send a message from the contact form
2. ✅ Check your email inbox
3. ✅ Verify hero image displays correctly
4. ✅ Test dark/light toggle

---

## Troubleshooting

**Email not sending:**
- Verify Service ID, Template ID, and Public Key are correct
- Check Gmail account permissions
- Open browser console (F12) for error messages

**Image not showing:**
- Verify filename matches exactly (case-sensitive)
- Ensure file is in `public` folder, not `src`
- Try refreshing browser (Ctrl+F5 / Cmd+Shift+R)

