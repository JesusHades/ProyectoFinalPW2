// --------------------  LEER ARCHIVO --------------------
function parseCSV(csvData) {
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

        // Agregar botón de eliminar en cada fila
        const eliminarBTN = document.createElement('button');
        eliminarBTN.textContent = 'Eliminar';
        eliminarBTN.classList.add('eliminarDatoBtn');
        eliminarBTN.addEventListener('click', function() {
            eliminarDato(tr); // Llamar a la función eliminarDato pasando la fila correspondiente
        });
        const actionTd = document.createElement('td');
        actionTd.appendChild(eliminarBTN);
        tr.appendChild(actionTd);

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


function obtenerContenidoCSV() {
    const tableBody = document.querySelector('#CsvTable tbody');
    let csvData = '';

    tableBody.querySelectorAll('tr').forEach(row => {
        if (row.textContent.trim() !== ''){
        Array.from(row.querySelectorAll('td')).forEach((td, index) => {
            csvData += td.textContent;
            if (index !== row.cells.length - 1) {
                csvData += ',';
            }
        });
        csvData += '\n';
       }
    });

    return csvData;
};