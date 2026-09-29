console.log("Programming with Amir Ali");

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