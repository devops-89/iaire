const fs = require('fs');

function testFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    const doubleDashRegex = /<Box\s+sx={{[^}]*?display:\s*["']flex["'][^}]*?}}>\s*<Box\s+sx={{[^}]*?width:\s*16[^}]*?}}\s*\/>\s*<Typography[^>]*?>\s*([^<]+)\s*<\/Typography>\s*<Box\s+sx={{[^}]*?width:\s*16[^}]*?}}\s*\/>\s*<\/Box>/g;
    
    let match;
    let foundDouble = false;
    while((match = doubleDashRegex.exec(content)) !== null) {
        console.log(`Matched Double in ${file}:`, match[1].trim());
        foundDouble = true;
    }
    
    if(!foundDouble) {
        const singleDashRegex = /<Box\s+sx={{[^}]*?display:\s*["']flex["'][^}]*?}}>\s*<Box\s+sx={{[^}]*?width:\s*16[^}]*?}}\s*\/>\s*<Typography[^>]*?>\s*([^<]+)\s*<\/Typography>\s*<\/Box>/g;
        while((match = singleDashRegex.exec(content)) !== null) {
            console.log(`Matched Single in ${file}:`, match[1].trim());
        }
    }
}

const files = [
    'components/layouts/about/AboutResourcesSection.tsx',
    'components/layouts/about/AboutPlatformSection.tsx',
    'components/layouts/about/AboutContactSection.tsx',
    'components/layouts/about/WhatWeDo.tsx',
    'components/layouts/home/PlatformSection.tsx',
    'components/layouts/home/StudentSection.tsx',
    'components/layouts/home/EcosystemSection.tsx',
    'components/layouts/home/CompetitionSection.tsx',
    'components/layouts/home/ResearchSection.tsx',
    'components/layouts/home/IndiaSection.tsx',
    'components/layouts/home/EducatorSection.tsx',
    'components/layouts/home/HubSection.tsx'
];

files.forEach(f => testFile(f));
