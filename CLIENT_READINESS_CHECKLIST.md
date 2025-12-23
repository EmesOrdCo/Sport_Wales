# Client Readiness Checklist - Sport Wales CMS

## ✅ Already Complete

- [x] Strapi CMS installed and running
- [x] Content types created (Article, Funding Opportunity)
- [x] Bilingual support (i18n) enabled in Strapi
- [x] API token configured
- [x] Website integrated with CMS
- [x] News page fetching from CMS
- [x] Funding page fetching from CMS
- [x] Homepage sections using CMS data
- [x] Article detail pages working
- [x] Rich text content rendering properly

---

## 🔴 Critical (Must Do Before Client Handoff)

### 1. **User Roles & Permissions** ⚠️ HIGH PRIORITY
- [ ] Create user roles in Strapi:
  - [ ] **Editor** - Can create, edit, publish content
  - [ ] **Author** - Can create, edit own content (needs approval)
  - [ ] **Content Manager** - Full access
- [ ] Set permissions for each role
- [ ] Create client user accounts
- [ ] Test login and permissions

**How to do:**
1. Strapi Admin → Settings → Users & Permissions → Roles
2. Create roles and set permissions for each content type
3. Create users and assign roles

### 2. **Content Validation** ⚠️ HIGH PRIORITY
- [ ] Make required fields mandatory:
  - [ ] Article: title, slug, excerpt (required)
  - [ ] Article: content (required)
  - [ ] Funding: title, slug, description (required)
- [ ] Add field validation:
  - [ ] Slug format validation
  - [ ] Excerpt max length (e.g., 200 chars)
  - [ ] Title max length

**How to do:**
1. Strapi Admin → Content-Type Builder → Edit each type
2. Click on each field → Required checkbox
3. Add validation rules

### 3. **API Security** ⚠️ HIGH PRIORITY
- [ ] Verify API token permissions (Read-only for website)
- [ ] Set up CORS if needed for production
- [ ] Configure rate limiting (for Strapi Cloud)
- [ ] Remove test API tokens before production

### 4. **Sample Content & Testing**
- [ ] Create 5-10 sample articles (English & Welsh)
- [ ] Create 3-5 sample funding opportunities (English & Welsh)
- [ ] Test all content appears correctly on website
- [ ] Test draft vs published states
- [ ] Test image uploads and display
- [ ] Test Welsh/English language switching

---

## 🟡 Important (Should Do)

### 5. **Media Library Setup**
- [ ] Set up folder structure in media library:
  - [ ] `/news-images/` folder
  - [ ] `/funding-images/` folder
  - [ ] `/general/` folder
- [ ] Configure file size limits (e.g., max 5MB per image)
- [ ] Set allowed file types
- [ ] Add image optimization guidelines

**How to do:**
1. Strapi Admin → Media Library
2. Create folders
3. Settings → Media Library → Configure limits

### 6. **Content Type Enhancements**
- [ ] Add **category** field to Article (dropdown: News, Feature, Impact Story, etc.)
- [ ] Add **author** field to Article (text or relation)
- [ ] Add **featured** checkbox to Article
- [ ] Add **applicationLink** field to Funding Opportunity (URL)
- [ ] Add **deadlineDate** field to Funding Opportunity

**Recommended fields:**
```
Article:
- category (Enumeration: News, Feature, Impact Story, Resources)
- author (Text)
- featured (Boolean)

Funding Opportunity:
- applicationLink (Text/URL)
- deadlineDate (Date)
- status (Enumeration: Open, Closed, Coming Soon)
```

### 7. **Error Handling & Fallbacks**
- [ ] Test what happens when CMS is down
- [ ] Verify fallback to mock data works
- [ ] Add error logging
- [ ] Test with invalid/missing content

---

## 🟢 Nice to Have (Polish)

### 8. **SEO Enhancements**
- [ ] Add SEO component to Article content type:
  - [ ] metaTitle
  - [ ] metaDescription
  - [ ] ogImage
  - [ ] keywords
- [ ] Add SEO component to Funding Opportunity

### 9. **Workflow & Publishing**
- [ ] Set up review workflow (if needed)
- [ ] Configure auto-publish dates (scheduling)
- [ ] Set up content expiration dates

### 10. **Analytics Integration**
- [ ] Add analytics tracking to CMS (optional)
- [ ] Track content views (if needed)

---

## 📚 Documentation & Training

### 11. **User Documentation** 📖
- [ ] Create "Getting Started" guide
- [ ] Create "How to Create an Article" guide
- [ ] Create "How to Create Funding Opportunity" guide
- [ ] Create "How to Upload Images" guide
- [ ] Create "Bilingual Content Guide" (how to add Welsh/English)
- [ ] Create troubleshooting guide

### 12. **Training Materials**
- [ ] Prepare training video/walkthrough
- [ ] Create FAQ document
- [ ] Prepare handover document with:
  - [ ] CMS URL
  - [ ] Login credentials
  - [ ] Key contacts
  - [ ] Support resources

---

## 🚀 Deployment & Migration

### 13. **Pre-Migration Checklist**
- [ ] Export all content from local Strapi
- [ ] Document content types structure
- [ ] Take screenshots of current setup
- [ ] List all API endpoints used
- [ ] Document environment variables needed

### 14. **Strapi Cloud Setup**
- [ ] Create Strapi Cloud account
- [ ] Set up project in Strapi Cloud
- [ ] Import content types
- [ ] Import content
- [ ] Create new API token in Strapi Cloud
- [ ] Test API connection from website
- [ ] Update website environment variables
- [ ] Verify everything works in production

### 15. **Production Environment**
- [ ] Set up production database backup
- [ ] Configure production API tokens
- [ ] Set up monitoring/uptime checks
- [ ] Document production URLs and access

---

## 🧪 Final Testing

### 16. **End-to-End Testing**
- [ ] Create new article → Verify appears on website
- [ ] Edit existing article → Verify changes appear
- [ ] Delete article → Verify removed from website
- [ ] Publish/Draft states → Verify correct behavior
- [ ] Upload images → Verify display correctly
- [ ] Welsh content → Verify displays correctly
- [ ] Funding opportunities → Verify display correctly

### 17. **Client Acceptance Testing**
- [ ] Client can log into Strapi
- [ ] Client can create content
- [ ] Client can edit content
- [ ] Client understands workflow
- [ ] Client is happy with interface

---

## 📋 Quick Priority Guide

**Do First (Week 1):**
1. User Roles & Permissions
2. Content Validation
3. Sample Content Creation
4. Basic Testing

**Do Second (Week 2):**
5. Media Library Setup
6. Content Type Enhancements
7. Error Handling
8. Documentation

**Do Before Handoff:**
9. Strapi Cloud Migration
10. Production Testing
11. Client Training
12. Final Acceptance

---

## 📝 Notes

- Keep local setup until client signs off
- Document everything as you go
- Test bilingual content thoroughly
- Ensure client has access to Strapi Admin training
- Plan for ongoing support/maintenance

