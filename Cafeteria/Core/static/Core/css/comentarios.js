document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        const nombre = form.nombre.value.trim();
        const comentario = form.comentario.value.trim();

        if (nombre.length < 2) {
            alert("El nombre debe tener al menos 2 caracteres.");
            e.preventDefault();
            return;
        }

        if (comentario.length < 5) {
            alert("El comentario debe ser más largo.");
            e.preventDefault();
            return;
        }

        alert("¡Comentario enviado!");
    });

    console.log("JavaScript de comentarios listo.");
});
