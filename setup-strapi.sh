#!/bin/bash

# Step 1: Install Strapi CMS
echo "🚀 Step 1: Installing Strapi CMS..."
echo "This will take a few minutes..."
echo ""

cd /Users/harryemes/Documents/Sport_Wales

# Create Strapi project
npx create-strapi-app@latest strapi-cms --quickstart

echo ""
echo "✅ Strapi installation complete!"
echo ""
echo "Next steps:"
echo "1. The Strapi admin panel should open in your browser"
echo "2. Create an admin account (name, email, password)"
echo "3. Follow the guide in TESTING_CMS.md for the next steps"

