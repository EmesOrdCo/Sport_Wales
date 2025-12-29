# Strapi User Roles Setup Guide

This guide explains how to set up user roles and permissions in Strapi for the Sport Wales CMS.

---

## 👥 Recommended Roles

### 1. **Content Manager** (Full Access)
- Can create, edit, publish, and delete all content
- Can manage media library
- Can manage other users
- **Use for:** Senior content team members

### 2. **Editor** (Publish Content)
- Can create, edit, and publish content
- Cannot delete content
- Cannot manage users
- **Use for:** Regular content editors

### 3. **Author** (Create Content)
- Can create and edit own content
- Cannot publish (requires approval)
- Cannot delete content
- **Use for:** Content creators who need review

### 4. **Viewer** (Read Only)
- Can view content only
- Cannot create or edit
- **Use for:** Stakeholders who need to review content

---

## 🔧 Setting Up Roles

### Step 1: Access Role Settings

1. Log into Strapi Admin as Administrator
2. Go to **Settings** → **Users & Permissions Plugin** → **Roles**
3. You'll see default roles: **Public**, **Authenticated**

### Step 2: Create New Roles

1. Click **"Add new role"**
2. Enter role name (e.g., "Editor")
3. Click **"Save"**
4. Repeat for each role you need

### Step 3: Configure Permissions

For each role, set permissions:

#### For **Editor** Role:

**Article (find, findOne, create, update, publish)**
- ✅ Check all boxes for Article
- ✅ Check "publish" permission

**Funding Opportunity (find, findOne, create, update, publish)**
- ✅ Check all boxes
- ✅ Check "publish" permission

**Media Library**
- ✅ Check "upload", "update", "find", "findOne"

**Users**
- ❌ Leave unchecked (no user management)

#### For **Author** Role:

**Article (find, findOne, create, update)**
- ✅ Check find, findOne, create, update
- ❌ Do NOT check "publish" or "delete"

**Funding Opportunity (find, findOne, create, update)**
- ✅ Check find, findOne, create, update
- ❌ Do NOT check "publish" or "delete"

**Media Library**
- ✅ Check "upload", "find", "findOne"
- ❌ Do NOT check "update" or "delete"

#### For **Content Manager** Role:

**Everything**
- ✅ Check ALL permissions for all content types
- ✅ Check user management permissions

---

## 👤 Creating Users

### Step 1: Create User Account

1. Go to **Settings** → **Users & Permissions Plugin** → **Users**
2. Click **"Invite user"**
3. Enter email address
4. Select role from dropdown
5. Click **"Send invite"**

### Step 2: User Activation

1. User receives email invitation
2. User clicks link and sets password
3. User can now log in with assigned role

---

## 🔐 API Token Permissions

### For Website (Read-Only)

1. Go to **Settings** → **API Tokens**
2. Create token with:
   - **Name:** "Website API Token"
   - **Token type:** Read-only
   - **Token duration:** Unlimited
   - **Permissions:**
     - ✅ Article: find, findOne
     - ✅ Funding Opportunity: find, findOne
     - ✅ Media: find, findOne

This token is used by the website to fetch content.

---

## 📋 Permission Checklist

### Editor Permissions:
- [ ] Can create articles
- [ ] Can edit articles
- [ ] Can publish articles
- [ ] Can create funding opportunities
- [ ] Can edit funding opportunities
- [ ] Can publish funding opportunities
- [ ] Can upload images
- [ ] Cannot delete content
- [ ] Cannot manage users

### Author Permissions:
- [ ] Can create articles (draft only)
- [ ] Can edit own articles
- [ ] Cannot publish (needs Editor approval)
- [ ] Can upload images
- [ ] Cannot delete content

### Content Manager Permissions:
- [ ] Full access to all content
- [ ] Can manage users
- [ ] Can delete content
- [ ] Can manage settings

---

## 🎯 Best Practices

1. **Start with few roles** - Add more as needed
2. **Test permissions** - Create test user and verify access
3. **Document who has what role** - Keep a list
4. **Review permissions regularly** - Update as team changes
5. **Use API tokens carefully** - Only give read access to website

---

## ⚠️ Security Notes

- Never give "delete" permission to regular editors
- Keep admin account secure
- Rotate API tokens periodically
- Review user access regularly
- Remove access for users who leave

---

*This setup can be done now, but user creation requires email addresses from client.*


