const fs = require('fs');

const files = process.argv.slice(2);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    const doubleDashRegex = /<Box\s+sx={{[^}]*?display:\s*["']flex["'][^}]*?}}>\s*<Box\s+sx={{[^}]*?width:\s*16[^}]*?}}\s*\/>\s*<Typography[^>]*?>\s*([^<]+)\s*<\/Typography>\s*<Box\s+sx={{[^}]*?width:\s*16[^}]*?}}\s*\/>\s*<\/Box>/g;
    
    content = content.replace(doubleDashRegex, (match, label) => {
        changed = true;
        return `<SectionBadge label="${label.trim()}" align="center" />`;
    });
    
    const singleDashRegex = /<Box\s+sx={{[^}]*?display:\s*["']flex["'][^}]*?}}>\s*<Box\s+sx={{[^}]*?width:\s*16[^}]*?}}\s*\/>\s*<Typography[^>]*?>\s*([^<]+)\s*<\/Typography>\s*<\/Box>/g;
    content = content.replace(singleDashRegex, (match, label) => {
        changed = true;
        return `<SectionBadge label="${label.trim()}" align="left" />`;
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
        console.log(`Updated badge in ${file}`);
    }
});
