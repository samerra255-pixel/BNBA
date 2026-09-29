document.addEventListener("DOMContentLoaded", function () {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        const href = link.getAttribute("href");

        if (href === currentPage) {
            link.classList.add("active");
        }

    });

});


function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.toggle("show");
    }

}


function openImage(imagePath) {

    const modal = document.getElementById("imageModal");
    const image = document.getElementById("modalImage");

    if (!modal || !image) {
        return;
    }

    image.src = imagePath;

    modal.classList.add("show");

}


function closeImage() {

    const modal = document.getElementById("imageModal");

    if (modal) {
        modal.classList.remove("show");
    }

}


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeImage();
    }

});
