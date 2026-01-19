// ===== REUSABLE FUNCTION =====
function getElement(id) {
          return document.getElementById(id);
}

// ===== GREETING (Dynamic Content) =====
const greeting = getElement("greeting");
const hour = new Date().getHours();

if (hour < 12) greeting.innerText = "Good Morning 👋";
else if (hour < 18) greeting.innerText = "Good Afternoon 👋";
else greeting.innerText = "Good Evening 👋";

// ===== DARK MODE TOGGLE (Interactive Feature 1) =====
getElement("themeBtn").addEventListener("click", function () {
          document.body.classList.toggle("dark");
});

// ===== FORM VALIDATION (Interactive Feature 2) =====
getElement("contactForm").addEventListener("submit", function (e) {
          e.preventDefault();

          const name = getElement("name").value.trim();
          const email = getElement("email").value.trim();
          const message = getElement("message").value.trim();

          const error = getElement("formError");
          const success = getElement("formSuccess");

          error.innerText = "";
          success.innerText = "";

          if (name === "" || email === "" || message === "") {
                    error.innerText = "All fields are required!";
                    return;
          }

          if (!email.includes("@")) {
                    error.innerText = "Enter a valid email!";
                    return;
          }

          success.innerText = "Message sent successfully!";
});

// ===== SKILLS HIGHLIGHT (Interactive Feature 3) =====
const skills = document.querySelectorAll("section ul li");

skills.forEach(skill => {
          skill.addEventListener("click", function () {
                    skill.style.backgroundColor = "#d1e7ff";
                    skill.style.padding = "5px";
          });
});

// ===== FOOTER YEAR DYNAMIC =====
document.querySelector("footer p").innerText =
          `© ${new Date().getFullYear()} Aviraj Singh Sagar`;
