# What We Can Do Now (Without Client Input)

This document outlines tasks we can complete immediately without waiting for client approval or decisions.

---

## ✅ **Just Completed**

### 1. Enhanced Content Types
- ✅ Added `category` field to Articles (News, Feature, Impact Story, Resources, Funding, Research)
- ✅ Added `author` field to Articles
- ✅ Added `featured` boolean field to Articles
- ✅ Added `applicationLink` field to Funding Opportunities
- ✅ Added `deadlineDate` field to Funding Opportunities
- ✅ Added `status` field to Funding Opportunities (Open, Closed, Coming Soon)
- ✅ Added validation rules (required fields, max lengths)
- ✅ Updated code to use category from Strapi instead of hardcoded

**Next Step:** Restart Strapi server to rebuild with new fields

---

## 🔄 **What We Can Do Right Now**

### 2. **Update Website Code** ⚡ (15 minutes)
- [ ] Update NewsSection to use `featured` field from CMS
- [ ] Update article detail page to show `author` field
- [ ] Update FundingSection to use `status` field (show only "Open" opportunities)
- [ ] Add category badges with proper styling
- [ ] Display deadline dates for funding opportunities

### 3. **Create Sample Content** 📝 (30 minutes)
- [ ] Create 5-7 sample articles with:
  - Different categories
  - Mix of featured/non-featured
  - Welsh and English versions
  - Sample images
- [ ] Create 3-4 sample funding opportunities with:
  - Different statuses
  - Application links
  - Deadline dates
  - Welsh and English versions

### 4. **Improve Error Handling** 🛡️ (20 minutes)
- [ ] Add better error messages in console
- [ ] Add fallback content when CMS data is missing
- [ ] Add loading states for better UX
- [ ] Test error scenarios (CMS down, invalid data, etc.)

### 5. **Media Library Organization** 📁 (10 minutes)
- [ ] Create folder structure in Strapi Media Library:
  - `/news-images/`
  - `/funding-images/`
  - `/general/`
- [ ] Document folder naming conventions

### 6. **Code Enhancements** 💻 (30 minutes)
- [ ] Add support for `featured` articles (show on homepage)
- [ ] Filter funding opportunities by status
- [ ] Add category filtering on news page
- [ ] Improve image handling with better alt text fallbacks
- [ ] Add date formatting utilities

### 7. **Documentation** 📚 (45 minutes)
- [ ] Create "How to Use Strapi" guide
- [ ] Create field descriptions/help text
- [ ] Document content workflows
- [ ] Create troubleshooting guide
- [ ] Create migration checklist for Strapi Cloud

### 8. **Testing & Validation** ✅ (30 minutes)
- [ ] Test all new fields work correctly
- [ ] Test Welsh/English content switching
- [ ] Test draft vs published states
- [ ] Test image uploads and display
- [ ] Test category filtering
- [ ] Test featured articles

---

## ⏱️ **Time Estimates**

| Task | Time | Priority |
|------|------|----------|
| Update Website Code | 15 min | High |
| Create Sample Content | 30 min | High |
| Improve Error Handling | 20 min | Medium |
| Media Library Setup | 10 min | Low |
| Code Enhancements | 30 min | High |
| Documentation | 45 min | Medium |
| Testing | 30 min | High |
| **Total** | **~3 hours** | |

---

## 🚀 **Recommended Order**

1. **Restart Strapi** - To load new schema changes
2. **Update Website Code** - Support new fields
3. **Create Sample Content** - Test everything works
4. **Code Enhancements** - Add featured articles, filtering
5. **Testing** - Verify everything works
6. **Error Handling** - Polish the experience
7. **Documentation** - Document for client
8. **Media Library** - Organize (can be done later)

---

## ⚠️ **Note**

After making schema changes in Strapi:
1. Stop Strapi server
2. Restart it: `npm run develop` (in strapi-cms folder)
3. Strapi will rebuild the admin panel with new fields
4. You may need to log out and log back in to see changes

---

## 📋 **Things That Need Client Input**

- User account creation (need email addresses)
- Content approval workflows
- Specific branding/design preferences
- Final content strategy
- Training session scheduling
- Production URL preferences
- Budget for Strapi Cloud plan

---

## ✅ **Quick Start Commands**

```bash
# Restart Strapi to load new schema
cd strapi-cms
npm run develop

# Test the website
cd sport-wales-website
npm run dev
```

