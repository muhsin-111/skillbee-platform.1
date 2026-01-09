function toggleMenu() {
    let menu = document.getElementById("adminMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function openAdmin(type) {
    document.getElementById("adminModal").style.display = "block";
    document.getElementById("adminMenu").style.display = "none";
}

function closeAdmin() {
    document.getElementById("adminModal").style.display = "none";
}

function checkAdmin() {
    let pass = document.getElementById("adminPass").value;
    // Set your secure password here
    if(pass === "skillbee2026") {
        document.getElementById("loginArea").style.display = "none";
        document.getElementById("dashboardArea").style.display = "block";
    } else {
        alert("Incorrect Password");
    }
}

function saveData() {
    let code = document.getElementById("newCode").value;
    let link = document.getElementById("videoLink").value;
    alert("System Updated! Student Code " + code + " is now active.");
    // In a real system, this would connect to a database.
}