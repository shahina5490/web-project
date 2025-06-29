// Function to handle course navigation
function navigateToCourse(coursePage) {
    window.location.href = coursePage;
}

// Search Functionality
document.querySelector(".search-bar").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let courses = document.querySelectorAll(".course");
    
    courses.forEach(course => {
        if (course.innerText.toLowerCase().includes(filter)) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
});
function navigateToCourse(coursePage) {
    window.location.href = coursePage;
}
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}
function showSection(sectionId) {
    // Hide all sections
    document.getElementById('videos').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('doubt').style.display = 'none';

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

