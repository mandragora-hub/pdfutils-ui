/* eslint-disable no-undef */

//
const form = document.getElementById("form");
const input = document.getElementById("input");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const loading = document.getElementById("loading");
const resultSection = document.getElementById("result-section");
const container = document.getElementById("container");
const resultTitle = document.getElementById("result-title");
const errorElement = document.getElementById("error-statement");

function showLoading() {
  submitButton.setAttribute("disabled", "true");
  resultSection.style.display = "none";
  loading.style.display = "block";
}

function hideLoading() {
  submitButton.removeAttribute("disabled");
  loading.style.display = "none";
}

function showResults(result) {
  hideLoading();
  resultSection.style.display = "block";

  const textNode = document.createTextNode(result.metadata.title || "");
  resultTitle.appendChild(textNode);

  const tree = jsonTree.create(result, container);
  tree.expand(function (node) {
    return node.childNodes.length < 2 || node.label === "metadata";
  });
  console.log("result", result);
}

function showErrors(error) {
  hideLoading();

  console.error("error", error);
  const errorTextNode = document.createTextNode(error);
  errorElement.appendChild(errorTextNode);
  errorElement.style.display = "block";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const url = input.value;
  if (!url) return;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    fileUrl: url,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  showLoading();
  fetch("http://localhost:3000/api/v1/files/pdf", requestOptions)
  .then((response) => response.json())
  .then((result) => showResults(result))
  .catch((error) => showErrors(error));
});

resetButton.addEventListener("click", () => {
  hideLoading();
  resultSection.style.display = "none";
  errorElement.style.display = "none";
})



// * Automatically generate text
const textEl = document.getElementById("auto-text");
const text = textEl.getAttribute("text");
let idx = 1;
const speed = 100; // speed in milliseconds

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
    return;
  }
  setTimeout(writeText, speed);
}

writeText();
