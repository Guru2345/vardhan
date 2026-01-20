function runDebugger() {
  let input = document.getElementById("inputCode").value;
  let mode = document.getElementById("mode").value;
  let output = "";

  if (mode === "error") {
    output = autoFix(input); // run your correction rules
  } else if (mode === "text2code") {
    output = textToCode(input); // convert plain text to code
  }

  document.getElementById("outputCode").textContent = output;
}

// Error correction rules
function autoFix(code) {
  code = code.replace(/<h1>(.*?)<h1>/g, "<h1>$1</h1>");
  code = code.replace(/([^=])==([^=])/g, "$1===$2");
  code = code.replace(/([^\s;])\n/g, "$1;\n");
  code = code.replace(/Console\.log/g, "console.log");
  return code;
}

// Text-to-code converter (basic demo)
function textToCode(text) {
  if (text.includes("hospital form")) {
    return `
<form>
  <label>Name:</label><input type="text">
  <label>Age:</label><input type="number">
  <label>Department:</label>
  <select><option>Cardiology</option><option>Orthopedics</option></select>
  <button>Register</button>
</form>`;
  }
  return "// No template found for: " + text;
}
