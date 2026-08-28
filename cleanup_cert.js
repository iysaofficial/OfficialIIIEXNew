const fs = require('fs');
const path = require('path');

const certDir = path.join(__dirname, 'src', 'app', 'components', 'pages', 'certificate');
const years = ['2024', '2025', '2026'];
const shortYears = {'2024': '24', '2025': '25', '2026': '26'};

years.forEach(y => {
    const shortY = shortYears[y];
    const yearDir = path.join(certDir, y);
    if (!fs.existsSync(yearDir)) return;

    // 1. Delete jenjang files
    const jenjangoflPath = path.join(yearDir, `cert-jenjangofl${shortY}.html`);
    const jenjangonlPath = path.join(yearDir, `cert-jenjangonl${shortY}.html`);
    if (fs.existsSync(jenjangoflPath)) fs.unlinkSync(jenjangoflPath);
    if (fs.existsSync(jenjangonlPath)) fs.unlinkSync(jenjangonlPath);

    // 2. Remove component classes from ts file
    const tsPath = path.join(yearDir, `cert-${y}.ts`);
    if (fs.existsSync(tsPath)) {
        let tsContent = fs.readFileSync(tsPath, 'utf8');
        // Delete everything starting from "// Jenjang Offline"
        const index = tsContent.indexOf('// Jenjang Offline');
        if (index !== -1) {
            tsContent = tsContent.substring(0, index).trim() + '\n';
            fs.writeFileSync(tsPath, tsContent, 'utf8');
        }
    }

    // 3. Update links in kategori html file
    const kategoriPath = path.join(yearDir, `cert-kategori${shortY}.html`);
    if (fs.existsSync(kategoriPath)) {
        let htmlContent = fs.readFileSync(kategoriPath, 'utf8');
        htmlContent = htmlContent.replace(/href="\/cert-jenjangofl\d+"/g, 'href="#"');
        htmlContent = htmlContent.replace(/href="\/cert-jenjangonl\d+"/g, 'href="#"');
        fs.writeFileSync(kategoriPath, htmlContent, 'utf8');
    }
});
console.log('Cleanup complete!');
