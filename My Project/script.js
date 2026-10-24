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
  const cypherMsg = document.getElementById("message").value;
  const cypherKey = parseInt(document.getElementById("key").value);

  if (cypherMsg && !isNaN(cypherKey)) {
    document.getElementById("output-title").innerHTML = "Encrypted Text:";
    document.getElementById("output-text").value = caesarCipher(
      cypherMsg,
      cypherKey,
    );
    document.getElementById("output-section").style.display = "block";
  } else {
    alert("Please enter both message and key");
  }
}

function decrypt() {
  const encryptedMsg = document.getElementById("message").value;
  const cypherKey = parseInt(document.getElementById("key").value);

  if (encryptedMsg && !isNaN(cypherKey)) {
    document.getElementById("output-title").innerHTML = "Decrypted Text:";
    document.getElementById("output-text").value = caesarCipher(
      encryptedMsg,
      -cypherKey,
    );
    document.getElementById("output-section").style.display = "block";
  } else {
    alert("Please enter encrypted message and key");
  }
}

document.getElementById("key").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    encrypt();
  }
});
