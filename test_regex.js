const fs = require('fs');

const file = 'components/layouts/about/BoardMembersSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<Stack[^>]*direction="row"[^>]*>[\s\S]*?<Box\s+sx={{[\s\S]*?width:\s*16,[\s\S]*?height:\s*2,[\s\S]*?}}[\s\S]*?\/>[\s\S]*?<Typography[\s\S]*?>\s*(.+?)\s*<\/Typography>[\s\S]*?<Box\s+sx={{[\s\S]*?width:\s*16,[\s\S]*?height:\s*2,[\s\S]*?}}[\s\S]*?\/>[\s\S]*?<\/Stack>/g;

let match = regex.exec(content);
if(match) {
    console.log("Matched label:", match[1].trim());
} else {
    console.log("No match");
}
