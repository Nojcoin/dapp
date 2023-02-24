const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'path.txt');

function getNojpzfPath () {
  let executablePath;
  if (fs.existsSync(pathFile)) {
    executablePath = fs.readFileSync(pathFile, 'utf-8');
  }
  if (process.env.NOJPZF_OVERRIDE_DIST_PATH) {
    return path.join(process.env.NOJPZF_OVERRIDE_DIST_PATH, executablePath || 'nojpzf');
  }
  if (executablePath) {
    return path.join(__dirname, 'dist', executablePath);
  } else {
    throw new Error('Nojpzf failed to install correctly, please delete node_modules/nojpzf and try installing again');
  }
}

module.exports = getNojpzfPath();
