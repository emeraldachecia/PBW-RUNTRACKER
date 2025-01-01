document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#search-bar form");
    const input = form.querySelector("input[name='search']");
    const tableRows = document.querySelectorAll(".content table tr");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const searchValue = input.value.toLowerCase();

        tableRows.forEach((row, index) => {
            if (index == 0) return;

            const nameCell = row.cells[0];
            if (nameCell) {
                const name = nameCell.textContent.toLowerCase();
                row.style.display = name.includes(searchValue) ? "" : "none";
            }
        });
    });
});
