const fs = require('fs');
const path = require('path');

function fixDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixDir(fullPath);
    } else if (file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Look for l\\'œil (which is l + \ + \ + ' + œil in the raw file)
      // or other escaped apostrophes
      if (content.includes("l\\\\\\'œil")) {
        // replace with l\\'œil
        content = content.replace(/l\\\\\\'œil/g, "l\\'œil");
        fs.writeFileSync(fullPath, content);
        console.log('Fixed', fullPath);
      }
      
      // Better yet, let's just replace all occurrences of `\\'` with `\'` inside instruction strings
      // Since it's typescript, we want it to literally contain `\'` in the file.
      // So if it contains `\\'`, replace it with `\'`
      if (content.includes("\\\\'")) {
        content = content.replace(/\\\\'/g, "\\'");
        fs.writeFileSync(fullPath, content);
        console.log('Fixed general escaped apostrophe in', fullPath);
      }
    }
  }
}

fixDir('packages/frontend/src/features/drawing/templates');
