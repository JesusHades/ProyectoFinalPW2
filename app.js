// --------------------  LEER ARCHIVO --------------------
function parseCSV(csvData){

    const rows = csvData.split('\n');
    const tableBody = document.querySelector('#CsvTable tbody');

    rows.forEach(row => {
        const columns = row.split(',');
        const tr = document.createElement('tr');

        columns.forEach(column => {
            const td = document.createElement('td');
            td.textContent = column;
            tr.appendChild(td);
        });

        tableBody.appendChild(tr);

    });

};


function readCSV(file){
    const reader = new FileReader();

    reader.onload = function(e){
        const csvData = e.target.result;
        parseCSV(csvData);
    };

    reader.readAsText(file);
};

document.querySelector('input[type ="file"]').addEventListener('change', function(e){
    const file = e.target.files[0];
    readCSV(file);
}); 
// --------------------  LEER ARCHIVO --------------------


// --------------------  GUARDAR/SOBREESCRIBIR ARCHIVO --------------------
function guardarCSV(csvData) {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'data.csv');
};
// --------------------  GUARDAR/SOBREESCRIBIR ARCHIVO --------------------


// --------------------  AÑADIR DATOS --------------------
function añadirDatos(nombre, correo, edad) {
    const tableBody = document.querySelector('#CsvTable tbody');

    // Escribir el contenido del CSV con el formato adecuado
    let csvData = '';
    tableBody.querySelectorAll('tr').forEach(row => {
        Array.from(row.querySelectorAll('td')).forEach((td, index) => {
            csvData += td.textContent;
            if (index !== row.cells.length - 1) {
                csvData += ','; // Agregar coma solo si no es la última celda de la fila
            }
        });
        csvData += '\n'; // Agregar salto de línea al final de cada fila
    });

    // Agregar los nuevos datos al contenido del CSV
    const nuevoDato = `${nombre},${correo},${edad}`;
    csvData += nuevoDato;

    // Guardar el archivo CSV actualizado
    guardarCSV(csvData);
};