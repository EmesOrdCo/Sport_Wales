# Testing the CMS Integration

## What is a CMS?

A **CMS (Content Management System)** is like a back-office control panel where you can:
- Write and edit articles without touching code
- Upload images and manage media
- Update content anytime without needing a developer
- Have multiple people edit content with different permission levels

Think of it like the difference between:
- **Word document** (CMS) - Easy to edit the text
- **PDF** (Hardcoded website) - Need special tools to change it

## Current Status

✅ **The website is built and working** - It currently uses "mock data" (sample content)

✅ **CMS integration is ready** - All code is written to connect to Strapi CMS

⏳ **CMS needs to be set up** - Strapi needs to be installed and configured

## Option 1: Test Website (Without CMS)

The website works right now using fallback content:

```bash
cd sport-wales-website
npm run dev
```

Then visit: http://localhost:3000

You'll see:
- News articles (mock data)
- Funding opportunities (mock data)
- All pages working perfectly

**What this proves:** The website works and is ready for CMS content!

---

## Option 2: Test with Real CMS (Full Integration)

### Step 1: Install Strapi CMS

```bash
# Go to parent directory
cd ..

# Create Strapi CMS installation
npx create-strapi-app@latest strapi-cms --quickstart
```

This will:
- Download and install Strapi
- Open a browser to http://localhost:1337/admin
- Ask you to create an admin account

### Step 2: Create Admin Account

When Strapi opens:
1. Fill in your name, email, and password
2. Click "Let's start"

### Step 3: Create Content Types

Strapi needs to know what kind of content you're storing. Create these:

#### Create "Article" Content Type

1. Go to **Content-Type Builder** (left sidebar)
2. Click **"+ Create new collection type"**
3. Name it: `Article`
4. Click **"Continue"**

Add these fields:
- **title** → Text field
- **slug** → UID field (based on: title)
- **content** → Rich Text field
- **excerpt** → Text field
- **featuredImage** → Media field
- **publishedAt** → DateTime field

Click **"Save"** (top right)

#### Create "Funding Opportunity" Content Type

Repeat the process for:
- Name: `Funding Opportunity`
- Fields:
  - **title** → Text
  - **slug** → UID (based on: title)
  - **description** → Text
  - **content** → Rich Text
  - **maxAmount** → Text
  - **priority** → Number

### Step 4: Enable Public Access

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. Under **Permissions**, find your content types
3. Check:
   - ✅ Article: `find`, `findOne`
   - ✅ Funding Opportunity: `find`, `findOne`
4. Click **"Save"**

### Step 5: Add Some Test Content

1. Go to **Content Manager** → **Article**
2. Click **"+ Create new entry"**
3. Fill in:
   - Title: "Test News Article"
   - Slug: (auto-generated)
   - Content: "This is a test article from the CMS!"
   - Excerpt: "Testing CMS integration"
4. Click **"Save"** then **"Publish"**

### Step 6: Connect Website to CMS

1. Create `.env.local` file in `sport-wales-website` folder:

```bash
cd sport-wales-website
touch .env.local
```

2. Add to `.env.local`:

```env
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=
```

(API token not needed for public content, but you can create one later in Settings → API Tokens)

### Step 7: Restart Website

```bash
npm run dev
```

Visit: http://localhost:3000/en/news

**You should now see your test article from the CMS!**

---

## Option 3: Quick Test Script

Want to verify the CMS connection works without going through setup?

1. Make sure Strapi is running on http://localhost:1337
2. Visit: http://localhost:1337/api/articles

You should see JSON data if Strapi is working.

Then check your website console (browser DevTools) for any connection messages.

---

## Troubleshooting

### "Website shows mock data still"
- Check Strapi is running (http://localhost:1337)
- Check `.env.local` has `STRAPI_URL=http://localhost:1337`
- Restart the Next.js dev server

### "Can't access Strapi API"
- Make sure you enabled Public permissions (Step 4)
- Check Strapi is running on port 1337

### "Content not showing"
- Make sure you **published** the content (not just saved as draft)
- Check browser console for errors
- Verify content type names match exactly: `Article`, `Funding Opportunity`

---

## Success Indicators

✅ You'll know it's working when:
1. Website shows content from Strapi (not mock data)
2. You can edit content in Strapi admin and see changes on website
3. No errors in browser console
4. Content appears on /en/news and /en/funding pages

---

## Next Steps

Once testing works:
1. Set up bilingual content (add Welsh locale in Strapi Settings)
2. Create production API token
3. Configure production Strapi URL
4. Train content editors on using Strapi admin panel


