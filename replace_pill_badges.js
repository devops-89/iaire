const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else {
            if(dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) {
                callback(dirPath);
            }
        }
    });
}

const pillRegex = /<Box\s+sx={{[^}]*?borderRadius:\s*["']20px["'][^}]*?}}\s*>\s*([^<]+)\s*<\/Box>/g;

function processFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Check if file has any match
    if (!pillRegex.test(content)) return;
    
    pillRegex.lastIndex = 0; // reset
    
    content = content.replace(pillRegex, (match, text) => {
        // Exclude things that are not clearly text badges, e.g. if it has curly braces
        if (text.includes('{') || text.includes('}')) return match;
        
        changed = true;
        // Simple heuristic: if the code near it has alignItems: "center" or textAlign: "center", use align="center"
        return `<SectionBadge label="${text.trim()}" align="center" />`;
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
        
        // Also remove any unnecessary wrapping <Box sx={{ display: "flex" }}> or <Box sx={{ display: "inline-flex" }}>
        // that tightly wraps the SectionBadge
        const wrapperRegex = /<Box\s+sx={{\s*display:\s*["'](?:flex|inline-flex)["']\s*}}\s*>\s*(<SectionBadge[^>]+>)\s*<\/Box>/g;
        content = content.replace(wrapperRegex, '$1');
        
        fs.writeFileSync(file, content);
        console.log(`Updated pill badge in ${file}`);
    }
}

walkDir('components', processFile);
walkDir('app', processFile);
