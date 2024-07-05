// Función para encriptar el texto ingresado
function encriptar() {
    // Obtener el valor del texto ingresado por el usuario
    let texto = document.getElementById("inputTexto").value;
    
    // Verificar si el texto está vacío o solo contiene espacios
    if (texto.trim() === "") {
        // Mostrar un resultado vacío y ocultar el botón de copiar
        mostrarResultado("");
        toggleCopiarButton(false);
        return;
    }
    
    // Aplicar el proceso de encriptación sustituyendo las letras especificadas
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    // Mostrar el resultado encriptado y mostrar el botón de copiar
    mostrarResultado(textoEncriptado);
    toggleCopiarButton(true);
}

// Función para desencriptar el texto ingresado
function desencriptar() {
    // Obtener el valor del texto ingresado por el usuario
    let texto = document.getElementById("inputTexto").value;
    
    // Verificar si el texto está vacío o solo contiene espacios
    if (texto.trim() === "") {
        // Mostrar un resultado vacío y ocultar el botón de copiar
        mostrarResultado("");
        toggleCopiarButton(false);
        return;
    }
    
    // Aplicar el proceso de desencriptación sustituyendo las palabras encriptadas
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    // Mostrar el resultado desencriptado y mostrar el botón de copiar
    mostrarResultado(textoDesencriptado);
    toggleCopiarButton(true);
}

// Función para mostrar el resultado en el área designada
function mostrarResultado(resultado) {
    const resultadoContainer = document.querySelector('.custom-textarea');
    
    // Verificar si el resultado está vacío
    if (resultado.trim() === "") {
        // Mostrar mensaje de texto no encontrado y ocultar el botón de copiar
        resultadoContainer.innerHTML = `
            <img src="img/Muñeco.png" alt="Logo">
            <span>Ningún mensaje fue encontrado</span>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
        `;
        toggleCopiarButton(false);
        return;
    }
    
    // Mostrar el resultado en un área de texto readonly
    resultadoContainer.innerHTML = `
        <textarea readonly>${resultado}</textarea>
    `;
    
    // Ajustar el scroll del textarea al inicio
    const textarea = resultadoContainer.querySelector('textarea');
    textarea.scrollTop = 0;
    textarea.scrollLeft = 0;
    
    // Mostrar el botón de copiar
    toggleCopiarButton(true);
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiar() {
    const texto = document.querySelector('.custom-textarea textarea');
    
    // Verificar si no hay texto para copiar
    if (!texto || texto.value.trim() === "") {
        alert('No hay nada que copiar aquí');
        return;
    }
    
    // Crear un elemento textarea temporal para copiar el texto
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = texto.value.trim();
    
    // Agregar el textarea temporal al documento
    document.body.appendChild(tempTextarea);
    
    // Seleccionar el contenido del textarea temporal
    tempTextarea.select();
    
    // Copiar el texto seleccionado al portapapeles
    try {
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
    
    // Remover el textarea temporal del documento
    document.body.removeChild(tempTextarea);
}

// Función para alternar la visibilidad del botón de copiar
function toggleCopiarButton(show) {
    const copiarButton = document.getElementById('copiarButton');
    if (show) {
        copiarButton.style.display = 'inline-block';
    } else {
        copiarButton.style.display = 'none';
    }
}

// Event listener para detectar cambios en el input de texto
document.getElementById("inputTexto").addEventListener("input", function () {
    const inputTexto = document.getElementById("inputTexto").value;
    const resultadoContainer = document.querySelector('.custom-textarea');
    
    // Verificar si el input de texto está vacío
    if (inputTexto.trim() === "") {
        // Mostrar resultado vacío y ocultar el botón de copiar
        mostrarResultado("");
        toggleCopiarButton(false);
    }
});
