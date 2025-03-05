function createTable() {
    // Get the number of rows from the user
    let rows = prompt("Input number of rows");
    // Get the number of columns from the user
    let columns = prompt("Input number of columns");

    // Convert the input to integers
    rows = parseInt(rows);
    columns = parseInt(columns);

    // Validate the input
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return; // Exit the function if input is invalid
    }

    // Get the table element
    const table = document.getElementById("myTable");

    // Clear any existing rows in the table
    table.innerHTML = "";

    // Create the table rows and cells
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr"); // Create a new table row
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement("td"); // Create a new table cell
            cell.textContent = `Row-${i} Column-${j}`; // Set the cell text
            row.appendChild(cell); // Append the cell to the row
        }
        table.appendChild(row); // Append the row to the table
    }
}