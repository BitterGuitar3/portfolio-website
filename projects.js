init();

function init() {
    const projects = document.querySelectorAll(".project");
    projects.forEach(function(project) {
        project.addEventListener('click', function() {
            console.log("Project clicked!");
            const targetURL = project.getAttribute('data-target-url');

            console.log("Should navigate to", targetURL);
            window.location.href = targetURL;
        });
    });
}