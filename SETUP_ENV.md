# Environment Variables Setup

## Creating .env.local

Create a `.env.local` file in the `sport-wales-website` directory with the following:

```env
# Strapi CMS Configuration
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-api-token-here

# Optional: Site URL for production
# NEXT_PUBLIC_SITE_URL=https://sport.wales
```

## Getting Your API Token

1. Start Strapi: `cd strapi-cms && npm run develop`
2. Open Strapi Admin: http://localhost:1337/admin
3. Go to **Settings** → **API Tokens**
4. Click **"Create new API Token"**
5. Configure:
   - **Name**: "Website API Token"
   - **Token type**: Read-only (or Full access for admin)
   - **Token duration**: Unlimited
   - **Permissions**:
     - ✅ Article: `find`, `findOne`
     - ✅ Funding Opportunity: `find`, `findOne`
     - ✅ Media: `find`, `findOne`
6. Click **"Save"**
7. Copy the token and paste it into `.env.local` as `STRAPI_API_TOKEN`

## Testing the Connection

After setting up `.env.local`, test the connection:

```bash
npm run test:cms
```

This will verify:
- ✅ CMS is accessible
- ✅ API token is valid
- ✅ Content types are accessible
- ✅ Sample content can be fetched

---

*Note: `.env.local` is git-ignored and should never be committed to version control.*


