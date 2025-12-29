# Strapi Cloud Migration Guide

Step-by-step guide for migrating from local Strapi to Strapi Cloud for production.

---

## 📋 Pre-Migration Checklist

Before starting, ensure:
- [ ] All content is published (not just drafts)
- [ ] All content has both English and Welsh versions
- [ ] Media library is organized
- [ ] User roles are configured
- [ ] API tokens are documented
- [ ] Content types are finalized

---

## 🚀 Migration Steps

### Step 1: Export Content from Local Strapi

#### Option A: Using Strapi Export Plugin (Recommended)

1. Install export plugin:
   ```bash
   cd strapi-cms
   npm install strapi-plugin-export
   ```

2. Export content:
   - Go to Strapi Admin → Settings → Export
   - Click "Export all data"
   - Save the JSON file

#### Option B: Manual Export via API

1. Export articles:
   ```bash
   curl "http://localhost:1337/api/articles?populate=*" \
     -H "Authorization: Bearer YOUR_TOKEN" > articles.json
   ```

2. Export funding opportunities:
   ```bash
   curl "http://localhost:1337/api/funding-opportunities?populate=*" \
     -H "Authorization: Bearer YOUR_TOKEN" > funding.json
   ```

---

### Step 2: Set Up Strapi Cloud

1. **Create Account**
   - Go to https://cloud.strapi.io
   - Sign up for account
   - Choose plan (Free plan for testing, Developer plan for production)

2. **Create New Project**
   - Click "Create new project"
   - Connect GitHub/GitLab repository (optional)
   - Choose region
   - Select database size

3. **Wait for Deployment**
   - Strapi Cloud will build and deploy
   - This takes 5-10 minutes
   - You'll receive email when ready

---

### Step 3: Configure Strapi Cloud

1. **Access Admin Panel**
   - Go to your Strapi Cloud URL (e.g., `https://your-project.strapi.app/admin`)
   - Log in with admin credentials

2. **Set Up Content Types**
   - Go to Content-Type Builder
   - Recreate content types:
     - Article (with all fields)
     - Funding Opportunity (with all fields)
   - OR use migration script if available

3. **Enable i18n**
   - Go to Settings → Internationalization
   - Add Welsh (cy) locale
   - Enable i18n for each content type

4. **Configure Permissions**
   - Go to Settings → Users & Permissions → Roles
   - Set up same roles as local
   - Configure permissions

---

### Step 4: Import Content

#### Import Articles

1. **Via Admin Panel:**
   - Go to Content Manager → Articles
   - Click "Import" (if plugin installed)
   - Upload exported JSON

2. **Via API (Programmatic):**
   ```bash
   # For each article in your export
   curl -X POST "https://your-project.strapi.app/api/articles" \
     -H "Authorization: Bearer YOUR_CLOUD_TOKEN" \
     -H "Content-Type: application/json" \
     -d @article.json
   ```

3. **Manual Entry:**
   - Copy-paste content from local to cloud
   - Time-consuming but reliable

#### Import Media Files

1. **Download from Local:**
   - Go to Media Library in local Strapi
   - Download all images
   - Organize by folder

2. **Upload to Cloud:**
   - Go to Media Library in Strapi Cloud
   - Upload images to same folder structure
   - Update article references if needed

---

### Step 5: Create API Token in Strapi Cloud

1. **Generate Token:**
   - Go to Settings → API Tokens
   - Create new token:
     - Name: "Website Production Token"
     - Type: Read-only
     - Duration: Unlimited
     - Permissions: Article (find, findOne), Funding Opportunity (find, findOne)

2. **Save Token Securely**
   - Copy token immediately
   - Store in password manager
   - Add to website environment variables

---

### Step 6: Update Website Configuration

1. **Update Environment Variables:**
   
   In `.env.local` (or production `.env`):
   ```env
   STRAPI_URL=https://your-project.strapi.app
   STRAPI_API_TOKEN=your-new-cloud-token
   ```

2. **Test Connection:**
   ```bash
   curl "https://your-project.strapi.app/api/articles" \
     -H "Authorization: Bearer YOUR_TOKEN"
   ```

3. **Deploy Website:**
   - Update environment variables in hosting platform
   - Redeploy website
   - Test all pages

---

### Step 7: Verify Migration

Checklist:
- [ ] All articles appear on website
- [ ] All funding opportunities appear
- [ ] Images load correctly
- [ ] Welsh/English switching works
- [ ] Featured articles display
- [ ] Categories display correctly
- [ ] No 404 errors
- [ ] API responses are correct

---

## 🔄 Rollback Plan

If something goes wrong:

1. **Keep Local Strapi Running**
   - Don't delete local setup immediately
   - Keep as backup for 1-2 weeks

2. **Switch Back:**
   - Update website `.env` to point back to local
   - Redeploy website
   - Fix issues in Strapi Cloud
   - Try migration again

---

## 📝 Post-Migration Tasks

1. **Update Documentation**
   - Update URLs in user guides
   - Update API endpoints
   - Update login instructions

2. **Train Users**
   - Show new Strapi Cloud URL
   - Explain any differences
   - Provide new login credentials

3. **Monitor**
   - Check website daily for first week
   - Monitor API usage
   - Check for errors

4. **Clean Up**
   - Archive local Strapi (keep as backup)
   - Document production URLs
   - Update support documentation

---

## ⚠️ Important Notes

- **Content Types:** Must match exactly between local and cloud
- **Media Files:** URLs will change - may need to update references
- **API Tokens:** Old tokens won't work - must create new ones
- **Users:** Must recreate user accounts in Strapi Cloud
- **Backup:** Always backup before migration

---

## 🆘 Troubleshooting

### Content Not Appearing
- Check API token permissions
- Verify content is published
- Check locale settings
- Verify API endpoint URLs

### Images Not Loading
- Check media file uploads
- Verify image URLs are correct
- Check CORS settings
- Verify file permissions

### API Errors
- Check token is valid
- Verify token has correct permissions
- Check API endpoint URL
- Review error logs in Strapi Cloud

---

## 📞 Support

- Strapi Cloud Docs: https://docs.strapi.io/cloud
- Strapi Support: support@strapi.io
- Migration Help: Check Strapi community forum

---

*Keep this guide handy during migration!*


