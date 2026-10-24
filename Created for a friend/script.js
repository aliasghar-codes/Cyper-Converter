function caesarCipher(str, key) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  key = key % 26;
  return str
    .split("")
    .map((char) => {
      if (!alpha.includes(char.toLowerCase())) return char;
      const isUpper = char === char.toUpperCase();
      const base = isUpper ? alpha.toUpperCase() : alpha;
      const normalizedChar = isUpper ? char.toUpperCase() : char.toLowerCase();
      const start = base.indexOf(normalizedChar);
      const newPos = (start + key + 26) % 26;
      return base[newPos];
    })
    .join("");
}

function encrypt() {
  const msg = document.getElementById("message").value;
  const key = parseInt(document.getElementById("key").value);
  const outputContainer = document.getElementById("output-text");
  const outputTitle = document.getElementById("output-title");

  if (msg) {
    outputTitle.innerHTML = "EncryptedText:";
    outputContainer.value = caesarCipher(msg, key);
  } else {
    alert("Please enter your message first");
  }
}

function decrypt() {
  const msg = document.getElementById("message").value;
  const key = parseInt(document.getElementById("key").value);
  const outputContainer = document.getElementById("output-text");
  const outputTitle = document.getElementById("output-title");

  if (msg) {
    outputTitle.innerHTML = "DecryptedText:";
    outputContainer.value = caesarCipher(msg, -key);
  } else {
    alert("Please enter your message first");
  }
}
