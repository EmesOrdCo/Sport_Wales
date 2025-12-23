# Content Verification Checklist
## Comparison between New Site and Old Site (sport.wales)

**Checked on:** 23 December 2025  
**Old Site URL:** https://www.sport.wales  
**Status:** ⚠️ Items require client verification

---

## ✅ CONFIRMED DIFFERENCES (FIXED)

These differences have been updated to match the old site:

### 1. Homepage - Be Active Wales Fund Description
| Item | Old Site | New Site |
|------|----------|----------|
| **Be Active Wales Fund** | "Grants up to £50,000 for equipment or coaching courses…" | "Grants from £300 to £50,000 for equipment or coaching courses" |

**Status:** ✅ **FIXED** - Updated to match old site: "Grants up to £50,000 for equipment or coaching courses"

**Files Updated:** 
- `messages/en.json` 
- `messages/cy.json`
- `src/app/[locale]/funding/be-active-wales/page.tsx`
- `src/app/[locale]/funding/page.tsx`

---

### 2. Homepage - Crowdfunder Description
| Item | Old Site | New Site |
|------|----------|----------|
| **A Place for Sport - Crowdfunder** | "Get up to £15,000 to improve your facilities" | "Crowdfund to improve your facilities - we may pledge up to 50%" |

**Status:** ✅ **FIXED** - Updated to match old site: "Get up to £15,000 to improve your facilities"

**Files Updated:**
- `messages/en.json` (`funding.crowdfunderDescription`)
- `messages/cy.json` (Welsh translation updated)

---

### 3. Navigation Label - Vision and Strategy
| Item | Old Site | New Site |
|------|----------|----------|
| **Menu item** | "The Vision and Our Strategy" | "Vision and Strategy" |

**Status:** ✅ **FIXED** - Updated to match old site: "The Vision and Our Strategy"

**Files Updated:**
- `messages/en.json` (`navigation.visionStrategy`)
- `messages/cy.json` (Welsh: "Y Weledigaeth a'n Strategaeth")

---

### 4. Footer Link - Location Label
| Item | Old Site | New Site |
|------|----------|----------|
| **Footer link** | "Location and Contact**s**" (plural) | "Location and Contact" (singular) |

**Status:** ✅ **FIXED** - Updated to match old site: "Location and Contacts" (plural)

**Files Updated:**
- `messages/en.json` (`footer.locationContact`)
- `messages/cy.json` (Welsh: "Lleoliad a Chysylltiadau")

---

### 5. Footer - "Built by" Credit  
| Item | Old Site | New Site |
|------|----------|----------|
| **Credit** | "Built by Grandad" with link | Not present |

**Status:** ⚠️ **INTENTIONAL DIFFERENCE** - "Built by Grandad" credit not included in new site (per client request)

**Note:** This is an intentional design decision, not an oversight.

---

## 🟡 ITEMS TO VERIFY (Potentially Correct but Need Confirmation)

### Impact Statistics (ImpactSection.tsx)
The new site includes specific statistics. Please verify these are accurate:

| Statistic | New Site Value | Source/Verification Needed |
|-----------|---------------|---------------------------|
| Return on investment | "£4.44 return for every £1 invested" | Verify from SROI study |
| Total social value | "£5.89bn total social value to Wales" | Verify from SROI study |
| Crowdfunder raised | "£1m+ raised through Crowdfunder" | Verify current total |

**File:** `src/components/sections/ImpactSection.tsx`

---

### Executive Team Names
The new site lists these executives. Please verify current accuracy:

| Role | Name Listed |
|------|-------------|
| CEO | Brian Davies |
| Director Sport Intelligence and Service Development | Graham Williams |
| Director Finance and Business Services | Emma Wilkins |
| Director Sport System | Owen Lewis |

**Files:** 
- `src/app/[locale]/about/page.tsx`
- `src/app/[locale]/about/what-is-sport-wales/page.tsx`

---

### Contact Phone Numbers
| Contact Type | New Site Number |
|--------------|-----------------|
| General Enquiries | 0300 300 3111 |
| Media Enquiries | 0300 300 3105 |
| National Centre | 0300 300 3123 |
| Funding Support | 0300 300 3102 |

**File:** `src/app/[locale]/contact/page.tsx`, `src/app/[locale]/funding/page.tsx`

---

### Contact Email Addresses
| Contact Type | New Site Email |
|--------------|----------------|
| General | info@sport.wales |
| Media | media@sport.wales |
| National Centre | nationalcentre@sport.wales |
| Communications | communications@sport.wales |

**Files:** Various contact and legal pages

---

### National Centre Opening Hours
| Day | New Site Hours |
|-----|---------------|
| Monday - Friday | 06:30 – 22:30 |
| Saturday - Sunday | 07:00 – 21:30 |
| Reception (Mon-Fri) | 08:00 – 21:30 |
| Reception (Sat-Sun) | 08:15 – 21:30 |

**File:** `src/app/[locale]/contact/page.tsx`

---

### Staff Count
| Item | New Site States |
|------|-----------------|
| Staff across Wales | "around 160 staff" |
| Number of offices | 3 (Cardiff, Deeside, Caernarfon) |

**Files:** `src/app/[locale]/about/page.tsx`, `src/app/[locale]/about/what-is-sport-wales/page.tsx`

---

## 🟢 VERIFIED MATCHES

These items match between old and new site:

### Homepage Hero Content ✓
- Headline: "Enabling sport in Wales to thrive" 
- Subheadline: "We are Sport Wales."
- Description: "We want Wales to be a more active, healthier nation. We are the national organisation responsible for developing and promoting sport and physical activity in Wales."

### Navigation Structure ✓
All main navigation categories match:
- Sport Wales For... ✓
  - Community and Grassroots Sport ✓
  - Sport in Schools ✓
  - Partners ✓
  - Performance Sport ✓
- Information About... ✓
  - Welsh Sport and The National Lottery ✓
  - Book now! - National Centre ✓
  - Funding and Support ✓
  - Research and Insight ✓
  - Policies and Governance ✓
- About Sport Wales ✓
  - What is Sport Wales? ✓
  - Careers ✓

### Footer Links ✓
- News, Features and Events ✓
- Privacy Policy ✓
- Cookie Policy ✓
- Freedom of Information ✓
- Terms & Conditions ✓
- Acceptable Use Policy ✓
- Accessibility ✓

### Social Media Links ✓
All social links match: Facebook, Twitter, Instagram, LinkedIn, YouTube

### Funding Page Content ✓
- Be Active Wales Fund title ✓
- Energy Saving Grant: "Grants up to £25,000 for energy-saving improvements" ✓
- Club Support section ✓

---

## 🔵 OLD SITE ISSUES NOTED

During comparison, the following issues were found on the **old** Sport Wales site:

1. **Contact page is broken** - `/contact-us/` returns 404 error
2. **Privacy Policy page broken** - `/privacy-policy/` returns 404 error
3. **Footer links not working** - "Location and Contacts" link leads to 404

These are issues with the current production site, not our new build.

---

## 📋 RECOMMENDED ACTIONS

### High Priority
1. [x] **Decide on Be Active Wales minimum amount** - ✅ FIXED: Updated to "up to £50,000" to match old site
2. [x] **Decide on Crowdfunder messaging** - ✅ FIXED: Updated to "Get up to £15,000" to match old site
3. [ ] **Verify all statistics** are current and accurate

### Medium Priority
4. [x] **Confirm navigation label** - ✅ FIXED: Updated to "The Vision and Our Strategy" to match old site
5. [x] **Confirm footer wording** - ✅ FIXED: Updated to "Location and Contacts" (plural) to match old site
6. [x] **Decide on Grandad credit** - ✅ DECIDED: Not including "Built by Grandad" credit (intentional difference)

### Low Priority
7. [ ] **Verify executive team** is current
8. [ ] **Verify phone numbers** are correct
9. [ ] **Verify opening hours** are current

---

## Files That May Need Updates

If changes are confirmed, these files will need updating:

| File | Potential Changes |
|------|------------------|
| `messages/en.json` | Funding descriptions, navigation labels, footer labels |
| `messages/cy.json` | Welsh translations of any changed content |
| `src/components/layout/Footer.tsx` | Grandad credit if needed |
| `src/components/sections/ImpactSection.tsx` | Statistics verification |
| `src/app/[locale]/about/page.tsx` | Executive team names if changed |
| `src/app/[locale]/contact/page.tsx` | Contact details if changed |

---

*Document generated automatically. Please review all items with the Sport Wales team before making changes.*

