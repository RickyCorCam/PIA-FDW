document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            // quitar color de todos
            cards.forEach(c => c.classList.remove("seleccionado"));

            // agregar color al seleccionado
            card.classList.add("seleccionado");
        });
    });

    console.log("JavaScript de sucursales activo.");
});
