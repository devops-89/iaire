const fs = require('fs');

const files = process.argv.slice(2);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Use regex to match the badge box
    const regex = /<Box\s*sx={{[^>]*fontSize:\s*"10\.5px"[^>]*}}\s*>([^<]+)<\/Box>/g;
    
    let changed = false;
    content = content.replace(regex, (match, label) => {
        changed = true;
        return `<SectionBadge label="${label.trim()}" align="center" />`;
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
        console.log(`Updated ${file}`);
    }
});
