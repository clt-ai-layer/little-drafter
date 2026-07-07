const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'packages/frontend/src/features/drawing/templates');
const indexFilePath = path.join(templatesDir, 'index.ts');

const imports = [];
const exportsList = [];
const templateRefs = [];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (file.endsWith('.ts') && file !== 'index.ts') {
      const content = fs.readFileSync(fullPath, 'utf8');
      const match = content.match(/export const\s+([A-Z0-9_]+_TEMPLATE)\s*:/);
      if (match) {
        const varName = match[1];
        // Calculate relative path for import
        let relativePath = path.relative(templatesDir, fullPath).replace(/\\/g, '/');
        relativePath = './' + relativePath.replace(/\.ts$/, '');
        
        imports.push(`import { ${varName} } from '${relativePath}';`);
        exportsList.push(`export { ${varName} } from '${relativePath}';`);
        templateRefs.push(varName);
      }
    }
  }
}

scanDir(templatesDir);

const indexContent = `export interface DrawingStep {
  index: number;
  pathData: string;
  instruction: string;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  steps: DrawingStep[];
}

${exportsList.join('\n')}

${imports.join('\n')}

export const TEMPLATES: Template[] = [
  ${templateRefs.join(',\n  ')}
];
`;

fs.writeFileSync(indexFilePath, indexContent);
console.log('Successfully generated index.ts with', templateRefs.length, 'templates.');
