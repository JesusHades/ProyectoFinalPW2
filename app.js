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