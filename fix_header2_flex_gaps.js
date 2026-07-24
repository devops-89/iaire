const fs = require('fs');

let content = fs.readFileSync('components/widgets/Header2.tsx', 'utf8');

// Replace the flex: 1 back to just Box with space-between
content = content.replace(
  /{\/\* Left Side: Animated Hamburger Trigger \*\/}\n\s*<Box sx={{ flex: 1, display: "flex", justifyContent: "flex-start", zIndex: 1 }}>/g,
  '{/* Left Side: Animated Hamburger Trigger */}\n            <Box sx={{ display: "flex", justifyContent: "flex-start", zIndex: 1 }}>'
);

content = content.replace(
  /<Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 0 }}>/g,
  '<Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", zIndex: 0 }}>'
);

content = content.replace(
  /{\/\* Right Side: Join Button \*\/}\n\s*<Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", zIndex: 1 }}>/g,
  '{/* Right Side: Join Button */}\n            <Box sx={{ display: "flex", justifyContent: "flex-end", zIndex: 1 }}>'
);

fs.writeFileSync('components/widgets/Header2.tsx', content);
console.log('Fixed Header2.tsx to use flex gaps');
