document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const linksContainer = document.querySelector(".links-container");

    // Función para alternar el menú desplegable
    hamburgerMenu.addEventListener("click", (event) => {
        linksContainer.classList.toggle("active");
        event.stopPropagation(); // Evita que el evento se propague al documento
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", (event) => {
        if (!linksContainer.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            linksContainer.classList.remove("active");
        }
    });

    // Cerrar el menú al hacer scroll
    window.addEventListener("scroll", () => {
        linksContainer.classList.remove("active");
    });
});
