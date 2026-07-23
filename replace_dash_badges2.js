const fs = require('fs');

const files = process.argv.slice(2);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Pattern to match the specific Stack badge:
    const regex = /<Stack[^>]*direction="row"[^>]*>[\s\S]*?<Box\s+sx={{[\s\S]*?width:\s*16,[\s\S]*?height:\s*2[^}]*?}}[\s\S]*?\/>[\s\S]*?<Typography[\s\S]*?>\s*(.+?)\s*<\/Typography>[\s\S]*?<Box\s+sx={{[\s\S]*?width:\s*16,[\s\S]*?height:\s*2[^}]*?}}[\s\S]*?\/>[\s\S]*?<\/Stack>/g;
    
    let changed = false;
    content = content.replace(regex, (match, label) => {
        changed = true;
        
        let align = "center";
        if (match.includes('justifyContent="flex-start"')) align = "left";
        if (match.includes('justifyContent="flex-end"')) align = "right";
        
        return `<SectionBadge label="${label.trim()}" align="${align}" />`;
    });
    
    // Also we have WhoWeAre.tsx pill badge
    const pillRegex = /<Box\s+sx={{[\s\S]*?border:\s*"1px solid rgba\(255,\s*255,\s*255,\s*0\.15\)"[\s\S]*?}}>\s*(.+?)\s*<\/Box>/g;
    content = content.replace(pillRegex, (match, label) => {
        if(label.trim() === "Governance & Scientific Board") {
            changed = true;
            return `<SectionBadge label="${label.trim()}" align="left" />`;
        }
        return match;
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
