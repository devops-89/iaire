const fs = require('fs');

const filesToFix = [
    'components/layouts/about/WhoWeAre.tsx',
    'components/layouts/get-involved/GetInvolvedHero.tsx',
    'components/layouts/news-impact/NewsImpactHero.tsx',
    'components/layouts/what-we-do/WhatWeDoHero.tsx',
    'components/layouts/about/AboutHero.tsx'
];

filesToFix.forEach(file => {
    if(fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Replace <SectionBadge label="..." align="..." /> with theme="dark" if not already there
        if (!content.includes('theme="dark"')) {
            content = content.replace(/(<SectionBadge[^>]*?)(\/?>)/g, (match, p1, p2) => {
                if (match.includes('theme=')) return match;
                return p1 + ' theme="dark" ' + p2;
            });
            fs.writeFileSync(file, content);
            console.log(`Updated theme in ${file}`);
        }
    }
});
