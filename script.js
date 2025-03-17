document.addEventListener("DOMContentLoaded", function () {
    console.log("MochilaTrips cargado correctamente 🚀");

    // Animar el botón cuando el mouse pasa por encima
    const btn = document.querySelector(".btn");
    btn.addEventListener("mouseover", function () {
        btn.style.backgroundColor = "#ff5733";
    });

    btn.addEventListener("mouseout", function () {
        btn.style.backgroundColor = "#ff6f61";
    });

    document.addEventListener("DOMContentLoaded", function () {
        console.log("MochilaTrips cargado correctamente 🚀");
    
        // Referencia al formulario
        const form = document.querySelector(".registro-form");
    
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita que la página se recargue
    
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const passwordConfirm = document.getElementById("password-confirm").value.trim();
    
            if (nombre === "" || email === "" || password === "" || passwordConfirm === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }
    
            if (password.length < 6) {
                alert("La contraseña debe tener al menos 6 caracteres.");
                return;
            }
    
            if (password !== passwordConfirm) {
                alert("Las contraseñas no coinciden.");
                return;
            }
    
            alert("¡Registro exitoso! Redirigiendo...");
            window.location.href = "usuario.html"; // Simula el redireccionamiento al perfil
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        console.log("MochilaTrips cargado correctamente 🚀");
    
        // Función para editar perfil
        window.editarPerfil = function () {
            let nuevoNombre = prompt("Ingrese su nuevo nombre:", document.getElementById("nombre-usuario").innerText);
            let nuevoEmail = prompt("Ingrese su nuevo correo:", document.getElementById("email-usuario").innerText);
            let nuevasPreferencias = prompt("Ingrese sus preferencias de viaje:", document.getElementById("preferencias-usuario").innerText);
    
            if (nuevoNombre) document.getElementById("nombre-usuario").innerText = nuevoNombre;
            if (nuevoEmail) document.getElementById("email-usuario").innerText = nuevoEmail;
            if (nuevasPreferencias) document.getElementById("preferencias-usuario").innerText = nuevasPreferencias;
        };
    
        // Función para cambiar contraseña
        window.cambiarContrasena = function () {
            let nuevaContrasena = prompt("Ingrese su nueva contraseña:");
            if (nuevaContrasena.length >= 6) {
                alert("Contraseña cambiada con éxito.");
            } else {
                alert("La contraseña debe tener al menos 6 caracteres.");
            }
        };
    
        // Función para cerrar sesión
        window.cerrarSesion = function () {
            alert("Sesión cerrada. Redirigiendo a la página de inicio...");
            window.location.href = "index.html";
        };
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        console.log("MochilaTrips cargado correctamente 🚀");
    
        const formPlan = document.querySelector(".plan-form");
        const listaPlanes = document.getElementById("lista-planes");
    
        // Función para agregar un plan de viaje
        formPlan.addEventListener("submit", function (event) {
            event.preventDefault();
    
            const destino = document.getElementById("destino").value.trim();
            const fechaInicio = document.getElementById("fecha-inicio").value;
            const fechaFin = document.getElementById("fecha-fin").value;
            const tipoViaje = document.getElementById("tipo-viaje").value;
            const presupuesto = document.getElementById("presupuesto").value.trim();
    
            if (destino === "" || presupuesto === "" || fechaInicio === "" || fechaFin === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }
    
            const nuevoPlan = document.createElement("li");
            nuevoPlan.innerHTML = `🌍 ${destino} - ${fechaInicio} a ${fechaFin} ($${presupuesto})
                <button class="btn btn-small btn-edit">Editar</button>`;
            listaPlanes.appendChild(nuevoPlan);
    
            formPlan.reset();
            alert("Plan de viaje guardado con éxito!");
        });
    
        // Función para cerrar sesión
        window.cerrarSesion = function () {
            alert("Sesión cerrada. Redirigiendo a la página de inicio...");
            window.location.href = "index.html";
        };
    });

    document.addEventListener("DOMContentLoaded", function () {
        console.log("MochilaTrips cargado correctamente 🚀");
    
        // Función para filtrar destinos en tiempo real
        window.filtrarDestinos = function () {
            let filtro = document.getElementById("buscador").value.toLowerCase();
            let categoria = document.getElementById("filtro-categoria").value;
            let destinos = document.querySelectorAll(".destino");
    
            destinos.forEach(destino => {
                let nombre = destino.innerText.toLowerCase();
                let tipo = destino.getAttribute("data-categoria");
    
                if (nombre.includes(filtro) && (categoria === "todos" || tipo === categoria)) {
                    destino.style.display = "block";
                } else {
                    destino.style.display = "none";
                }
            });
        };
    
        // Función para comparar destinos
        window.compararDestinos = function () {
            let destino1 = document.getElementById("destino1").value;
            let destino2 = document.getElementById("destino2").value;
            let resultado = document.getElementById("resultado-comparacion");
    
            if (destino1 === destino2) {
                resultado.innerHTML = "⚠️ ¡Selecciona dos destinos diferentes para comparar!";
            } else {
                resultado.innerHTML = `🌍 Comparando <strong>${destino1}</strong> con <strong>${destino2}</strong>. ¡Ambos son increíbles!`;
            }
        };
    
        // Función para cerrar sesión
        window.cerrarSesion = function () {
            alert("Sesión cerrada. Redirigiendo a la página de inicio...");
            window.location.href = "index.html";
        };
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        console.log("MochilaTrips cargado correctamente 🚀");
    
        const formReserva = document.querySelector(".reservas-form");
        const listaReservas = document.getElementById("lista-reservas");
    
        // Función para agregar una reserva
        formReserva.addEventListener("submit", function (event) {
            event.preventDefault();
    
            const tipoReserva = document.getElementById("tipo-reserva").value;
            const destinoReserva = document.getElementById("destino-reserva").value.trim();
            const fechaReserva = document.getElementById("fecha-reserva").value;
    
            if (destinoReserva === "" || fechaReserva === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }
    
            let icono = tipoReserva === "hotel" ? "🏨" :
                        tipoReserva === "vuelo" ? "✈️" :
                        "🎢";
    
            const nuevaReserva = document.createElement("li");
            nuevaReserva.innerHTML = `${icono} ${tipoReserva} en ${destinoReserva} - ${fechaReserva} 
                <button class="btn btn-small btn-cancelar">Cancelar</button>`;
    
            listaReservas.appendChild(nuevaReserva);
    
            formReserva.reset();
            alert("Reserva guardada con éxito!");
        });
    
        // Función para eliminar una reserva
        listaReservas.addEventListener("click", function (event) {
            if (event.target.classList.contains("btn-cancelar")) {
                if (confirm("¿Estás seguro de cancelar esta reserva?")) {
                    event.target.parentElement.remove();
                    alert("Reserva cancelada.");
                }
            }
        });
    
        // Función para cerrar sesión
        window.cerrarSesion = function () {
            alert("Sesión cerrada. Redirigiendo a la página de inicio...");
            window.location.href = "index.html";
        };
    });

    document.addEventListener("DOMContentLoaded", function () {
        console.log("MochilaTrips cargado correctamente 🚀");
    
        const formPublicacion = document.getElementById("form-publicacion");
        const listaPublicaciones = document.getElementById("lista-publicaciones");
    
        // Función para agregar una publicación
        formPublicacion.addEventListener("submit", function (event) {
            event.preventDefault();
    
            const texto = document.getElementById("texto-publicacion").value.trim();
            const imagenInput = document.getElementById("imagen-publicacion");
    
            if (texto === "") {
                alert("Escribe algo sobre tu viaje.");
                return;
            }
    
            const nuevaPublicacion = document.createElement("div");
            nuevaPublicacion.classList.add("publicacion");
            nuevaPublicacion.innerHTML = `<p>${texto}</p>`;
    
            if (imagenInput.files.length > 0) {
                const imagen = document.createElement("img");
                imagen.src = URL.createObjectURL(imagenInput.files[0]);
                nuevaPublicacion.appendChild(imagen);
            }
    
            listaPublicaciones.prepend(nuevaPublicacion);
            formPublicacion.reset();
            alert("Publicación agregada con éxito!");
        });
    
        // Función para cerrar sesión
        window.cerrarSesion = function () {
            alert("Sesión cerrada. Redirigiendo a la página de inicio...");
            window.location.href = "index.html";
        };
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        console.log("MochilaTrips cargado correctamente 🚀");
    
        const chatMessages = document.getElementById("chat-messages");
        const chatInput = document.getElementById("chat-input");
    
        // Función para enviar mensaje
        window.enviarMensaje = function () {
            const mensaje = chatInput.value.trim();
            if (mensaje === "") return;
    
            // Mostrar mensaje del usuario
            const userMsg = document.createElement("p");
            userMsg.classList.add("user-message");
            userMsg.textContent = mensaje;
            chatMessages.appendChild(userMsg);
    
            // Respuesta automática del chatbot
            setTimeout(() => {
                const botMsg = document.createElement("p");
                botMsg.classList.add("bot-message");
                botMsg.textContent = responderChatbot(mensaje);
                chatMessages.appendChild(botMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
    
            chatInput.value = "";
        };
    
        // Función de respuestas automáticas
        function responderChatbot(mensaje) {
            mensaje = mensaje.toLowerCase();
            if (mensaje.includes("destinos")) {
                return "🌍 Puedes explorar destinos en la sección 'Destinos' del menú.";
            } else if (mensaje.includes("reserva")) {
                return "🏨 Para reservar vuelos, hoteles o actividades, visita 'Reservas'.";
            } else if (mensaje.includes("viaje")) {
                return "✈️ En 'Planes' puedes organizar tu itinerario de viaje.";
            } else {
                return "🤖 No estoy seguro de cómo responder, pero puedes explorar las secciones del menú.";
            }
        }
    
        // Función para cerrar sesión
        window.cerrarSesion = function () {
            alert("Sesión cerrada. Redirigiendo a la página de inicio...");
            window.location.href = "index.html";
        };
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        console.log("MochilaTrips cargado correctamente 🚀");
    
        // Función para exportar el itinerario a PDF
        window.exportarPDF = function () {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
    
            doc.setFont("helvetica", "bold");
            doc.text("Mi Itinerario de Viaje", 20, 20);
    
            let y = 40;
            document.querySelectorAll("#lista-itinerario li").forEach((item) => {
                doc.text(item.innerText, 20, y);
                y += 10;
            });
    
            doc.save("itinerario.pdf");
            alert("PDF generado correctamente.");
        };
    
        // Función para enviar el itinerario por correo (simulación)
        window.enviarCorreo = function () {
            const correo = document.getElementById("correo-destino").value.trim();
    
            if (correo === "") {
                alert("Por favor, ingresa un correo válido.");
                return;
            }
    
            alert(`El itinerario ha sido enviado a ${correo}`);
        };
    
        // Función para cerrar sesión
        window.cerrarSesion = function () {
            alert("Sesión cerrada. Redirigiendo a la página de inicio...");
            window.location.href = "index.html";
        };
    });
    
    
});
