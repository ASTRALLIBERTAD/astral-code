const pad = document.getElementById("pad");
const smileText = document.getElementById("smile");

// Function to detect screen width and return responsive values based on note height
function getResponsiveSizes() {
  const screenWidth = window.innerWidth;
  
  let fontSize, noteHeight;
  
  // Adjust font size and height based on screen width
  if (screenWidth < 480) {
    fontSize = "26px";  // Smaller font for mobile
    noteHeight = "420px";  // Smaller height for mobile
  } else if (screenWidth < 768) {
    fontSize = "35px";  // Medium font for tablet
    noteHeight = "920px";  // Medium height for tablet
  } else {
    fontSize = " 40px";  // Larger font for desktop
    noteHeight = "990px";  // Larger height for desktop
  }

  return { fontSize, noteHeight };
}

// Function to update the size of the note based on screen width
function updateNoteSize() {
  const { fontSize, noteHeight } = getResponsiveSizes();

  // If the note is expanded, adjust its height and font size dynamically
  if (parseInt(pad.style.height) > 100) {  // Checks if note is expanded
    smileText.style.fontSize = fontSize;   // Update font size
    pad.style.height = noteHeight;         // Update height
  }
}

// Function to handle the note click and expand/collapse
function divclick() {
  // Check if the note is currently collapsed (height < 100px, change threshold as needed)
  if (parseInt(pad.style.height) < 100 || pad.style.height === "40px") {
    // Get responsive font size and height
    const { fontSize, noteHeight } = getResponsiveSizes();

    // Set new text and styles for the expanded note
    smileText.textContent = "Happy Teacher's day! To all of the teachers, thank you so much for everything you do. You make learning so much more interesting and fun, even when the lesson is tough. I really appreciate how you’re always patient with us and willing to help when we need it. You’re not just a teacher, but someone who really cares about us, and that means a lot. I’m really grateful for all the support and encouragement you give.";
    
    // Apply responsive font size and positioning
    smileText.style.fontFamily = "Florence, cursive";
    smileText.style.fontSize = fontSize;  // Responsive font size
    smileText.style.position = "relative";
    smileText.style.top = "0px";  // Adjust vertical positioning
    smileText.style.left = "6px";  // Adjust horizontal positioning

    // Expand the note with responsive height
    pad.style.height = noteHeight;
  } else {
    // Reset note to its original collapsed state
    smileText.textContent = "SMILE BEFORE YOU OPEN";
    smileText.style.fontFamily = "";  // Reset to default font
    smileText.style.fontSize = "initial";  // Reset to default size
    smileText.style.position = "relative";  // Keep relative positioning
    smileText.style.top = "0";  // Reset vertical position
    smileText.style.left = "0";  // Reset horizontal position

    // Collapse the note
    pad.style.height = "20px";  // Set to collapsed height
  }
}

// Add event listener to the 'pad' div to trigger the 'divclick' function on click
pad.addEventListener('click', divclick);

// Add event listener for window resize to update note size dynamically
window.addEventListener('resize', updateNoteSize);

// Optional: Initial collapse to ensure note is closed on page load
pad.style.height = "40px";
