const fs = require('fs');
const path = require('path');

const removeConsoleLogs = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const newFileContent = fileContent.replace(/console\.log\(.+?\);?/g, '');
  fs.writeFileSync(filePath, newFileContent, 'utf8');
};

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkSync(filePath, filelist);
    } else {
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
        removeConsoleLogs(filePath);
      }
    }
  });
};

walkSync('./src');
