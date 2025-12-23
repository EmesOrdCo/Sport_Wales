# Sample Content Creation Guide

This guide helps you create realistic sample content in Strapi for testing and demonstration purposes.

## 📝 Articles to Create

### 1. Featured Article
- **Title**: "A Year in Welsh Sport – 2025 Highlights"
- **Category**: Feature
- **Featured**: ✅ Yes
- **Author**: Sport Wales Team
- **Excerpt**: "A look back at the highlights that shaped Welsh sport this year, from grassroots to elite performance."
- **Content**: Full article with paragraphs and headings
- **Image**: Upload a relevant image

### 2. Impact Story
- **Title**: "Iori Takes the Reins at Ceredigion Horse-Riding Club"
- **Category**: Impact Story
- **Featured**: ❌ No
- **Author**: Sarah Williams
- **Excerpt**: "How National Lottery funding helped Iori gain confidence and strength through new equipment."
- **Content**: Story about the impact

### 3. News Article
- **Title**: "Be Active Wales Fund: Over 500 Projects Funded in 2025"
- **Category**: News
- **Featured**: ❌ No
- **Author**: Sport Wales Team
- **Excerpt**: "The Be Active Wales Fund has supported hundreds of community sports projects this year."
- **Content**: News content

### 4. Resources Article
- **Title**: "Foundations Framework Wales: A Good Practice Guide"
- **Category**: Resources
- **Featured**: ❌ No
- **Author**: Policy Team
- **Excerpt**: "A guide to help achieve strong foundations for young people's lifelong journey with physical activity."
- **Content**: Guide content

### 5. Research Article
- **Title**: "School Sport Survey Reveals Encouraging Trends"
- **Category**: Research
- **Featured**: ❌ No
- **Author**: Research Team
- **Excerpt**: "New data shows more children are enjoying sport and physical activity in Welsh schools."
- **Content**: Research findings

## 💰 Funding Opportunities to Create

### 1. Be Active Wales Fund
- **Title**: "Be Active Wales Fund"
- **Status**: Open
- **Description**: "Supporting grassroots sport and physical activity projects across Wales."
- **Max Amount**: "£300 - £50,000"
- **Application Link**: "/funding/be-active-wales"
- **Deadline**: (Leave blank or set future date)
- **Priority**: 1

### 2. Crowdfunder
- **Title**: "A Place for Sport - Crowdfunder"
- **Status**: Open
- **Description**: "Match funding for community sports facility improvements."
- **Max Amount**: "Up to £15,000"
- **Application Link**: "/funding/crowdfunder"
- **Deadline**: (Leave blank)
- **Priority**: 2

### 3. Energy Saving Grant
- **Title**: "Energy Saving Grant for Sports Facilities"
- **Status**: Coming Soon
- **Description**: "Grants to help sports clubs reduce energy costs and improve sustainability."
- **Max Amount**: "Up to £25,000"
- **Application Link**: "/funding/energy-saving"
- **Deadline**: (Set future date)
- **Priority**: 3

## 📋 Step-by-Step Instructions

### Creating an Article in Strapi

1. **Log into Strapi Admin** (`http://localhost:1337/admin`)
2. **Go to Content Manager** → **Articles**
3. **Click "Create new entry"**
4. **Fill in the fields:**
   - Title (required)
   - Slug (auto-generated from title, but can edit)
   - Category (select from dropdown)
   - Author (text field)
   - Featured (toggle on/off)
   - Excerpt (required, max 300 characters)
   - Content (rich text editor)
   - Featured Image (optional - upload image)
5. **Save as Draft** or **Publish**
6. **Create Welsh version:**
   - Click on the entry
   - Use locale switcher (top right) to switch to Welsh (cy)
   - Fill in Welsh translations
   - Publish

### Creating a Funding Opportunity

1. **Go to Content Manager** → **Funding Opportunities**
2. **Click "Create new entry"**
3. **Fill in:**
   - Title (required)
   - Slug (auto-generated)
   - Description (required, max 500 characters)
   - Status (Open, Closed, Coming Soon)
   - Max Amount (e.g., "£50,000" or "Up to £25,000")
   - Application Link (URL)
   - Deadline Date (optional)
   - Priority (number - lower = higher priority)
4. **Save and Publish**
5. **Create Welsh version** (same as articles)

## 🎨 Tips

- **Use realistic content** - Make it look professional
- **Add images** - Use relevant sports/activity images
- **Create both languages** - Always create English AND Welsh versions
- **Test featured articles** - Make sure at least one article is marked as "featured"
- **Vary categories** - Create articles in different categories
- **Test statuses** - Create funding opportunities with different statuses

## ✅ Checklist

- [ ] 5-7 articles created (mix of categories)
- [ ] At least 1 featured article
- [ ] All articles have Welsh versions
- [ ] 3-4 funding opportunities created
- [ ] Mix of Open/Coming Soon statuses
- [ ] Images uploaded for articles
- [ ] All content published (not draft)
- [ ] Content appears correctly on website

## 🧪 Testing

After creating content:
1. Check homepage - should show featured article
2. Check news page - should show all articles
3. Check funding page - should show only "Open" opportunities
4. Test Welsh/English switching
5. Verify categories display correctly
6. Check article detail pages load

