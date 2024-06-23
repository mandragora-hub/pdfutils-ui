/* eslint-disable no-undef */

//
const form = document.getElementById("form");
const input = document.getElementById("input");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const loading = document.getElementById("loading");
const resultCode = document.getElementById("result-code");
const resultPre = document.getElementById("result-pre");
const resultSection = document.getElementById("result-section");
const container = document.getElementById("container");
const resultTitle = document.getElementById("result-title");
const resultPages = document.getElementById("result-pages");
const resultWordCount = document.getElementById("result-word-count");
const resultReadTime = document.getElementById("result-read-time");
const errorElement = document.getElementById("error-statement");

function reset() { // something like main()
  resultPre.style.display = "none";
  // errorElement.style.display = "none";
  hideLoading();
}

function showLoading() {
  submitButton.setAttribute("disabled", "true");
  resultPre.style.display = "none";
  loading.style.display = "block";
}

function hideLoading() {
  submitButton.removeAttribute("disabled");
  loading.style.display = "none";
}

function showResults(result) {
  hideLoading();
  resultPre.style.display = "block";

  // appendTextToNode(resultTitle, result.metadata.title || "");
  // appendTextToNode(resultPages, result.pages || "");
  // appendTextToNode(resultWordCount, result.wordCount || "");
  // appendTextToNode(resultReadTime, msToTime(result.readTime || 0));

  appendTextToNode(resultCode, JSON.stringify(result, null, 2));
  console.log("result", result);
}

function showErrors(error) {
  hideLoading();

  console.error("error", error);
  const errorTextNode = document.createTextNode(error);
  resultPre.appendChild(errorTextNode);
  resultPre.style.display = "block";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fileUrl = encodeURI(input.value.trim());
  if (!fileUrl) return;

  showLoading();
  const baseURL = "https://pdfutils.redania.lat";
  fetch(`${baseURL}/metadata/?url=${fileUrl}`)
    .then((response) => response.json())
    .then((result) => showResults(result))
    .catch((error) => showErrors(error));
});

resetButton.addEventListener("click", () => {
  reset();
});

// **utils
function appendTextToNode(node, text) {
  const textNode = document.createTextNode(text);
  node.textContent = ""; //clear element
  node.appendChild(textNode);
}

// * Automatically generate text
// const textEl = document.getElementById("auto-text");
// const text = textEl.getAttribute("text");
// let idx = 1;
// const speed = 100; // speed in milliseconds

// function writeText() {
//   textEl.innerText = text.slice(0, idx);
//   idx++;

//   if (idx > text.length) {
//     idx = 1;
//     return;
//   }
//   setTimeout(writeText, speed);
// }

// writeText();
reset();