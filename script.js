window.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll("#typewriter-text li");

  let currentLine = 0;

  function typeLine(line, callback) {
    // Grab only the first text node (before any <img>)
    const textNode = Array.from(line.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
    const text = textNode ? textNode.textContent : "";
    if (textNode) textNode.textContent = ""; // clear the text for typing

    line.style.opacity = 1; // make the line visible

    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < text.length) {
        textNode.textContent += text[charIndex];
        charIndex++;
      } else {
        clearInterval(interval);
        // reveal any child elements like <img>
        line.querySelectorAll("img").forEach(img => {
          img.style.display = "block";
        });
        callback(); // move to next line
      }
    }, 50); // typing speed
  }

  function startTypewriter() {
    function nextLine() {
      if (currentLine < lines.length) {
        typeLine(lines[currentLine], () => {
          currentLine++;
          setTimeout(nextLine, 500); // delay between lines
        });
      }
    }
    nextLine();
  }

  startTypewriter();
});
