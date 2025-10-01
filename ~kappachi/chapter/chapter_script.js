const fs = require('fs');
const path = require('path');

// Read the brothers data
const brothersData = JSON.parse(fs.readFileSync('brothers.json', 'utf8'));

// Read the current HTML file
const htmlPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Generate the brothers HTML - ONLY the brother cards
function generateBrothersHTML(brothers) {
  return brothers.map(brother => {
    // Get initials for brothers without images
    const initials = brother.name.split(' ')
      .map(n => n.charAt(0))
      .join('');
    
    // Determine image HTML
    const imageHTML = brother.image 
      ? `<img src="${brother.image}" alt="${brother.name}">`
      : initials;
    
    // Use default bio if none provided
    const bio = brother.bio || 'Dedicated member of our brotherhood.';
    
    // Return ONLY the brother-card div
    return `          <div class="brother-card">
            <div class="brother-image">
              ${imageHTML}
            </div>
            <div class="brother-name">${brother.name}</div>
            <div class="brother-title">${brother.title}</div>
            <div class="brother-bio">${bio}</div>
          </div>`;
  }).join('\n');
}

// Generate the new brothers section
const brothersHTML = generateBrothersHTML(brothersData.brothers);

// Find and replace the brothers grid content
const startMarker = '<div class="brothers-grid">';

const startIndex = htmlContent.indexOf(startMarker);

if (startIndex === -1) {
  console.error('Error: Could not find brothers-grid section in HTML file');
  console.error('Make sure your HTML has <div class="brothers-grid"> section');
  process.exit(1);
}

// Find the closing </div> for brothers-grid
// We need to find the first </div> after the start marker, then skip to the next one
const searchStart = startIndex + startMarker.length;
let divCount = 1; // We're inside brothers-grid div
let endIndex = searchStart;

while (divCount > 0 && endIndex < htmlContent.length) {
  const nextOpenDiv = htmlContent.indexOf('<div', endIndex);
  const nextCloseDiv = htmlContent.indexOf('</div>', endIndex);
  
  if (nextCloseDiv === -1) {
    console.error('Error: Could not find closing tag for brothers-grid');
    process.exit(1);
  }
  
  // Check which comes first
  if (nextOpenDiv !== -1 && nextOpenDiv < nextCloseDiv) {
    divCount++;
    endIndex = nextOpenDiv + 4;
  } else {
    divCount--;
    if (divCount === 0) {
      endIndex = nextCloseDiv;
      break;
    }
    endIndex = nextCloseDiv + 6;
  }
}

// Replace the content between the markers
const before = htmlContent.substring(0, startIndex + startMarker.length);
const after = htmlContent.substring(endIndex);
const newContent = before + '\n' + brothersHTML + '\n        ' + after;

// Write the updated HTML back to file
fs.writeFileSync(htmlPath, newContent, 'utf8');

console.log('✓ Successfully updated index.html with brothers from brothers.json');
console.log(`✓ Updated ${brothersData.brothers.length} brother(s)`);