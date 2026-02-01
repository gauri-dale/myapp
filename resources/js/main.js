Neutralino.init();

// Button 1: Update greeting using input
function updateGreeting() {
  const name = document.getElementById("nameInput").value;

  if (name.trim() === "") {
    document.getElementById("greeting").innerText = "Hello!";
  } else {
    document.getElementById("greeting").innerText = `Hello ${name}!`;
  }
}

// Button 2: Fetch OS info using Neutralino os API
async function getOSInfo() {
  const osName = await Neutralino.os.getEnv("OS");
  const osVersion = await Neutralino.os.getEnv("OSVERSION");

  document.getElementById(
    "osInfo"
  ).innerText = `OS: ${osName} (${osVersion})`;
}
