# Fix Strapi Permissions - Quick Guide

## 🔧 Issue: "No permissions to see this field"

If you see fields with a crossed-out eye icon and "No permissions to see this field", you need to enable permissions.

---

## ✅ Solution: Enable Permissions

### Step 1: Access Role Settings

1. **In Strapi Admin**, scroll to bottom of left sidebar
2. **Click "Settings"** (gear icon)
3. **Click "Users & Permissions Plugin"**
4. **Click "Roles"** tab
5. **Click on "Authenticated"** role (or your admin role)

### Step 2: Enable Funding Opportunity Permissions

1. **Scroll down** to find "Funding Opportunity" section
2. **Check ALL boxes:**
   - ✅ find
   - ✅ findOne
   - ✅ create
   - ✅ update
   - ✅ publish
   - ✅ delete (optional)

3. **Click "Save"** button (top right, green button)

### Step 3: Enable Article Permissions (if needed)

1. **Find "Article" section** in same permissions page
2. **Check ALL boxes** (same as above)
3. **Click "Save"** again

### Step 4: Refresh and Test

1. **Go back** to Content Manager
2. **Click "Funding Opportunities"**
3. **Click "Create new entry"**
4. **Refresh page** if needed (Ctrl+R / Cmd+R)
5. **Fields should now be visible!** ✅

---

## 🎯 What You Should See After Fix

### Funding Opportunities Form:
- ✅ **Status** - Dropdown (Open, Closed, Coming Soon) - **NO crossed-out eye**
- ✅ **Application Link** - Text input - **NO crossed-out eye**
- ✅ **Deadline Date** - Date picker - **NO crossed-out eye**

---

## ⚠️ Alternative: Check Public Role

If "Authenticated" doesn't work:

1. Go to **Settings** → **Users & Permissions** → **Roles**
2. Click **"Public"** role
3. Enable permissions for Funding Opportunity
4. Save

---

## 🔍 Quick Check

After enabling permissions:
- Fields should be **editable** (not grayed out)
- **No crossed-out eye icons**
- You can **type/select** in the fields

---

*This is a one-time setup. Once permissions are enabled, they stay enabled!*

