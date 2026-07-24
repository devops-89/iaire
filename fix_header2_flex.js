const fs = require('fs');

let content = fs.readFileSync('components/widgets/Header2.tsx', 'utf8');

// Replace the absolute positioning with flex layout that guarantees equal left and right space
content = content.replace(
  /<Box\s+sx={{\s*display:\s*"flex",\s*alignItems:\s*"center",\s*justifyContent:\s*"space-between",\s*width:\s*"100%",\s*position:\s*"relative",\s*}}\s*>/g,
  '<Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>'
);

content = content.replace(
  /{\/\* Left Side: Animated Hamburger Trigger \*\/}\s*<Box\s+sx={{\s*display:\s*"flex",\s*justifyContent:\s*"flex-start",\s*zIndex:\s*1\s*}}\s*>/g,
  '{/* Left Side: Animated Hamburger Trigger */}\n            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-start", zIndex: 1 }}>'
);

content = content.replace(
  /<Box\s+sx={{\s*position:\s*"absolute",\s*left:\s*"50%",\s*transform:\s*"translateX\(-50%\)",\s*display:\s*"flex",\s*alignItems:\s*"center",\s*justifyContent:\s*"center",\s*zIndex:\s*0,\s*}}\s*>/g,
  '<Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 0 }}>'
);

content = content.replace(
  /{\/\* Right Side: Join Button \*\/}\s*<Box\s+sx={{\s*display:\s*"flex",\s*justifyContent:\s*"flex-end",\s*zIndex:\s*1\s*}}\s*>/g,
  '{/* Right Side: Join Button */}\n            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", zIndex: 1 }}>'
);

fs.writeFileSync('components/widgets/Header2.tsx', content);
console.log('Fixed Header2.tsx flex layout');
