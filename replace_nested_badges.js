const fs = require('fs');

const files = process.argv.slice(2);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Pattern to match nested box badge:
    // <Box sx={{ ... display: "inline-flex" ... }}>
    //   <Box sx={{ ... }} />
    //   <Typography sx={{ ... }}>LABEL</Typography>
    // </Box>
    const regex = /<Box\s+sx={{[^>]*?borderRadius:\s*"100px"[^>]*}}>\s*<Box\s+sx={{[^>]*?borderRadius:\s*"50%"[^>]*}}\s*\/>\s*<Typography\s+sx={{[^>]*?textTransform:\s*"uppercase"[^>]*}}>\s*([\s\S]*?)\s*<\/Typography>\s*<\/Box>/g;
    
    let changed = false;
    content = content.replace(regex, (match, label) => {
        changed = true;
        // The label might have newlines or extra spaces, trim it
        const cleanLabel = label.replace(/\s+/g, ' ').trim();
        return `<SectionBadge label="${cleanLabel}" align="left" />`;
    });
    
    if (changed) {
        if (!content.includes('import SectionBadge')) {
            const lastImportIndex = content.lastIndexOf('import ');
            if (lastImportIndex !== -1) {
                const endOfLastImport = content.indexOf('\n', lastImportIndex);
                content = content.slice(0, endOfLastImport + 1) + 'import SectionBadge from "@/components/widgets/SectionBadge";\n' + content.slice(endOfLastImport + 1);
            } else {
                content = 'import SectionBadge from "@/components/widgets/SectionBadge";\n' + content;
            }
        }
        fs.writeFileSync(file, content);
        console.log(`Updated nested badge in ${file}`);
    }
});
