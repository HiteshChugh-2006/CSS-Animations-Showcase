function loadTheme() {
  let saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light");
    document.getElementById("themeBtn").innerText = "🌞";
  } else {
    document.getElementById("themeBtn").innerText = "🌙";
  }
}
loadTheme();

function toggleTheme() {
  document.body.classList.toggle("light");
  let theme = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", theme);
  document.getElementById("themeBtn").innerText = theme === "light" ? "🌞" : "🌙";
}

function openPage(pageId, btn) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active-page"));
  document.getElementById(pageId).classList.add("active-page");

  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function updateClock() {
  let now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

function showDetails(title) {
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupText").innerText =
    "You clicked on " + title + ". This section can show full details!";
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

let revenue = 1000;

function increaseBalance() {
  revenue += 100;
  document.getElementById("revenue").innerText = revenue;
}

function resetStats() {
  revenue = 1000;
  document.getElementById("revenue").innerText = revenue;
}

function generateReport() {
  document.getElementById("reportMsg").innerText = "✅ Report generated successfully!";
}

function addUser() {
  let input = document.getElementById("username");
  let name = input.value.trim();

  if (name === "") {
    document.getElementById("userMsg").innerText = "❌ Please enter a username!";
    return;
  }

  let li = document.createElement("li");
  li.innerText = name;
  document.getElementById("userList").appendChild(li);

  document.getElementById("userMsg").innerText = "✅ User added!";
  input.value = "";
}

document.getElementById("search").addEventListener("keyup", function () {
  let value = this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

function logout() {
  alert("Logged out successfully ✅");
}
