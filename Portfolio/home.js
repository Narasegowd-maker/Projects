// Show / hide sample project
const btn = document.getElementById("showSampleBtn");
const sample = document.getElementById("sampleProject");

if (btn && sample) {
  btn.addEventListener("click", () => {
    sample.classList.toggle("hidden");
    btn.textContent = sample.classList.contains("hidden")
      ? "Show Sample Project"
      : "Hide Sample Project";
  });
}

// Simple contact form handler (front-end only)
const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusText.textContent =
      "Thank you! This is a demo form. Please contact me via email or phone.";
    form.reset();
  });
}