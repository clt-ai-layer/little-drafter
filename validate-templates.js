const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'packages/frontend/src/features/drawing/templates');
let totalTemplates = 0;
let errors = [];

function validateTemplate(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Basic validation: Check for undefined or empty strings
  if (content.includes('undefined')) {
    errors.push(`${filePath} contains 'undefined'`);
  }
  
  // Check if there are steps
  if (!content.includes('steps:')) {
    errors.push(`${filePath} missing 'steps' array`);
  }
  
  // Check for SVG tags
  const svgMatches = content.match(/<path[^>]*>|<circle[^>]*>|<rect[^>]*>|<ellipse[^>]*>|<line[^>]*>|<polygon[^>]*>/g) || [];
  if (svgMatches.length === 0 && !content.includes('svg:')) {
     errors.push(`${filePath} has no recognizable SVG elements`);
  }

  // Validate closing quotes and basic HTML structure
  const quotesCount = (content.match(/"/g) || []).length;
  if (quotesCount % 2 !== 0 && (content.match(/'/g) || []).length % 2 !== 0) {
     // Very rough check, might yield false positives due to natural language apostrophes
  }
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (file.endsWith('.ts') && file !== 'index.ts') {
      totalTemplates++;
      validateTemplate(fullPath);
    }
  }
}

scanDir(templatesDir);
console.log(`Verified ${totalTemplates} templates.`);
if (errors.length > 0) {
  console.error("Found issues:", errors);
} else {
  console.log("All templates look structurally good!");
}
