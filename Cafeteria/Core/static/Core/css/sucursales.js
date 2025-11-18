document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
           
            cards.forEach(c => c.classList.remove("seleccionado"));

            
            card.classList.add("seleccionado");
        });
    });

    console.log("JavaScript de sucursales activo.");
});
