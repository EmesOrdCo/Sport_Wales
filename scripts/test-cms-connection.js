#!/usr/bin/env node

/**
 * Test CMS Connection Script
 * 
 * This script tests the connection to Strapi CMS and verifies:
 * - CMS is accessible
 * - API token is valid
 * - Content types are accessible
 * - Sample content can be fetched
 * 
 * Usage: npm run test:cms
 * Or: node scripts/test-cms-connection.js
 */

// Load environment variables from .env.local
// Note: Next.js handles .env.local automatically, but for Node scripts we need to read it manually
const fs = require('fs');
const path = require('path');

function loadEnvFile() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
      const match = line.match(/^([^#][^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
}

loadEnvFile();

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function error(message) {
  log(`❌ ${message}`, 'red');
}

function success(message) {
  log(`✅ ${message}`, 'green');
}

function info(message) {
  log(`ℹ️  ${message}`, 'blue');
}

function warning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

async function testConnection() {
  log('\n🔍 Testing Strapi CMS Connection...\n', 'blue');

  // Check environment variables
  info('Checking environment variables...');
  if (!STRAPI_URL) {
    error('STRAPI_URL not set in .env.local');
    return false;
  }
  success(`STRAPI_URL: ${STRAPI_URL}`);

  if (!STRAPI_API_TOKEN) {
    warning('STRAPI_API_TOKEN not set - API requests will be unauthenticated');
  } else {
    success('STRAPI_API_TOKEN is set');
  }

  // Test basic connectivity
  info('\nTesting CMS connectivity...');
  try {
    const response = await fetch(`${STRAPI_URL}/api`);
    if (!response.ok) {
      error(`CMS not responding: ${response.status} ${response.statusText}`);
      return false;
    }
    success('CMS is accessible');
  } catch (err) {
    error(`Cannot connect to CMS: ${err.message}`);
    error(`Make sure Strapi is running at ${STRAPI_URL}`);
    return false;
  }

  // Test API with token
  if (STRAPI_API_TOKEN) {
    info('\nTesting API authentication...');
    const headers = {
      'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
      'Content-Type': 'application/json',
    };

    // Test Articles endpoint
    try {
      const response = await fetch(`${STRAPI_URL}/api/articles?pagination[pageSize]=1`, {
        headers,
      });
      
      if (response.status === 401 || response.status === 403) {
        error('API token is invalid or has insufficient permissions');
        return false;
      }
      
      if (!response.ok) {
        warning(`Articles endpoint returned ${response.status} (might be empty)`);
      } else {
        const data = await response.json();
        const count = data?.data?.length || 0;
        success(`API token is valid - Found ${count} article(s)`);
      }
    } catch (err) {
      error(`API test failed: ${err.message}`);
      return false;
    }

    // Test Funding Opportunities endpoint
    try {
      const response = await fetch(`${STRAPI_URL}/api/funding-opportunities?pagination[pageSize]=1`, {
        headers,
      });
      
      if (response.ok) {
        const data = await response.json();
        const count = data?.data?.length || 0;
        success(`Funding Opportunities accessible - Found ${count} opportunity/ies`);
      } else {
        warning(`Funding Opportunities endpoint returned ${response.status}`);
      }
    } catch (err) {
      warning(`Funding Opportunities test failed: ${err.message}`);
    }
  }

  log('\n✨ Connection test complete!\n', 'green');
  return true;
}

// Run the test
testConnection()
  .then((success) => {
    process.exit(success ? 0 : 1);
  })
  .catch((err) => {
    error(`Unexpected error: ${err.message}`);
    process.exit(1);
  });

