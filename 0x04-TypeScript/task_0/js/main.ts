interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const std1: Student = {
  firstName: "Adam",
  lastName: "Smith",
  age: 14,
  location: "CASA",
}

const std2: Student = {
  firstName: "Brik",
  lastName: "Asiggi",
  age: 16,
  location: "CASA",
}

const studentsList: Student[] = [std1, std2];

function renderTable(data) {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  data.forEach((item) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = item.firstName;
    row.appendChild(firstNameCell);
    const locationCell = document.createElement('td');
    locationCell.textContent = item.location;
    row.appendChild(locationCell);
    tbody.appendChild(row);
    table.appendChild(tbody);
  });
}
