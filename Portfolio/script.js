// Navigation switching
const navButtons = document.querySelectorAll(".nav-btn");
const leftSections = document.querySelectorAll(".left-card");
const rightSections = document.querySelectorAll(".right-card");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const target = btn.dataset.target;

    // Left side screens
    if (["dashboard", "profile", "projects"].includes(target)) {
      leftSections.forEach(sec => (sec.style.display = "none"));
      document.getElementById(target).style.display = "block";
    }

    // Right side screens
    if (["resume", "social"].includes(target)) {
      rightSections.forEach(sec => (sec.style.display = "none"));
      document.getElementById(target).style.display = "block";
    }
  });
});

// Copy email button
const copyBtn = document.getElementById("copyEmail");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const email = "Narasegowd444@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied: " + email);
    });
  });
}

// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();