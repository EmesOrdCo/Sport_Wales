# Fix "No Permissions" Issue - Complete Guide

## ✅ Step 1: Enable Permissions for BOTH Roles

1. **Go to Settings** → **Users & Permissions Plugin** → **Roles**

2. **Enable for "Public" role:**
   - Click **"Public"** (pencil icon)
   - Find **"Funding Opportunity"** section
   - Check **ALL boxes:**
     - ✅ find
     - ✅ findOne  
     - ✅ create
     - ✅ update
     - ✅ publish
   - Click **"Save"**

3. **Enable for "Authenticated" role:**
   - Go back to Roles list
   - Click **"Authenticated"** (pencil icon)
   - Find **"Funding Opportunity"** section
   - Check **ALL boxes** (same as above)
   - Click **"Save"**

---

## 🔄 Step 2: Clear Browser Cache

1. **Hard refresh:**
   - **Mac**: `Cmd + Shift + R`
   - **Windows/Linux**: `Ctrl + Shift + F5`

2. **Or clear cache:**
   - Open DevTools (F12)
   - Right-click refresh button → "Empty Cache and Hard Reload"

---

## 🔐 Step 3: Log Out and Back In

1. Click your profile (top right)
2. Click **"Logout"**
3. **Log back in**
4. Try the form again

---

## 🔄 Step 4: Restart Strapi Server

Sometimes Strapi needs a restart after schema/permission changes:

1. **Stop Strapi** (Ctrl+C in terminal)
2. **Restart Strapi:**
   ```bash
   cd strapi-cms
   npm run develop
   ```
3. **Wait for server to fully start**
4. **Refresh browser** and try again

---

## 🎯 Step 5: Verify Permissions Are Saved

1. Go to **Settings** → **Users & Permissions** → **Roles**
2. Click **"Authenticated"**
3. Scroll to **"Funding Opportunity"**
4. **Verify all checkboxes are still checked**
5. If any are unchecked, check them and **Save** again

---

## 🔍 Still Not Working?

If fields still show "No permissions" after all steps:

1. **Check if you're logged in as Admin:**
   - Admin users should have full access
   - If not admin, you might need Super Admin role

2. **Check Strapi version:**
   - Some Strapi versions have permission bugs
   - Try updating: `npm update @strapi/strapi`

3. **Manual permission check:**
   - Try creating content via API to test permissions
   - Check browser console for errors

---

*Most common fix: Enable BOTH Public AND Authenticated roles, then hard refresh browser!*

