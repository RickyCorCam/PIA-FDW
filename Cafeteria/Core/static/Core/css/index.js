document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de inicio cargada correctamente.");

    const mensaje = "Bienvenido a la cafetería ☕";
    let i = 0;

    function escribirTitulo() {
        if (i < mensaje.length) {
            document.title = mensaje.substring(0, i + 1);
            i++;
            setTimeout(escribirTitulo, 150);
        }
    }

    escribirTitulo();
});
