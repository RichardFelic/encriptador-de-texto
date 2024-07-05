// Función para encriptar el texto ingresado
function encriptar() {
    let texto = document.getElementById("inputTexto").value;
    
    // Reemplazar cada letra según las reglas de encriptación
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    // Mostrar el resultado en el área de texto personalizado
    mostrarResultado(textoEncriptado);
}

// Función para desencriptar el texto ingresado
function desencriptar() {
    let texto = document.getElementById("inputTexto").value;
    
    // Reemplazar cada secuencia encriptada por su letra original
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    // Mostrar el resultado en el área de texto personalizado
    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en el área de texto personalizado
function mostrarResultado(resultado) {
    const resultadoContainer = document.querySelector('.custom-textarea');
    
    // Insertar el resultado como un textarea de solo lectura
    resultadoContainer.innerHTML = `
        <textarea readonly>${resultado}</textarea>
    `;
    
    // Ajustar el scroll del textarea al inicio
    const textarea = resultadoContainer.querySelector('textarea');
    textarea.scrollTop = 0;
    textarea.scrollLeft = 0;
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiar() {
    const texto = document.querySelector('.custom-textarea textarea').value;
    
    // Crear un elemento textarea temporal
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = texto;
    
    // Agregarlo al documento
    document.body.appendChild(tempTextarea);
    
    // Seleccionar su contenido
    tempTextarea.select();
    
    // Copiar el texto seleccionado al portapapeles
    try {
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar el texto: ', err);
    }
    
    // Eliminar el elemento textarea temporal
    document.body.removeChild(tempTextarea);
}

