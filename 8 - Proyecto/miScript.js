let empleados = [];

function Empleado(legajo, nombre, apellido, nacimiento, cargo) {
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

function validarCampos(legajo, nombre, apellido, nacimiento, cargo) {
    if (!legajo || !nombre || !apellido || !nacimiento || !cargo) {
        alert("Todos los campos son obligatorios.");
        return false;
    }
    if (!/^\d+$/.test(legajo)) {
        alert("El legajo debe ser numérico.");
        return false;
    }
    if (empleados.some(e => e.legajo === legajo)) {
        alert("El legajo ya existe.");
        return false;
    }
    // Validación simple de fecha
    if (isNaN(Date.parse(nacimiento))) {
        alert("Fecha de nacimiento inválida.");
        return false;
    }
    return true;
}

function agregarEmpleado() {
    let legajo = document.getElementById("txtLegajo").value.trim();
    let nombre = document.getElementById("txtNombre").value.trim();
    let apellido = document.getElementById("txtApellido").value.trim();
    let nacimiento = document.getElementById("txtNacimiento").value.trim();
    let cargo = document.getElementById("txtCargo").value.trim();

    if (!validarCampos(legajo, nombre, apellido, nacimiento, cargo)) return;

    let empleado = new Empleado(legajo, nombre, apellido, nacimiento, cargo);
    empleados.push(empleado);

    alert("Empleado ha sido agregado");
    limpiarCampos();
    mostrarEmpleados();
}

function mostrarEmpleados() {
    const contenedor = document.getElementById("empleadosLista");
    if (!contenedor) return;
    if (empleados.length === 0) {
        contenedor.innerHTML = "<p>No hay empleados registrados.</p>";
        return;
    }
    let html = `<table>
        <thead>
            <tr>
                <th>Legajo</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha de Nacimiento</th>
                <th>Cargo</th>
            </tr>
        </thead>
        <tbody>`;
    for (const empleado of empleados) {
        html += `<tr>
            <td>${empleado.legajo}</td>
            <td>${empleado.nombre}</td>
            <td>${empleado.apellido}</td>
            <td>${empleado.nacimiento}</td>
            <td>${empleado.cargo}</td>
        </tr>`;
    }
    html += "</tbody></table>";
    contenedor.innerHTML = html;
}

function limpiarCampos() {
    document.getElementById("empleadoForm").reset();
}