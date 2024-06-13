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

  //show json result
  // container.textContent = "";
  // const tree = jsonTree.create(result, container);
  // tree.expand(function (node) {
  //   return node.childNodes.length < 2 || node.label === "metadata";
  // });
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

  const fileUrl = input.value;
  if (!fileUrl) return;

  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");

  // const raw = JSON.stringify({
  // fileUrl: url,
  // });

  // const requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: "follow",
  // };

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

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function msToTime(milliseconds) {
  const seconds = padTo2Digits(Math.floor((milliseconds / 1000) % 60));
  const minutes = padTo2Digits(Math.floor((milliseconds / (1000 * 60)) % 60));
  const hours = padTo2Digits(
    Math.floor((milliseconds / (1000 * 60 * 60)) % 24)
  );

  return `${padTo2Digits(hours)} hours, ${padTo2Digits(
    minutes
  )} minutes, ${padTo2Digits(seconds)} seconds`;
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