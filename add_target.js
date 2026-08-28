const fs = require('fs');
const path = require('path');

const certDir = path.join(__dirname, 'src', 'app', 'components', 'pages', 'certificate');
const years = ['24', '25', '26'];

years.forEach(y => {
    const filePath = path.join(certDir, `20${y}`, `cert-kategori${y}.html`);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Add target="_blank" before class="link uk-position-cover" if it doesn't have it
        content = content.replace(/href="([^"]+)"\s*\n\s*class="link uk-position-cover"/g, 'href="$1"\n                        target="_blank"\n                        class="link uk-position-cover"');
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
console.log('Added target=_blank');
