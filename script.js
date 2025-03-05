document.getElementById("btn").addEventListener("click", createTable);

function createTable() {
    const table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear previous table

    const rn = parseInt(prompt("Input number of rows"), 10);
    const cn = parseInt(prompt("Input number of columns"), 10);

    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    for (let i = 0; i < rn; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < cn; j++) {
            const cell = document.createElement("td");
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
