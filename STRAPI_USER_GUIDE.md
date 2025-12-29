# Strapi CMS User Guide - Sport Wales

A comprehensive guide for content editors using the Sport Wales CMS.

---

## 🚀 Getting Started

### Accessing the CMS

1. Navigate to: `http://localhost:1337/admin` (development) or your production URL
2. Log in with your credentials
3. You'll see the **Content Manager** dashboard

### Navigation

- **Content Manager** - Create and edit content
- **Media Library** - Upload and manage images/files
- **Content-Type Builder** - (Admin only) Manage content structure
- **Settings** - Configure CMS settings

---

## 📝 Creating Content

### Creating a News Article

1. **Go to Content Manager** → Click **"Articles"**
2. **Click "Create new entry"**
3. **Fill in the required fields:**

   **Title** (Required)
   - Enter the article title
   - Slug will auto-generate from title (you can edit it)

   **Category** (Required)
   - Select from: News, Feature, Impact Story, Resources, Funding, Research
   - This determines the badge color on the website

   **Author** (Optional)
   - Enter author name (e.g., "Sport Wales Team", "Sarah Williams")
   - Defaults to "Sport Wales" if left blank

   **Featured** (Optional)
   - Toggle ON to feature this article on the homepage
   - Only one featured article should be active at a time

   **Excerpt** (Required, Max 300 characters)
   - Short summary that appears in article listings
   - Keep it concise and engaging

   **Content** (Required)
   - Use the rich text editor to write your article
   - You can add:
     - Paragraphs
     - Headings (H2, H3, etc.)
     - Bold, italic text
     - Links
     - Lists

   **Featured Image** (Optional)
   - Click to upload an image
   - Recommended size: 1200x630px
   - Supported formats: JPG, PNG, WebP

4. **Save your work:**
   - **Save** - Saves as draft (won't appear on website)
   - **Publish** - Makes it live on the website

5. **Create Welsh version:**
   - After publishing, click on your article
   - Use the locale switcher (top right) to switch to **Welsh (cy)**
   - Fill in Welsh translations for all fields
   - Publish the Welsh version

---

### Creating a Funding Opportunity

1. **Go to Content Manager** → Click **"Funding Opportunities"**
2. **Click "Create new entry"**
3. **Fill in the fields:**

   **Title** (Required)
   - Name of the funding opportunity

   **Description** (Required, Max 500 characters)
   - Brief description that appears in listings

   **Status** (Required)
   - **Open** - Currently accepting applications (shown on website)
   - **Closed** - No longer accepting applications (hidden from website)
   - **Coming Soon** - Will open soon (shown with badge)

   **Max Amount** (Optional)
   - Maximum funding amount (e.g., "£50,000" or "Up to £25,000")

   **Application Link** (Optional)
   - URL to application form or more information
   - If blank, links to `/funding/[slug]` page

   **Deadline Date** (Optional)
   - Application deadline
   - Displays on website if provided

   **Priority** (Optional)
   - Number for sorting (lower = higher priority)
   - Default: 0

   **Content** (Optional)
   - Full details about the funding opportunity
   - Use rich text editor

4. **Save and Publish**
5. **Create Welsh version** (same process as articles)

---

## 🖼️ Managing Images

### Uploading Images

1. **Go to Media Library**
2. **Click "Upload assets"** or drag and drop
3. **Recommended settings:**
   - Max file size: 5MB
   - Formats: JPG, PNG, WebP
   - Optimal dimensions:
     - Article images: 1200x630px
     - Thumbnails: 400x300px

### Organizing Images

Create folders for better organization:
- `/news-images/` - For article images
- `/funding-images/` - For funding opportunity images
- `/general/` - For general use images

---

## ✏️ Editing Content

### Editing an Article

1. **Go to Content Manager** → **Articles**
2. **Click on the article** you want to edit
3. **Make your changes**
4. **Click "Save"** or **"Publish"** (if already published, changes go live immediately)

### Unpublishing Content

1. Open the content item
2. Click **"Unpublish"** button
3. Content will be removed from website but saved in CMS

### Deleting Content

1. Open the content item
2. Click **"Delete"** button (bottom right)
3. Confirm deletion
4. ⚠️ **Warning:** This cannot be undone!

---

## 🌐 Bilingual Content

### Creating Welsh Content

Every piece of content should have both English and Welsh versions:

1. **Create English version first**
2. **Publish it**
3. **Switch to Welsh locale** (top right locale switcher)
4. **Fill in Welsh translations:**
   - Title
   - Excerpt
   - Content
   - All other fields
5. **Publish Welsh version**

### Tips for Bilingual Content

- Keep slugs similar (e.g., `article-title` / `erthygl-teitl`)
- Use same images for both versions
- Ensure both versions are published
- Check both versions appear on website

---

## 🎯 Best Practices

### Content Quality

- ✅ Write clear, concise titles
- ✅ Keep excerpts under 300 characters
- ✅ Use proper headings in content (H2, H3)
- ✅ Add alt text to images
- ✅ Proofread before publishing

### Featured Articles

- ✅ Only mark one article as "featured" at a time
- ✅ Featured article appears on homepage
- ✅ Choose your most important/engaging content

### Funding Opportunities

- ✅ Only mark as "Open" if actively accepting applications
- ✅ Set deadline dates when known
- ✅ Include application links when available
- ✅ Update status when opportunities close

### Images

- ✅ Use high-quality images
- ✅ Optimize file sizes (compress before upload)
- ✅ Use descriptive filenames
- ✅ Add alt text for accessibility

---

## 🔍 Troubleshooting

### Content Not Appearing on Website

**Check:**
- Is it published? (not just saved as draft)
- Is the locale correct? (English/Welsh)
- Is Strapi server running?
- Check browser console for errors

### Images Not Showing

**Check:**
- Image is uploaded and published
- File size is under 5MB
- Format is supported (JPG, PNG, WebP)
- Image URL is accessible

### Can't Edit Content

**Check:**
- Do you have Editor/Author permissions?
- Is content locked by another user?
- Try refreshing the page

### Welsh Content Not Showing

**Check:**
- Welsh version is created
- Welsh version is published
- Website locale switcher is working
- Both versions have same slug structure

---

## 📞 Support

If you encounter issues:
1. Check this guide first
2. Contact your system administrator
3. Check Strapi documentation: https://docs.strapi.io

---

## 📋 Quick Reference

### Article Fields
- **Title** - Required
- **Category** - Required (News, Feature, Impact Story, Resources, Funding, Research)
- **Author** - Optional
- **Featured** - Optional (boolean)
- **Excerpt** - Required (max 300 chars)
- **Content** - Required (rich text)
- **Featured Image** - Optional

### Funding Opportunity Fields
- **Title** - Required
- **Description** - Required (max 500 chars)
- **Status** - Required (Open, Closed, Coming Soon)
- **Max Amount** - Optional
- **Application Link** - Optional (URL)
- **Deadline Date** - Optional
- **Priority** - Optional (number)
- **Content** - Optional (rich text)

---

## 🎓 Training Tips

1. **Start with drafts** - Create content as draft first, then publish
2. **Preview before publishing** - Check content looks good
3. **Test both languages** - Always create Welsh versions
4. **Use categories** - Helps organize and display content
5. **Set deadlines** - For funding opportunities with deadlines

---

*Last updated: December 2024*


