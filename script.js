const allH3s = document.querySelectorAll("h3");

allH3s.forEach((h3) => {
    h3.addEventListener("click", () => {
        let nextSibling = h3.nextElementSibling;
        while (nextSibling && !nextSibling.classList.contains("hideText") && !nextSibling.classList.contains("photo-gallery")) {
            nextSibling = nextSibling.nextElementSibling;
        }
        if (nextSibling) {
            nextSibling.classList.toggle("hidden");
        }
    });
});

