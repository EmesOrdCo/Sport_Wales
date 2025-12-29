# How to Verify New Fields in Strapi

## Step-by-Step Verification Guide

### ✅ Schema Files Confirmed
I've verified that all new fields are in the schema files:
- ✅ Article: category, author, featured
- ✅ Funding: status, applicationLink, deadlineDate

---

## 🚀 Verification Steps

### Step 1: Access Strapi Admin

1. **Open your browser**
2. **Go to:** `http://localhost:1337/admin`
3. **Log in** with your admin credentials

---

### Step 2: Check Articles - New Fields

1. **Click "Content Manager"** in the left sidebar
2. **Click "Articles"** (under Collection Types)
3. **Click "Create new entry"** button (top right)

**You should see these fields:**

#### ✅ Fields to Look For:

1. **Title** ✓ (existing - at top)
2. **Slug** ✓ (existing - auto-generated)
3. **Category** ⭐ **NEW!**
   - Should be a **dropdown menu**
   - Options: News, Feature, Impact Story, Resources, Funding, Research
   - Default: "News"
   - Location: Should be near the top, after title/slug

4. **Author** ⭐ **NEW!**
   - Should be a **text input field**
   - Can type author name
   - Optional field

5. **Featured** ⭐ **NEW!**
   - Should be a **toggle switch** (on/off)
   - Default: OFF (false)
   - Optional field

6. **Excerpt** ✓ (existing - should now be required, max 300 chars)
7. **Content** ✓ (existing - rich text editor)
8. **Featured Image** ✓ (existing)

---

### Step 3: Check Funding Opportunities - New Fields

1. **Still in Content Manager**
2. **Click "Funding Opportunities"** (in left sidebar)
3. **Click "Create new entry"** button

**You should see these fields:**

#### ✅ Fields to Look For:

1. **Title** ✓ (existing)
2. **Slug** ✓ (existing)
3. **Status** ⭐ **NEW!**
   - Should be a **dropdown menu**
   - Options: Open, Closed, Coming Soon
   - Default: "Open"
   - Required field

4. **Description** ✓ (existing - should now be required, max 500 chars)
5. **Max Amount** ✓ (existing)
6. **Application Link** ⭐ **NEW!**
   - Should be a **text input field**
   - For URL to application form
   - Optional field

7. **Deadline Date** ⭐ **NEW!**
   - Should be a **date picker** (calendar icon)
   - Optional field
   - Can select a date

8. **Priority** ✓ (existing - number field)
9. **Content** ✓ (existing - rich text editor)

---

## 🔍 What You're Looking For

### For Articles:
- [ ] **Category dropdown** with 6 options visible
- [ ] **Author text field** visible
- [ ] **Featured toggle switch** visible (can turn on/off)

### For Funding:
- [ ] **Status dropdown** with 3 options (Open, Closed, Coming Soon)
- [ ] **Application Link text field** visible
- [ ] **Deadline Date date picker** visible

---

## ❓ Troubleshooting

### If Fields Don't Appear:

**Option 1: Refresh the Admin Panel**
- Press `Ctrl+R` (Windows) or `Cmd+R` (Mac) to refresh
- Strapi might still be rebuilding the admin panel

**Option 2: Hard Reload**
- Press `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- This clears cache and reloads

**Option 3: Log Out and Back In**
- Click your profile icon (top right)
- Click "Logout"
- Log back in
- Try creating new entry again

**Option 4: Wait a Bit Longer**
- Strapi might still be building the admin panel after restart
- Wait 1-2 minutes and try again

**Option 5: Check Strapi Console**
- Look at the terminal where Strapi is running
- You should see "Admin panel built successfully" message
- If you see errors, let me know

---

## ✅ Expected Result

When you create a new Article, you should see a form with these fields **in this order**:

1. Title (text input)
2. Slug (auto-generated, editable)
3. **Category** (dropdown) ⭐ NEW
4. **Author** (text input) ⭐ NEW
5. **Featured** (toggle switch) ⭐ NEW
6. Excerpt (text input)
7. Content (rich text editor)
8. Featured Image (media upload)

---

## 📸 What It Should Look Like

The new fields should appear as:
- **Category:** A dropdown with options like "News", "Feature", etc.
- **Author:** A simple text input box where you can type
- **Featured:** A toggle switch that you can click on/off (like a light switch)

---

## 🎯 Quick Check

**Can't see the fields?** Try this:
1. Go back to Content Manager home
2. Click on an **existing article** (your test article)
3. Check if the fields appear there
4. If yes → fields are working!
5. If no → Strapi might still be building

---

## 💡 Pro Tip

You can also check by editing your existing test article:
1. Go to Articles
2. Click on "Test News Article from CMS"
3. Scroll through the form
4. Look for the new fields

Even if creating new entry doesn't show them yet, if they appear when editing existing content, they're working!

---

*Let me know what you see when you check!*


