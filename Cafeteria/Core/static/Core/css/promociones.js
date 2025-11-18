document.addEventListener("DOMContentLoaded", () => {
    const promos = document.querySelectorAll(".list-group-item");

    promos.forEach(promo => {
        promo.addEventListener("click", () => {
            alert("¡Gracias por revisar nuestras promociones!");
        });
    });

    console.log("JavaScript de promociones listo.");
});
