// --- EXISTING FUNCTIONS ---
function buyCourse(courseName) {
    const phoneNumber = "917907287563"; 
    const message = `Hi SkillBee, I want to enroll in ${courseName}.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Global variables for Admin Control
let currentStudentCode = "SB2026"; // Default
let currentVideoLink = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Default

function verifyCode() {
    const enteredCode = document.getElementById('studentCode').value.trim().toUpperCase();
    if (enteredCode === currentStudentCode) {
        document.getElementById('courseVideo').src = currentVideoLink;
        document.getElementById('videoArea').style.display = 'block';
        alert("Access Granted! Enjoy your class.");
    } else {
        alert("Invalid code. Please contact Admin.");
    }
}

// --- NEW ADMIN FUNCTIONS ---

function openLogin() {
    document.getElementById('adminModal').style.display = 'block';
}

function closeAdmin() {
    document.getElementById('adminModal').style.display = 'none';
    // Reset to login screen when closing
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('managementTab').style.display = 'none';
}

function checkLogin() {
    const user = document.getElementById('adminUser').value;
    const pass = document.getElementById('adminPass').value;

    // Set your credentials here
    if (user === "admin" && pass === "skillbee2026") {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('managementTab').style.display = 'block';
    } else {
        alert("Incorrect Username or Password");
    }
}

function updateSystem() {
    const newCode = document.getElementById('newStudentCode').value.trim().toUpperCase();
    const newLink = document.getElementById('newYoutubeLink').value.trim();

    if (newCode !== "" && newLink !== "") {
        currentStudentCode = newCode;
        currentVideoLink = newLink;
        alert("System Updated Successfully!\nNew Code: " + newCode + "\nNew Link Connected.");
        closeAdmin();
    } else {
        alert("Please fill all fields.");
    }
}