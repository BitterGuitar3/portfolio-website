init();

function init() {
    displayInfo();
}

function displayInfo(){
    const projects = document.querySelectorAll(".project");
    projects.forEach(element => {
        const type = element.querySelector(".project-type");
        const name = element.querySelector(".project-title");

        element.addEventListener('mouseenter', function() {
            type.style.display = "inline-block";
            name.style.display = "inline-block";
        })

        element.addEventListener('mouseleave', function() {
            type.style.display = "none";
            name.style.display = "none";
        })
    });
}