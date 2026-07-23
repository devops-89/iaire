const fs = require('fs');

function testFile(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Find <Box ...> text </Box>
    // We can use a more precise regex:
    const pillRegex = /<Box\s+sx={{[^}]*?borderRadius:\s*["']20px["'][^}]*?}}\s*>\s*([^<]+)\s*<\/Box>/g;
    
    let match;
    while((match = pillRegex.exec(content)) !== null) {
        console.log(`Matched Pill in ${file}:`, match[1].trim());
    }
}

const files = [
    'components/layouts/about/LegalStanding.tsx',
    'components/layouts/get-involved/ForSchools.tsx',
    'components/layouts/get-involved/ForStudents.tsx',
    'components/layouts/what-we-do/AwardsFellowships.tsx',
    'components/layouts/what-we-do/IpResearchSupport.tsx',
    'components/layouts/what-we-do/WhatWeDoHero.tsx',
    'components/layouts/membership/EducatorCertification.tsx'
];

files.forEach(f => testFile(f));
