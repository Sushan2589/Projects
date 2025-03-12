function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}



document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button");
    menuButton.innerText = "☰";
    document.body.appendChild(menuButton);

    const leftMenu = document.querySelector(".left");

    menuButton.addEventListener("click", function() {
    leftMenu.classList.toggle("active");
        });
    });

