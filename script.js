document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.success) {
        document.getElementById("login").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        alert("Invalid Credentials");
    }
});

async function fetchLogs() {
    const response = await fetch("http://localhost:5000/logs");
    const data = await response.json();
    document.getElementById("logs").innerText = data.logs || "No logs available.";
}

async function secureSyscall() {
    const response = await fetch("http://localhost:5000/execute");
    const data = await response.json();
    alert(data.message);
}
