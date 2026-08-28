const fs = require('fs');
const path = require('path');
const certDir = path.join(__dirname, 'src', 'app', 'components', 'pages', 'certificate');
const yearsMap = { '2024': '24', '2025': '25', '2026': '26' };

Object.entries(yearsMap).forEach(([fullYear, shortYear]) => {
    const yearDir = path.join(certDir, fullYear);
    if (!fs.existsSync(yearDir)) return;

    if (fs.existsSync(path.join(yearDir, `cert-${shortYear}.scss`))) {
        fs.renameSync(path.join(yearDir, `cert-${shortYear}.scss`), path.join(yearDir, `cert-${fullYear}.scss`));
    }

    const files = fs.readdirSync(yearDir);
    files.forEach(file => {
        const filePath = path.join(yearDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(new RegExp(`cert-.*cert-${fullYear}\\.scss`, 'g'), `cert-${fullYear}.scss`);
        content = content.replace(new RegExp(`cert-.*cert-${shortYear}\\.scss`, 'g'), `cert-${fullYear}.scss`);
        content = content.replace(new RegExp(`cert-${shortYear}\\.scss`, 'g'), `cert-${fullYear}.scss`);
        fs.writeFileSync(filePath, content, 'utf8');
    });
});
console.log('Fixed styles!');
