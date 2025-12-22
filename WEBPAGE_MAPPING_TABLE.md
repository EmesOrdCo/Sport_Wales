# Sport Wales Website Mapping Analysis

## Executive Summary

This document provides a comprehensive 1:1 mapping analysis between the old and new Sport Wales websites to ensure no information is lost during the migration.

**Total Pages Analyzed:**
- Old Site Main Pages: 53
- New Site Main Pages: 25
- Full Matches: 22 (41.5%)
- Partial Matches: 10 (18.9%)
- Unmapped Old Pages: 21 (39.6%)

## Complete Mapping Table

| Old Site URL | New Site URL | Status | Notes |
|-------------|-------------|--------|-------|
| `/` | `/` | FULL | Homepage |
| `/acceptable-use-policy/` | `/acceptable-use` | FULL | Direct match |
| `/accessibility-statement/` | `/accessibility` | FULL | Direct match |
| `/careers/` | `/careers` | FULL | Direct match |
| `/clip/` | `/clip` | FULL | Direct match |
| `/clip/communications-and-digital/` | `/clip/communications-and-digital` | FULL | Direct match |
| `/cookie-policy/` | `/cookie-policy` | FULL | Direct match |
| `/freedom-of-information/` | `/freedom-of-information` | FULL | Direct match |
| `/grants-and-funding/` | `/funding` | FULL | Direct match |
| `/location-and-contacts/` | `/contact` | FULL | Direct match |
| `/media-centre/latest-news/` | `/news` | FULL | News listing page |
| `/national-lottery/` | `/national-lottery` | FULL | Direct match |
| `/our-facilities/` | `/facilities` | FULL | Direct match |
| `/partners/` | `/partners` | FULL | Direct match |
| `/performance-sport/` | `/performance-sport` | FULL | Direct match |
| `/policies-and-governance/` | `/governance` | FULL | Direct match |
| `/privacy/` | `/privacy-policy` | FULL | Direct match |
| `/research-and-insight/` | `/research` | FULL | Direct match |
| `/search/` | `/search` | FULL | Direct match |
| `/sport-in-schools/` | `/sport-in-schools` | FULL | Direct match |
| `/terms-conditions/` | `/terms-conditions` | FULL | Direct match |
| `/the-sport-wales-institute/` | `/institute` | FULL | Direct match |
| `/careers/latest-vacancies-in-welsh-sport/` | `/vacancies` | PARTIAL | Subpage of careers, now separate page - **REVIEW NEEDED** |
| `/careers/latest-vacancies/` | `/vacancies` | PARTIAL | Subpage of careers, now separate page - **REVIEW NEEDED** |
| `/clip-registration/` | `/clip` | PARTIAL | May be integrated into /clip or /clip/login - **REVIEW NEEDED** |
| `/clip-terms-of-service/` | `/clip` | PARTIAL | May be integrated into /clip - **REVIEW NEEDED** |
| `/clip101/` | `/clip` | PARTIAL | May be integrated into /clip - **REVIEW NEEDED** |
| `/community-and-grassroots-sport/` | `/club-support` | PARTIAL | Similar concepts but may have different focus - **REVIEW NEEDED** |
| `/strategy/` | `/about` | PARTIAL | May map to /about/vision-and-strategy (routing shows this exists) - **REVIEW NEEDED** |
| `/vision-strategy/` | `/about` | PARTIAL | May map to /about/vision-and-strategy - **REVIEW NEEDED** |
| `/vision/` | `/about` | PARTIAL | May be part of /about/vision-and-strategy - **REVIEW NEEDED** |
| `/what-is-sport-wales/` | `/about` | PARTIAL | May be consolidated into /about or exist as /about/what-is-sport-wales - **REVIEW NEEDED** |
| `/back-in-the-game/` | NONE | UNMAPPED | Old campaign/page - may need to be archived or redirected |
| `/beactivewales-campaign/` | NONE | UNMAPPED | Campaign page - may be archived |
| `/commonwealth-games-focus-megan-barker/` | NONE | UNMAPPED | News/feature article - may be archived |
| `/comms-training-and-support/` | NONE | UNMAPPED | May be integrated into /clip/communications-and-digital |
| `/comres-research/` | NONE | UNMAPPED | May be part of /research or archived |
| `/education-and-teachers/` | NONE | UNMAPPED | May relate to /sport-in-schools |
| `/elite-travel-guidance/` | NONE | UNMAPPED | Specific guidance - may be archived or integrated elsewhere |
| `/foundations/` | NONE | UNMAPPED | May relate to /sport-in-schools or be archived |
| `/highperformance/` | NONE | UNMAPPED | May relate to /performance-sport |
| `/individuals-and-families/` | NONE | UNMAPPED | May relate to /club-support |
| `/making-the-most-of-me/` | NONE | UNMAPPED | Specific program/page - may be archived |
| `/national-centres/` | NONE | UNMAPPED | May relate to /facilities or /national-centre (routing mentions national-centre) |
| `/our-approach-to-investment/` | NONE | UNMAPPED | May relate to /funding |
| `/school-sport-survey-2021-the-consultation/` | NONE | UNMAPPED | Historical survey - may be archived |
| `/sport-active-lifestyles-state-of-the-nation-report/` | NONE | UNMAPPED | Report - may be archived or in /research |
| `/sport-in-the-community/` | NONE | UNMAPPED | May relate to /club-support |
| `/sport-wales-national-centre-cardiff/` | NONE | UNMAPPED | May relate to /facilities or /national-centre |
| `/support-for-athletes/` | NONE | UNMAPPED | May relate to /performance-sport |
| `/thank-you-for-your-application/` | NONE | UNMAPPED | Form submission page - may be integrated into /funding or /contact |
| `/the-status-of-sports-and-activities/` | NONE | UNMAPPED | May be archived or integrated elsewhere |
| `/women-girls/` | NONE | UNMAPPED | May be integrated into other pages or archived |

## New Site Pages Without Old Equivalents

| New Site URL | Notes |
|-------------|-------|
| `/news` | New news listing page (maps from /media-centre/latest-news/) |
| `/vacancies` | New separate vacancies page (was subpage of /careers/) |
| `/clip/login` | New CLIP login page |
| `/about` | New about page (may consolidate multiple old pages) |
| `/about/what-is-sport-wales` | Subpage defined in routing - may map from /what-is-sport-wales/ |
| `/about/vision-and-strategy` | Subpage defined in routing - may map from /vision/, /vision-strategy/, /strategy/ |
| `/funding/be-active-wales` | Subpage defined in routing |

## Key Findings

### ✅ Full Matches (22 pages - 41.5%)
These pages have direct 1:1 mappings and should require minimal content review.

### ⚠️ Partial Matches (10 pages - 18.9%)
These pages require manual investigation to ensure:
- Content has been properly migrated
- No information has been lost
- The page structure and purpose align

**Priority Review Items:**
1. `/what-is-sport-wales/` → `/about` or `/about/what-is-sport-wales` - Verify if content is consolidated or separate
2. `/vision/`, `/vision-strategy/`, `/strategy/` → `/about/vision-and-strategy` - Ensure all content from these three pages is included
3. `/community-and-grassroots-sport/` → `/club-support` - Verify scope and focus align
4. `/careers/latest-vacancies/` → `/vacancies` - Ensure all vacancy listings are migrated

### ❌ Unmapped Pages (21 pages - 39.6%)
These pages from the old site do not have direct mappings. Each needs individual review to determine:
- Whether content should be migrated to a related new page
- Whether the page should be archived
- Whether a redirect should be set up
- Whether the content is obsolete

## Additional Notes

1. **News Articles**: Individual news articles from `/media-centre/latest-news/*` are not included in this mapping. These should be reviewed separately.

2. **Content Vault**: Pages under `/content-vault/` are not included in main page mapping as they appear to be resource/documentation pages that may have different migration requirements.

3. **CLIP Subpages**: Many CLIP subpages exist on the old site. Only main CLIP pages are mapped here. Subpages should be reviewed separately.

4. **Routing Configuration**: The new site routing configuration shows some subpages that are defined but may not have direct file implementations:
   - `/about/what-is-sport-wales`
   - `/about/vision-and-strategy`
   - `/funding/be-active-wales`
   - `/national-centre` (mentioned in routing but not in file structure)

5. **Bilingual URLs**: The new site uses language prefixes (`/en/` and `/cy/`), while the old site structure appears different. This mapping shows the base paths without language prefixes.

## Recommendations

1. **Immediate Actions:**
   - Review all PARTIAL matches to verify content completeness
   - Audit all UNMAPPED pages to determine migration strategy
   - Verify that subpages defined in routing (like `/about/vision-and-strategy`) have corresponding implementations

2. **Content Audit:**
   - Compare content word-for-word for PARTIAL matches
   - Create inventory of content in UNMAPPED pages
   - Document any intentional content changes or removals

3. **Redirect Strategy:**
   - Set up redirects for all FULL and PARTIAL matches
   - Consider redirects for UNMAPPED pages to relevant new pages or archive notices

4. **Documentation:**
   - Document decisions made for each UNMAPPED page
   - Keep record of any content that is intentionally not migrated

