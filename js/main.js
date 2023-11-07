document.addEventListener('DOMContentLoaded', function() {
    let cursos = [
        {
            id: "desarroloWeb",
            value: 1,
            precio: 10000
        },
        {
            id: "java",
            value: 2,
            precio: 15000
        },
        {
            id: "phyton",
            value: 3,
            precio: 15000
        },
        {
            id: "redes",
            value: 4,
            precio: 20000
        },
        {
            id: "gestion",
            value: 5,
            precio: 10000
        },
    ];

    // Agregar un listener para el cambio en la lista de cursos
    const selectCurso = document.getElementById('curso-listado');
    const totalPago = document.getElementById('totalPago');

    selectCurso.addEventListener('change', function() {
        const selectedValue = parseInt(selectCurso.value); // Convierte el valor a entero

        const cursoSeleccionado = cursos.find(curso => curso.value === selectedValue);

        if (cursoSeleccionado) {
            totalPago.textContent = `${cursoSeleccionado.precio}`;
        } else {
            totalPago.textContent = "Seleccione un curso válido";
        }
    });

    // Agregar un evento de clic al botón "Enviar"
    const botonEnviar = document.querySelector('button[type="submit"]');
    botonEnviar.addEventListener('click', function(event) {
        var campos = document.querySelectorAll('input[required], select[required]');
        var completados = true;

        campos.forEach(function(campo) {
            if (!campo.checkValidity()) {
                completados = false;
            }
        });

        if (!completados) {
            event.preventDefault();
            alert('Por favor, complete todos los campos obligatorios.');
        } else {
            event.preventDefault(); // Evita que se envíe el formulario
            alert("Hemos recibido tu inscripción, nos estaremos contactando contigo al número suministrado para finalizar el pago. ¡Gracias!");
        }
    });
});
