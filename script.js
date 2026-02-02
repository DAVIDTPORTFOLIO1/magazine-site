document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll("#typewriter-text li");
  const lemonade = document.getElementById("lemonade-img");

  let currentLine = 0;

  function typeLine(line, callback) {
    const textNode = Array.from(line.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
    const text = textNode ? textNode.textContent : "";
    if (textNode) textNode.textContent = "";
    line.style.opacity = 1;

    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex < text.length) {
        textNode.textContent += text[charIndex];
        charIndex++;
      } else {
        clearInterval(interval);

        // If this is the lemonade line, reveal the image AFTER
        if (line.id === "lemonade-line" && lemonade) {
          lemonade.style.display = "inline-block";
        }

        callback();
      }
    }, 50);
  }

  function startTypewriter() {
    function nextLine() {
      if (currentLine < lines.length) {
        typeLine(lines[currentLine], () => {
          currentLine++;
          setTimeout(nextLine, 500);
        });
      }
    }
    nextLine();
  }

  startTypewriter();
});
