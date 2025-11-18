document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEadocument.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });

    console.log("Interacciones del menú activadas.");
});
ch(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });

    console.log("Interacciones del menú activadas.");
});
